import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import vercelApi from 'vite-plugin-vercel-api';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    vercelApi({
      debugOptions: ['apiFiles', 'apiRoutes', 'failedRouteImports'],
    }),
  ],
});