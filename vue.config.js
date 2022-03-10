/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

const productionPlugins = [
  new PrerenderSPAPlugin({
    staticDir: path.join(__dirname, 'dist'),
    // when you use CloudFront, must add trailing slash ('/') to all paths (or not add '/' to all paths)
    routes: ['/', '/about/'],
    renderer: new Renderer({
      headless: true,
      renderAfterDocumentEvent: 'render-event',
    }),
  }),
]

const developmentPlugins = []

const commonPlugins = []

module.exports = {
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(...productionPlugins)
    } else {
      config.plugins.push(...developmentPlugins)
    }
    config.plugins.push(...commonPlugins)
  },
}
