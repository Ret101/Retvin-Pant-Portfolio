import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

const routes = [
  '/',
  '/industry',
  '/industry/swarm-heated-bed',
  '/industry/spring-steel-wheel',
  '/industry/candy-sorter',
  '/team',
  '/team/longhorn-baja',
  '/team/longhorn-baja/master-sketch',
  '/team/longhorn-baja/control-arms',
  '/team/longhorn-baja/rear-hubs',
  '/team/longhorn-baja/front-hubs',
  '/team/guadaloop',
  '/team/robotics-roadcase',
  '/team/frc-robots',
  '/personal',
  '/personal/electric-skateboard',
  '/personal/beetleweight',
]

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://ret101.github.io',
      dynamicRoutes: routes,
      outDir: 'dist',
    }),
  ],
  base: '/',
})
