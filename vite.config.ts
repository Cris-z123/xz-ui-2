import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import PurgeIcons from 'vite-plugin-purge-icons';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    PurgeIcons({
      content: ['**/*.html', '**/*.js', '**/*.vue']
    })
  ],
  optimizeDeps: {
    entries: [],
    include: ['@iconify/iconify'],
    exclude: []
  },
  publicDir: 'public',
  base: './',
  assetsInclude: '',
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
    //   modules: {},
    //   postcss: {}, // 如果提供了该内联配置，Vite 将不会搜索其他 PostCSS 配置源。
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
    brotliSize: true,
    chunkSizeWarningLimit: 3000
  }
});
