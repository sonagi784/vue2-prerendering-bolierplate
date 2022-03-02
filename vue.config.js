/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
  configureWebpack: (config) => {
    config.plugins.push(
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: ['/home', '/about'],
        renderer: new Renderer({
          headless: true,
          renderAfterDocumentEvent: 'render-event',
        }),
      })
    )
  },
}
