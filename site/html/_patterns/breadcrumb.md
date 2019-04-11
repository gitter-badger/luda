---
title: Breadcrumb
description: Use breadcrumb to show current location of user.
---


## Usage
Add the class `.breadcrumb` to an `<ol>` element and wrap links inside to create a breadcrumb.
<ol class="breadcrumb">
  <li><a href="#" data-turbolinks="false">Zoo</a></li>
  <li><a href="#" data-turbolinks="false">Monkeies</a></li>
  <li><a href="#" data-turbolinks="false">BMonkey</a></li>
</ol>
``` html
<ol class="breadcrumb">
  <li><a href="#">Zoo</a></li>
  <li><a href="#">Monkeies</a></li>
  <li><a href="#">BMonkey</a></li>
</ol>
```


## States and Colors
If you want part of a breadcrumb to be disabled, you can replace the `<a>` element with a `<span>` element.
<ol class="breadcrumb">
  <li><a href="#" data-turbolinks="false">Zoo</a></li>
  <li><a href="#" data-turbolinks="false">Monkeies</a></li>
  <li><span>BMonkey</span></li>
</ol>
``` html
<ol class="breadcrumb">
  <li><a href="#">Zoo</a></li>
  <li><a href="#">Monkeies</a></li>
  <li><span>BMonkey</span></li>
</ol>
```
And if you want to enhance part of a breadcrumb, you can use color utility classes for highlighting.
{: .mt-small}

<ol class="breadcrumb">
  <li><a href="#" data-turbolinks="false">Zoo</a></li>
  <li><a href="#" data-turbolinks="false">Monkeies</a></li>
  <li><a class="c-primary" href="#" data-turbolinks="false">BMonkey</a></li>
</ol>
``` html
<ol class="breadcrumb">
  <li><a href="#">Zoo</a></li>
  <li><a href="#">Monkeies</a></li>
  <li><a class="c-primary" href="#">BMonkey</a></li>
</ol>
```


## Sass Variables
{: .mb-small}

``` sass
$breadcrumb-padding-rem: $spacing-small-rem 0 !default
```
{: .mb-small}

``` sass
$breadcrumb-color: $color-muted !default
```
{: .mb-small}

``` sass
$breadcrumb-spliter: "/" !default
```
{: .mb-small}

``` sass
$breadcrumb-spliter-padding-em: 0 strip-unit($spacing-tiny-rem) * 1em !default
```