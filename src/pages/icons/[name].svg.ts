import type { APIRoute } from 'astro';
import { icons, type IconName } from '../../data/icons';

export function getStaticPaths() {
  return Object.keys(icons).map(name => ({ params: { name } }));
}

export const GET: APIRoute = ({ params }) => {
  const icon = icons[params.name as IconName];
  const paths = icon.paths.map(d => `<path d="${d}"/>`).join('');
  const accent = 'accent' in icon ? `<path stroke="#242623" d="${icon.accent}"/>` : '';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#242623" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><title>新物 · ${icon.label}</title>${paths}${accent}</svg>`;
  return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml; charset=utf-8' } });
};
