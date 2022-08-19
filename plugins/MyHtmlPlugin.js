const { RawSource } = require('webpack').sources
const { readFileSync } = require('fs')

class MyHtmlPlugin {
  options
  constructor(options) {
    this.options = options
  }
  apply(compiler) {
    const { template } = this.options

    const htmlContent = readFileSync(template).toString()

    compiler.hooks.emit.tap('MyHtmlPlugin', (compilation) => {
      const jsSrc = Reflect.ownKeys(compilation.assets)[0]

      const jsScript = `<script src='./${jsSrc}'></script>`

      const htmlRes = htmlContent.replace("<!--SetScriptTimestampPlugin inset script-->", jsScript)

      compilation.emitAsset('a.html', new RawSource(htmlRes))
    })
  }
}

module.exports = MyHtmlPlugin
