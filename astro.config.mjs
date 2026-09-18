import { defineConfig } from 'astro/config';
export default defineConfig({
  output: 'static',
  site: 'https://siuserxiaowei.github.io',
  base: process.env.BASE_PATH || '/',
  devToolbar: { enabled: false },
});
