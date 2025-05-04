module.exports = {
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Codex-demo/'
    : '/',
  outputDir: 'docs',
  lintOnSave: false, // Disable ESLint during build
  // Disable ESLint loader
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  }
}
