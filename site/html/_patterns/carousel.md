---
title: Carousel
description: Luda carousel includes full support for events control, like slide, pause, loop and more.
---


## Usage
A carousel includes three parts, content, control buttons and indicator buttons. The control buttons and indicator buttons are optional. The default aspect ratio of the content part is `16:9`. The control buttons only shows for middle size screens and large screens by default. 

A carousel can be controlled through mouse clicking or screen swiping. When mouse hovered or screen touched, the carousel will be paused, and started again after mouse leave or touch end.

All the three parts should be wrapped in a `.carousel` container. The classes `.carousel-box`, `.carousel-item`, `.carousel-figure` and `.carousel-description` are used to create the content part, the classes `.carousel-prev` and `.carousel-next` are used to create the control buttons, and the class `.carousel-indicators` is used to wrap the indicator buttons.

Let's see the below example for detail. 

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
<div class="example">
  {{ carousel }}
</div>
``` html{{ carousel }}```


## Customize Animation
Luda use CSS transation to create carousel animations. If you don't like the default slide animation, you can add the class `.carousel-ani-opacity` to have an opacity change animation, or you can write your own animation class.

Your custom animation class should be defined like `.carousel-ani-*`. And the `.carousel-item-prev` and `.carousel-item-next` classes can be used to indicate the carousel item states for transation.

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
<div class="example">
  {{ carousel_opacity }}
</div>
``` html{{ carousel_opacity }}```


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



## DOM Events

``` javascript
luda:carousel:activate
```
Description.
{: .mb-small}

``` javascript
luda:carousel:activated
```
Description.
{: .mb-small}

``` javascript
luda:carousel:deactivate
```
Description.
{: .mb-small}

``` javascript
luda:carousel:deactivated
```
Description.



## Sass Variables

### Sizes
``` sass
$carousel-width-breakpoint: m !default
```
Specify a width breakpoint for carousels. The layout of carousels will be changed if the screen width is equal to or wider than the breakpoint width.
{: .mb-small}

``` sass
$carousel-aspect-ratio: 16 / 9 !default
```
The aspect ratio of the `.carousel-box` container.
{: .mb-small}

``` sass
$carousel-indicators-top-spacing-rem: $spacing-small-rem !default
```
{: .mb-small}

``` sass
$carousel-indicators-right-spacing-rem: $spacing-small-rem !default
```
{: .mb-small}

``` sass
$carousel-indicator-height-rem: 0.2rem !default
```
{: .mb-small}

``` sass
$carousel-indicator-outline-offset-px: 2px !default
```
{: .mb-small}

``` sass
$carousel-description-padding-rem: $spacing-small-rem !default
```
{: .mb-small}

``` sass
$carousel-breakpoint-indicators-top-spacing-rem: $spacing-medium-rem !default
```
{: .mb-small}

``` sass
$carousel-breakpoint-indicators-right-spacing-rem: $spacing-medium-rem !default
```
{: .mb-small}

``` sass
$carousel-breakpoint-prev-button-left-spacing-rem: $spacing-small-rem !default
```
{: .mb-small}

``` sass
$carousel-breakpoint-next-button-right-spacing-rem: $spacing-small-rem !default
```
{: .mb-small}

``` sass
$carousel-breakpoint-description-padding-rem: $spacing-medium-rem !default
```


### Animations
``` sass
$carousel-transition-duration: $transition-duration-long !default
```
{: .mb-small}

``` sass
$carousel-transition-timing-function: $transition-timing-function-main !default
```
{: .mb-small}

``` sass
$carousel-ani-opacity-transition-duration: $transition-duration-long !default
```
{: .mb-small}

``` sass
$carousel-ani-opacity-transition-timing-function: $transition-timing-function-main !default
```



### Others
``` sass
$carousel-background: $background-color-muted !default
```
{: .mb-small}

``` sass
$carousel-description-background: linear-gradient(180deg, transparent 0, rgba($background-color-dark, $opacity-most-muted) 2rem) !default
```
{: .mb-small}

``` sass
$carousel-description-color: $color-inverse-main !default
```
{: .mb-small}

``` sass
$carousel-controls-opacity: $opacity-main !default
```
The opacity of the prev button, the next button and the indicators in the carousel.
{: .mb-small}

``` sass
$carousel-controls-disabled-opacity: $opacity-more-muted !default
```
{: .mb-small}

``` sass
$carousel-controls-opacity-transition-duration: $transition-duration-normal !default
```
{: .mb-small}

``` sass
$carousel-controls-opacity-transition-timing-function: $transition-timing-function-main !default
```