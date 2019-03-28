var fs = require('fs')
var path = require('path')
var yaml = require('yamljs')


var siteConfigJson = yaml.load(path.resolve(__dirname, './site.jekyll.config.data.yml')) || {}

siteConfigJson.themes = siteConfigJson.themes || []
if(!siteConfigJson.themes.includes(process.env.npm_package_config_theme)){
  siteConfigJson.themes.unshift(process.env.npm_package_config_theme)
}

fs.writeFileSync(path.resolve(__dirname, './site.jekyll.config.data.yml'), yaml.stringify(siteConfigJson, 2))