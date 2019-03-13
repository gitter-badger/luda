---
title: Installation
description: Luda can be easily installed through multiple ways.
order: 2
---

## Install Pre-built JavaScript and CSS

#### Step 1: Download Pre-built JavasScript and CSS

[Download v{{site.release_version}}](https://github.com/oatw/luda/raw/v{{site.release_version}}/release/dist/luda-{{site.release_version}}.zip){: .btn .btn-primary}

#### Step 2: Add Luda to Your Template
You can start with this template and modify it to your needs.

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Hi Luda!</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
    <!-- Use default theme for example. Each theme css is built seperately, don't include multiple themes toghther. -->
    <link rel="stylesheet" href="https://raw.githubusercontent.com/oatw/luda/v{{site.release_version}}/dist/css/luda-default.min.css">
  </head>
  <body>
    <h1>Hi Luda!</h1>
    <script src="https://raw.githubusercontent.com/oatw/luda/v{{site.release_version}}/dist/js/luda.min.js"></script>
  </body>
</html>
```

## Install in Node.js Powered Apps

#### Step 1: Download Through Yarn or Npm

Yarn
``` bash
$ yarn add luda
```

Npm
``` bash
$ npm install luda --save
```

#### Step 2: Choose a Theme and Import It in Sass or Scss Entry File

``` sass
// Import your custom variable overrides.
@import path_to_your_sass_variables
// Import default theme for example. Don't include multiple themes toghther.
@import 'path_to_node_modules/luda/src/sass/default/index'
```

#### Step 3: Import JavaScript in Entry File

``` javascript
import 'luda'
```


## Install in Ruby on Rails Apps

#### Step 1: Download Through Bundler or Gem

Bundler is the recommand way to install luda, add luda gem to your Gemfile:

``` ruby
gem 'luda'
```
then run bundle in command line.
``` bash
$ bundle
```
You can also download luda through gem.
``` bash
$ gem install luda
```


#### Step 2: Choose a Theme and Import it in `application.sass` or `application.scss`

``` sass
// Import your custom variable overrides.
@import path_to_your_sass_variables
// Import default theme for example. Don't include multiple themes toghther.
@import luda/default
```
If `application.css` exists in your project, rename it to `.sass` or `.scss` extension. And don't use `require` statement to import files, use `@import` instead.
{: .c-danger}

#### Step 3: Import JavaScript in `application.js`

``` javascript
//= require luda
```


## Install in Other Ruby Apps

If your project is based on [Sprokets]() or [Hanami](),
Luda assets will be added to load path automaticly,
you just need require the assets in your project.
Otherwise, you need manually register Luda assets,
you can reference to [Luda gem source code](https://github.com/oatw/luda/tree/v{{site.release_version}}/gem)
and your framework documentation to do that.