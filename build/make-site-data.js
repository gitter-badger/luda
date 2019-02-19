var fs = require('fs')
var path = require('path')
var yaml = require('yamljs')

var info = require('../package.json')

var siteConfigJson = yaml.load(path.resolve(__dirname, './site.jekyll.config.data.yml')) || {}

siteConfigJson.version = info.config.siteVersion
siteConfigJson.release_version = info.version
siteConfigJson.versions = siteConfigJson.versions || []
if(!siteConfigJson.versions.includes(info.config.siteVersion)){
  siteConfigJson.versions.unshift(info.config.siteVersion)
}

fs.writeFileSync(path.resolve(__dirname, './site.jekyll.config.data.yml'), yaml.stringify(siteConfigJson, 2))