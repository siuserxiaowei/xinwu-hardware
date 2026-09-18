import type { APIRoute } from 'astro';
import {categoryArt, categorySvg, type CategoryArtName} from '../../data/category-art';

export function getStaticPaths() {
  return Object.keys(categoryArt).map(name => ({ params: { name } }));
}

export const GET: APIRoute = ({params}) => new Response(categorySvg(params.name as CategoryArtName), {
  headers: {'Content-Type': 'image/svg+xml; charset=utf-8'},
});
