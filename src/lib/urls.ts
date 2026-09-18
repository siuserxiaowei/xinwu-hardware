/** Keep local development and GitHub Pages project URLs consistent. */
export const withBase = (path: string): string =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
