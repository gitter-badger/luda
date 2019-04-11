---
title: Opacity
description: Use opacity utilities to change elements' opacities responsively.
---


## Introduction
Opacity utilities are classes for setting the value of the [`opacity`](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity) property.
Let's see how they change an element's opacity in the below gellery.

<div class="background-example mb-none">
  <div>
    <div class="bc-primary o-emphasis"></div>
    <p class="p6">.o-emphasis</p>
  </div>
  <div>
    <div class="bc-primary o-main"></div>
    <p class="p6">.o-main</p>
  </div>
  <div>
    <div class="bc-primary o-muted"></div>
    <p class="p6">.o-muted</p>
  </div>
  <div>
    <div class="bc-primary o-more-muted"></div>
    <p class="p6">.o-more-muted</p>
  </div>
  <div>
    <div class="bc-primary o-most-muted"></div>
    <p class="p6">.o-most-muted</p>
  </div>
</div>

``` html
<div class="o-emphasis"></div>
<div class="o-main"></div>
<div class="o-muted"></div>
<div class="o-more-muted"></div>
<div class="o-most-muted"></div>
```

## Sass Variables
{: .mb-small}

``` sass
$opacity-emphasis: 1 !default
```
{: .mb-small}

``` sass
$opacity-main: 0.9 !default
```
{: .mb-small}

``` sass
$opacity-muted: 0.618 !default
```
{: .mb-small}

``` sass
$opacity-more-muted: 0.382 !default
```
{: .mb-small}

``` sass
$opacity-most-muted: 0.1 !default
```