import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    entries: [],
    include: [],
    exclude: []
  },
  publicDir: 'public',
  base: './',
  assetsInclude: '',
  logLevel: 'info',
  clearScreen: true,
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      views: resolve(__dirname, './src/views'),
      components: resolve(__dirname, './src/components')
    },
    conditions: [],
    extensions: ['.ts', '.js', '.jsx', '.tsx', '.json']
  },
  css: {
    modules: {},
    postcss: {},
    preprocessorOptions: {
      scss: {}
    }
  },
  server: {
    host: 'localhost',
    cors: true,
    port: 8020
    // proxy: {
    //   '/api': {
    //     target: '',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    sourcemap: false,
    commonjsOptions: {},
    manifest: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        keep_infinity: true,
        drop_console: true,
        drop_debugger: true
      }
    },
    write: true,
    emptyOutDir: true,
    brotliSize: true,
    chunkSizeWarningLimit: 3000
  }
});
