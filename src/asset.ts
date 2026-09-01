/** Public-dir asset URL that respects Vite `base` (Vercel root vs self-hosted subpath). */
export const asset = (path: string) => import.meta.env.BASE_URL + path.replace(/^\//, '')
