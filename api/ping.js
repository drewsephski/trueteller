/* eslint-env node */
// Simple health-check endpoint to validate vite-plugin-vercel-api routing
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).send('Method Not Allowed');
    return;
  }
  res.status(200).json({ ok: true, route: '/api/ping', time: new Date().toISOString() });
}
