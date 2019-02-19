var fs = require('fs')
var path= require('path')

var version = `window.site = window.site || {}
window.site.latestVersion = "${process.env.npm_package_config_siteVersion}"`

fs.writeFileSync(path.resolve(__dirname,'../release/site/version.js'), version)