---
title: Breadcrumb
description: Use breadcrumb to show current location of user.
---


## Usage
Add the class `.breadcrumb` to create a breadcrumb.
<ol class="breadcrumb mb-small">
  <li><a href="#" data-turbolinks="false">Zoo</a></li>
  <li><a href="#" data-turbolinks="false">Monkeies</a></li>
  <li><span>BMonkey</span></li>
</ol>
{{ breadcrumb }}
``` html
<ol class="breadcrumb">
  <li><a href="#">Zoo</a></li>
  <li><a href="#">Monkeies</a></li>
  <li><span>BMonkey</span></li>
</ol>
```

## Color
Use color utilities to change color.
<ol class="breadcrumb mb-small">
  <li><a href="#" data-turbolinks="false">Zoo</a></li>
  <li><a href="#" data-turbolinks="false">Monkeies</a></li>
  <li><span class="c-primary">BMonkey</span></li>
</ol>
{{ breadcrumb }}
``` html
<ol class="breadcrumb">
  <li><a href="#">Zoo</a></li>
  <li><a href="#">Monkeies</a></li>
  <li><span class="c-primary">BMonkey</span></li>
</ol>
```

## Sass Variables
``` sass
$breadcrumb-padding-rem: $space-small-rem 0 !default
```
Description.
{: .mb-small}

``` sass
$breadcrumb-color: $color-muted !default
```
Description.
{: .mb-small}

``` sass
$breadcrumb-children-padding-em: 0 strip-unit($space-tiny-rem) * 1em !default
```
Description.
{: .mb-small}

``` sass
$breadcrumb-children-spliter: "/" !default
```
Description.