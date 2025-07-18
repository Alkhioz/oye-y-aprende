import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: '../www',
    emptyOutDir: true,
    assetsDir: '.',
    rollupOptions: {
      input: 'index.html',
      output: {
        entryFileNames: 'index.js',
        assetFileNames: 'style.css',
      }
    }
  }
});