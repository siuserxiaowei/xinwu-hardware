import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { createRequire } from 'node:module';

// Use PLAYWRIGHT_PACKAGE_ROOT when Playwright is supplied by the desktop runtime.
const runtime = process.env.PLAYWRIGHT_PACKAGE_ROOT;
const require = createRequire(runtime ? `${runtime}/package.json` : import.meta.url);
const { chromium } = require('playwright');
const origin = (process.env.PREVIEW_URL || 'http://127.0.0.1:4321').replace(/\/$/, '');
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
const requests = [];
page.on('pageerror', error => errors.push(error.message));
page.on('request', request => requests.push({url:request.url(),method:request.method(),type:request.resourceType()}));
await fs.mkdir('verification', {recursive:true});
const checks = [];
async function check(name, fn) { await fn(); checks.push(name); console.log(`PASS ${name}`); }
try {
  await check('hardware routes, loaded images, desktop layout', async()=>{
    for(const path of ['/', '/products/', '/products/even-g1/', '/products/xiaodu-bear/', '/products/m20-astronaut/', '/products/plaud-note/', '/products/emo/', '/products/rabbit-r1/', '/products/plaud-notepin/', '/products/loona/', '/collections/', '/partners/', '/submit/', '/about/', '/design/', '/missing-page-smoke-test/']) {
      const response=await page.goto(origin+path,{waitUntil:'networkidle'});
      assert.equal(response.status(),['/design/','/missing-page-smoke-test/'].includes(path)?404:200,path);
      // Load any images below the fold before checking them.
      await page.locator('img').evaluateAll(images=>images.forEach(image=>image.loading='eager'));
      await page.waitForFunction(()=>[...document.images].every(image=>image.complete));
      assert.equal(await page.locator('img').evaluateAll(images=>images.every(image=>image.naturalWidth>0)),true,path);
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,path);
      assert.equal(await page.locator('video,iframe').count(),0,path);
      assert.equal(await page.locator('h1').count(),1,path);
      assert.equal(await page.locator('a[href*="/design"]').count(),0,path);
      assert.doesNotMatch(await page.locator('body').innerText(),/新物图标设计|定制图标|基础线条图标|每一枚，都有确定的意思|新物视觉语言/);
      // Outbound-window symbols must never label navigation inside this site.
      for(const link of await page.locator('a:has(svg[data-icon="external"])').evaluateAll(links=>links.map(a=>({href:a.href,target:a.target,text:a.textContent.trim()})))) {
        assert.notEqual(new URL(link.href).origin,new URL(origin).origin,path);
        assert.equal(link.target,'_blank',path);
        assert.ok(link.text.length>0,path);
      }
    }
  });
  await check('category, combined search, empty state, clear, query reload',async()=>{
    await page.goto(origin+'/products/');
    await page.locator('[data-category-filter="recorders"]').click();
    assert.equal(await page.locator('[data-product]:visible').count(),2);
    await page.getByRole('searchbox').fill('NotePin');
    assert.equal(await page.locator('[data-product]:visible').count(),1);
    await page.reload();
    assert.equal(await page.locator('[data-product]:visible').count(),1);
    await page.getByRole('searchbox').fill('并不存在的硬件');
    assert.equal(await page.locator('[data-product]:visible').count(),0);
    assert.equal(await page.locator('.empty-state').isVisible(),true);
    await page.locator('#reset-search').click();
    assert.equal(await page.locator('[data-product]:visible').count(),8);
  });
  await check('approved E sticker assets and named filter buttons',async()=>{
    await page.goto(origin+'/products/',{waitUntil:'networkidle'});
    const links=await page.locator('.category-tabs img').evaluateAll(images=>images.map(image=>image.src));
    assert.equal(links.length,5);
    for(const url of links){const response=await page.request.get(url);assert.equal(response.status(),200);assert.match(url,/\/images\/icons-e\/[^/]+\.webp$/);assert.match(response.headers()['content-type'],/image\/webp/);}
    for(const name of ['全部硬件','智能眼镜','录音与效率','陪伴机器人','随身 AI']) assert.equal(await page.getByRole('button',{name,exact:true}).count(),1);
    assert.equal(await page.locator('.category-tabs img').evaluateAll(images=>images.length===5&&images.every(image=>image.complete&&image.naturalWidth===256)),true);
  });
  await check('product page navigation and safe external video links',async()=>{
    await page.locator('.product-visual[href$="/products/even-g1/"]').click();
    assert.equal(page.url(),origin+'/products/even-g1/');
    const links=await page.locator('.video-links a').evaluateAll(nodes=>nodes.map(a=>({url:a.href,target:a.target,rel:a.rel})));
    assert.equal(links.length,2);
    for(const link of links){assert.equal(link.target,'_blank');assert.match(link.rel,/noopener/);assert.ok(link.url.includes('Even%20G1'));}
  });
  await check('draft validation, local persistence, export, clear; no POST',async()=>{
    await page.goto(origin+'/submit/');
    assert.equal(await page.locator('#product-form').evaluate(form=>form.checkValidity()),false);
    await page.locator('[name="product"]').fill('演示产品');
    await page.locator('[name="website"]').fill('https://example.com');
    await page.locator('[name="email"]').fill('demo@example.com');
    await page.locator('textarea[name="description"]').fill('本地自动化检查，不会发送。');
    await page.getByRole('button',{name:'保存本机草稿'}).click();
    assert.match(await page.locator('#form-status').textContent(),/尚未发送/);
    await page.reload();
    assert.equal(await page.locator('[name="product"]').inputValue(),'演示产品');
    const downloadEvent=page.waitForEvent('download');
    await page.locator('#export-draft').click();
    const download=await downloadEvent;
    assert.equal(download.suggestedFilename(),'新物-产品与合作资料.json');
    await download.saveAs('verification/test-draft.json');
    const draft=JSON.parse(await fs.readFile('verification/test-draft.json','utf8'));
    assert.equal(draft.product,'演示产品');
    await page.locator('#clear-draft').click();
    assert.equal(await page.locator('[name="product"]').inputValue(),'');
    assert.equal(await page.evaluate(()=>localStorage.getItem('xinwu-product-draft-v1')),null);
    assert.equal(requests.some(r=>r.method==='POST'),false);
  });
  await check('mobile 390px and 320px layouts, menu and filtering',async()=>{
    for(const width of [390,320]) {
      await page.setViewportSize({width,height:844});
      for(const path of ['/','/products/even-g1/','/products/xiaodu-bear/','/products/m20-astronaut/','/collections/','/partners/','/submit/']) {
        await page.goto(origin+path,{waitUntil:'networkidle'});
        assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,`${width} ${path}`);
      }
    }
    await page.setViewportSize({width:390,height:844});
    await page.goto(origin+'/');
    await page.getByRole('button',{name:'打开导航'}).click();
    assert.equal(await page.locator('#mobile-nav').isVisible(),true);
    assert.equal(await page.locator('[data-menu-label]').textContent(),'关闭');
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('#mobile-nav').isVisible(),false);
    assert.equal(await page.locator('[data-menu-label]').textContent(),'菜单');
    await page.locator('[data-category-filter="robots"]').click();
    assert.equal(await page.locator('[data-product]:visible').count(),4);
    await page.locator('[data-category-filter="all"]').click();
    await page.locator('img').evaluateAll(images=>images.forEach(image=>image.loading='eager'));
    await page.waitForFunction(()=>[...document.images].every(image=>image.complete));
    await page.evaluate(()=>{document.activeElement?.blur?.();window.scrollTo({top:0,behavior:'instant'});});
    await page.screenshot({path:'verification/home-mobile.png',fullPage:true});
  });
  await check('no browser errors, no remotely loaded players or media',async()=>{
    assert.deepEqual(errors,[]);
    assert.equal(requests.some(r=>r.type==='media'),false);
    assert.equal(requests.some(r=>new URL(r.url).origin!==new URL(origin).origin),false);
  });
  await page.setViewportSize({width:1440,height:1000});
  await page.goto(origin+'/',{waitUntil:'networkidle'});
  await page.locator('img').evaluateAll(images=>images.forEach(image=>image.loading='eager'));
  await page.waitForFunction(()=>[...document.images].every(image=>image.complete));
  await page.screenshot({path:'verification/home-desktop.png',fullPage:true});
  await page.screenshot({path:'verification/home-first-screen.png'});
  await page.goto(origin+'/products/even-g1/',{waitUntil:'networkidle'});
  await page.locator('img').evaluateAll(images=>images.forEach(image=>image.loading='eager'));
  await page.waitForFunction(()=>[...document.images].every(image=>image.complete));
  await page.screenshot({path:'verification/detail-desktop.png',fullPage:true});
  await fs.writeFile('verification/results.json',JSON.stringify({date:new Date().toISOString(),origin,checks,errors},null,2));
} finally {await browser.close();}
