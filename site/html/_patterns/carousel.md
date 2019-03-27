---
title: Carousel
description: Luda carousel includes full support for events control, like slide, pause, loop and more.
---


## Slide Animation
Carousel offers a slide animation by default.

{% capture carousel %}
<div class="carousel">
  <!-- Carousel images -->
  <div class="carousel-box">
    <div class="carousel-item">
      <img class="carousel-figure" src="https://cdn.stocksnap.io/img-thumbs/960w/CTCNBFUFH8.jpg" alt="carousel item one">
      <div class="carousel-description">This is the first carousel item.</div>
    </div>
    <div class="carousel-item">
      <img class="carousel-figure" src="https://cdn.stocksnap.io/img-thumbs/960w/XFJEL6PH3J.jpg" alt="carousel item two">
      <div class="carousel-description">This is the second carousel item.</div>
    </div>
    <div class="carousel-item">
      <img class="carousel-figure" src="https://cdn.stocksnap.io/img-thumbs/960w/BIR4BCFWLP.jpg" alt="carousel item three">
      <div class="carousel-description">This is the third carousel item.</div>
    </div>
    <!-- Prev and next control buttons -->
    <button class="carousel-prev btn btn-text-light btn-ico"><i class="ico ico-left"></i></button>
    <button class="carousel-next btn btn-text-light btn-ico"><i class="ico ico-right"></i></button>
    <!-- Item indicators -->
    <div class="carousel-indicators btns-x btns-margin">
      <button class="btn btn-small btn-light"></button>
      <button class="btn btn-small btn-light"></button>
      <button class="btn btn-small btn-light"></button>
    </div>
  </div>
</div>
{% endcapture %}
{{ carousel }}
``` html{{ carousel }}```
{: .mt-small}


## Opacity Animation
Add the class `.carousel-ani-opacity` to change animation. You can also create your own `.carousel-ani-*` classes to customize the animation.
{% capture carousel_opacity %}
<div class="carousel carousel-ani-opacity">
  <!-- Carousel images -->
  <div class="carousel-box">
    <div class="carousel-item">
      <img class="carousel-figure" src="https://cdn.stocksnap.io/img-thumbs/960w/CTCNBFUFH8.jpg" alt="carousel item one">
      <div class="carousel-description">This is the first carousel item.</div>
    </div>
    <div class="carousel-item">
      <img class="carousel-figure" src="https://cdn.stocksnap.io/img-thumbs/960w/XFJEL6PH3J.jpg" alt="carousel item two">
      <div class="carousel-description">This is the second carousel item.</div>
    </div>
    <div class="carousel-item">
      <img class="carousel-figure" src="https://cdn.stocksnap.io/img-thumbs/960w/BIR4BCFWLP.jpg" alt="carousel item three">
      <div class="carousel-description">This is the third carousel item.</div>
    </div>
    <!-- Prev and next control buttons -->
    <button class="carousel-prev btn btn-text-light btn-ico"><i class="ico ico-left"></i></button>
    <button class="carousel-next btn btn-text-light btn-ico"><i class="ico ico-right"></i></button>
    <!-- Item indicators -->
    <div class="carousel-indicators btns-x btns-margin">
      <button class="btn btn-small btn-light"></button>
      <button class="btn btn-small btn-light"></button>
      <button class="btn btn-small btn-light"></button>
    </div>
  </div>
</div>
{% endcapture %}
{{ carousel_opacity }}
``` html{{ carousel_opacity }}```
{: .mt-small}


## HTML Attributes

``` html
data-carousel-interval="5000"
```
Description. If setted to `false`, the carousel will not play automatically.
{: .mb-small}

``` html
data-carousel-wrap="true"
```
Description.


## Sass Variables

### Sizes
``` sass
$carousel-width-breakpoint: m !default
```
Description.
{: .mb-small}

``` sass
$carousel-aspect-ratio: 16 / 9 !default
```
Description.
{: .mb-small}

``` sass
$carousel-control-indicators-top-rem: $space-small-rem !default
```
Description.
{: .mb-small}

``` sass
$carousel-control-indicators-right-rem: $space-small-rem !default
```
Description.
{: .mb-small}

``` sass
$carousel-control-indicator-height-rem: 0.2rem !default
```
Description.
{: .mb-small}

``` sass
$carousel-indicator-outline-offset-px: 2px !default
```
Description.
{: .mb-small}

``` sass
$carousel-description-padding-rem: $space-small-rem !default
```
Description.
{: .mb-small}

``` sass
$carousel-breakpoint-control-indicators-top-rem: $space-medium-rem !default
```
Description.
{: .mb-small}

``` sass
$carousel-breakpoint-control-indicators-right-rem: $space-medium-rem !default
```
Description.
{: .mb-small}

``` sass
$carousel-breakpoint-control-prev-left-rem: $space-small-rem !default
```
Description.
{: .mb-small}

``` sass
$carousel-breakpoint-control-next-right-rem: $space-small-rem !default
```
Description.
{: .mb-small}

``` sass
$carousel-breakpoint-description-padding-rem: $space-medium-rem !default
```
Description.


### Animations
``` sass
$carousel-control-opacity-transition-duration: 0.5s !default
```
Description.
{: .mb-small}

``` sass
$carousel-control-opacity-transition-timing-function: ease !default
```
Description.
{: .mb-small}

``` sass
$carousel-transition-duration: 1s !default
```
Description.
{: .mb-small}

``` sass
$carousel-transition-timing-function: ease !default
```
Description.
{: .mb-small}

``` sass
$carousel-ani-opacity-transition-duration: 1s !default
```
Description.
{: .mb-small}

``` sass
$carousel-ani-opacity-transition-timing-function: ease !default
```
Description.



### Others
``` sass
$carousel-background: $background-muted !default
```
Description.
{: .mb-small}

``` sass
$carousel-description-background: linear-gradient(180deg, transparent 0, rgba($background-color-dark, $opacity-most-muted) 2rem) !default
```
Description.
{: .mb-small}

``` sass
$carousel-description-color: $color-inverse-main !default
```
Description.
{: .mb-small}

``` sass
$carousel-control-opacity: $opacity-main !default
```
Description.
{: .mb-small}

``` sass
$carousel-control-disabled-opacity: $opacity-more-muted !default
```
Description.