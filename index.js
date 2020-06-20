const { set, update } = require('lodash')

module.exports = function () {
  this.nuxt.hook('build:before', () => {
    const { build } = this.options

    set(build, 'optimization.splitChunks.cacheGroups.mjmlWeb', {
      test: (module) =>
        module.resource && module.resource.endsWith('mjml.min.js'),
      chunks: 'all',
      enforce: true,
      name: 'mjml-web',
    })

    update(build, 'terser.exclude', (exclude = []) =>
      Array.isArray(exclude) ? [...exclude, 'mjml-web'] : [exclude, 'mjml-web']
    )
  })
}
