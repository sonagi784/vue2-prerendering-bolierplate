import path from 'path'
const srcPath = path.resolve(__dirname, 'src')

module.exports = {
  resolve: {
    alias: {
      '@': srcPath,
      '~': srcPath,
      '@@': srcPath,
      '~~': srcPath,
    },
  },
}
