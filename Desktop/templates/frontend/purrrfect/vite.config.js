// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/purrrfect/', 
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/purrrfect/', // Ensure this matches your repository name
  build: {
    rollupOptions: {
      input: '/index.html',
    },
  },
});
