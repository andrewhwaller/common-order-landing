const { resolve } = require('path')
import { minifyHtml } from 'vite-plugin-html';

module.exports = {
  plugins: [minifyHtml()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'about/index.html')
      }
    }
  }
}
