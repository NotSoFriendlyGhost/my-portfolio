/** Prefix a path with the site base (needed for GitHub Pages project URLs). */
export function withBase(path = "") {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, "/");
  const clean = path.replace(/^\//, "");
  return `${base}${clean}`;
}
