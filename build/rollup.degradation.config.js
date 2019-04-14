var coffee = require('rollup-plugin-coffee-script')
var info = require('../package.json')

var banner = `/*! 
 * Luda degradation script ${info.version} | ${info.homepage}
 * Copyright 2019 ${info.author.name} | ${info.author.blog}
 * MIT license | http://opensource.org/licenses/MIT
 */`

module.exports = [{
  context: 'this',
  plugins: [ coffee() ],
  output: {
    format: 'umd',
    banner: banner
  }
}]