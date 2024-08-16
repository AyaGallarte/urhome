import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // base: '/',  // Adjust if deploying under a subpath
  // build: {
  //   outDir: 'dist',
  //   assetsDir: 'assets',
  // },
});
