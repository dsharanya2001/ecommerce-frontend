// Add these imports at the top
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use defineConfig to wrap your configuration
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        app: './src/main.jsx'
      },
      output: {
        entryFileNames: 'assets/[name].[hash].js'
      }
    }
  }
});