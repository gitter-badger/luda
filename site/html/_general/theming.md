---
title: Theming
order: 3
description: With the power of Sass, you can extend Luda themes just as you wish.
---


## Override Built in Styles

Luda themes are written in Sass, you can override certain css selectors to change built in styles. The source code is idempotent, that means you focus on selector priorities but not orders when overriding. In this way, your styles are more stable and maintainable.

For convinence, there are some built-in modifier classes to change components appearance. Each modifier class is marked as <span class="badge-baseline bc-dark mr-tiny">Modifier</span> in this documentation. If they're not enough for you, you can create your own modifiers.



## Override Default Variables

Theme Sass variables are defined with `!default` declaration. You should define your variables before importing Luda theme variables, so built-in variables with same name will be overriten.

There are two types of theme variables, global variables and component variables. Component variables targets spefic components, they can be referenced in each component documentation area. Global variables are used to define shared style rules across components. If a global variable is changed, any component reference to it will inherit its style defination. You can find all global variables in below list.
{: .mb-small}

``` sass
$breakpoint-width-pxs: (s: 0, m: 768px, l: 1200px) !default
```
Screen width breakpoints. Value should be Map.
{: .mb-small}

``` sass
$breakpoint-aspect-ratios: (p: 0, l: 1.0001) !default
```
Screen aspect ratio breakpoints. Value should be Map.
{: .mb-small}

``` sass
$breakpoint-resolutions: (l: 0, h: 105.6dpi, xh: 201.6dpi) !default
```
Screen resolution breakpoints. Value should be Map.
{: .mb-small}

``` sass
$space-base-rem: 1rem !default
```
Base space size. Value should be Number.
{: .mb-small}

``` sass
$space-tiny-rem: $space-base-rem / 2 !default
```
Value should be Number.
{: .mb-small}

``` sass
$space-small-rem: $space-base-rem !default
```
Value should be Number.
{: .mb-small}

``` sass
$space-medium-rem: $space-base-rem * 2 !default
```
Value should be Number.
{: .mb-small}

``` sass
$space-large-rem: $space-base-rem * 4 !default
```
Value should be Number.
{: .mb-small}

``` sass
$typography-size-scale-ratio: 1.2 !default
```
Scale ratio for type scale. Value should be Number.
{: .mb-small}

``` sass
$typography-main-size-px: 14px !default
```
Default font size of html. Value should be Number.
{: .mb-small}

``` sass
$typography-main-size-level: 5 !default
```
Set font size scale level for calculation. Scale level is from 1 to 6.
{: .mb-small}

``` sass
$typography-main-line-height-ratio: 26 / 14 !default
```
Default line height of body. Value should be Number.
{: .mb-small}

``` sass
$z-index-low: -1 !default
```
Value can be any valid z-index value.
{: .mb-small}

``` sass
$z-index-normal: 0 !default
```
Value can be any valid z-index value.
{: .mb-small}

``` sass
$z-index-high: 1 !default
```
Value can be any valid z-index value.
{: .mb-small}

``` sass
$z-index-higher: 2 !default
```
Value can be any valid z-index value.
{: .mb-small}

``` sass
$z-index-much-higher: 3 !default
```
Value can be any valid z-index value.
{: .mb-small}

``` sass
$z-index-highest: 4 !default
```
Value can be any valid z-index value.
{: .mb-small}

``` sass
$opacity-emphasis: 1 !default
```
Value can be any valid opacity value.
{: .mb-small}

``` sass
$opacity-main: 0.9 !default
```
Value can be any valid opacity value.
{: .mb-small}

``` sass
$opacity-muted: 0.618 !default
```
Value can be any valid opacity value.
{: .mb-small}

``` sass
$opacity-more-muted: 0.382 !default
```
Value can be any valid opacity value.
{: .mb-small}

``` sass
$opacity-most-muted: 0.1 !default
```
Value can be any valid opacity value.
{: .mb-small}

``` sass
$opacity-disabled: $opacity-muted !default
```
Value can be any valid opacity value.
{: .mb-small}

``` sass
$color-primaryColor: hsba(340, 54, 98) !default
```
Value should be a Color.
{: .mb-small}

``` sass
$color-secondaryColor: hsba(0, 0, 56) !default
```
Value should be a Color.
{: .mb-small}

``` sass
$color-dangerColor: hsba(0, 82, 82) !default
```
Value should be a Color.
{: .mb-small}

``` sass
$color-darkColor: hsba(0, 0, 32) !default
```
Value should be a Color.
{: .mb-small}

``` sass
$color-lightColor: hsba(0, 0, 100) !default
```
Value should be a Color.
{: .mb-small}

``` sass
$color-emphasis: $color-dark !default
```
Value should be a Color.
{: .mb-small}

``` sass
$color-main: lighten($color-dark, 10%) !default
```
Value should be a Color.
{: .mb-small}

``` sass
$color-muted: lighten($color-dark, 50%) !default
```
Value should be a Color.
{: .mb-small}

``` sass
$color-inverse-emphasis: $color-light !default
```
Value should be a Color.
{: .mb-small}

``` sass
$color-inverse-main: rgba($color-light, $opacity-main) !default
```
Value should be a Color.
{: .mb-small}

``` sass
$color-inverse-muted: rgba($color-light, $opacity-muted) !default
```
Value should be a Color.
{: .mb-small}

``` sass
$background-color-primary: $color-primary !default
```
Value should be a Color.
{: .mb-small}

``` sass
$background-color-secondary: lighten($color-secondary, 30%) !default
```
Value should be a Color.
{: .mb-small}

``` sass
$background-color-danger: $color-danger !default
```
Value should be a Color.
{: .mb-small}

``` sass
$background-color-dark: $color-dark !default
```
Value should be a Color.
{: .mb-small}

``` sass
$background-color-light: $color-light !default
```
Value should be a Color.
{: .mb-small}

``` sass
$background-emphasis: lighten($background-color-primary, 22%) !default
```
Value can be any valid background value.
{: .mb-small}

``` sass
$background-main: $background-color-light !default
```
Value can be any valid background value.
{: .mb-small}

``` sass
$background-muted: darken($background-color-light, 3%) !default
```
Value can be any valid background value.
{: .mb-small}

``` sass
$background-inverse-emphasis: lighten($background-color-primary, 22%) !default
```
Value can be any valid background value.
{: .mb-small}

``` sass
$background-inverse-main: $background-color-dark !default
```
Value can be any valid background value.
{: .mb-small}

``` sass
$background-inverse-muted: lighten($background-color-dark, 3%) !default
```
Value can be any valid background value.
{: .mb-small}

``` sass
$line-color-primary: $color-primary !default
```
Value should be a Color.
{: .mb-small}

``` sass
$line-color-secondary: lighten($color-secondary, 30%) !default
```
Value should be a Color.
{: .mb-small}

``` sass
$line-color-danger: $color-danger !default
```
Value should be a Color.
{: .mb-small}

``` sass
$line-color-dark: $color-dark !default
```
Value should be a Color.
{: .mb-small}

``` sass
$line-color-light: $color-light !default
```
Value should be a Color.
{: .mb-small}

``` sass
$line-color-emphasis: $line-color-primary !default
```
Value should be a Color.
{: .mb-small}

``` sass
$line-color-main: lighten($line-color-dark, 60%) !default
```
Value should be a Color.
{: .mb-small}

``` sass
$line-color-muted: lighten($line-color-dark, 40%) !default
```
Value should be a Color.
{: .mb-small}

``` sass
$line-color-inverse-emphasis: $line-color-primary !default
```
Value should be a Color.
{: .mb-small}

``` sass
$line-color-inverse-main: rgba($line-color-light, $opacity-main) !default
```
Value should be a Color.
{: .mb-small}

``` sass
$line-color-inverse-muted: rgba($line-color-light, $opacity-muted) !default
```
Value should be a Color.
{: .mb-small}

``` sass
$border-radius-sharp: 0 !default
```
Value can be any valid border radius value.
{: .mb-small}

``` sass
$border-radius-rounded: 2px !default
```
Value can be any valid border radius value.
{: .mb-small}

``` sass
$border-radius-circle: 9999px !default
```
Value can be any valid border radius value.
{: .mb-small}

``` sass
$border-radius-main: $border-radius-sharp !default
```
Value can be any valid border radius value.
{: .mb-small}

``` sass
$base-cursor: default !default
```
Default cursor of html. Value can be any valid value of cursor.
{: .mb-small}

``` sass
$base-word-break: break-word !default
```
Default word break rule of html. Value can be any valid value of word break.
{: .mb-small}

``` sass
$base-text-underline-position: under !default
```
Value can be any valid value of text underline position.
{: .mb-small}

``` sass
$base-text-rendering: optimizeLegibility !default
```
Value can be any valid value of text rendering.
{: .mb-small}

``` sass
$base-webkit-font-smoothing: antialiased !default
```
Value can be any valid value of webkit font smoothing.
{: .mb-small}

``` sass
$base-moz-font-smoothing: grayscale !default
```
Value can be any valid value of moz font smoothing.
{: .mb-small}

``` sass
$base-tap-highlight-color: transparent !default
```
Value should be a Color.
{: .mb-small}

``` sass
$base-webkit-touch-callout: none !default
```
Value can be any valid value of webkit touch callout.
{: .mb-small}

``` sass
$base-html-background: $background-inverse-muted !default
```
Value can be any valid value of background.
{: .mb-small}

``` sass
$base-body-min-height: 100vh !default
```
Value can be any valid value of min-height.
{: .mb-small}

``` sass
$base-body-background: $background-main !default
```
Value can be any valid value of background.
{: .mb-small}

``` sass
$base-selection-color: $color-inverse-main !default
```
Value should be a Color.
{: .mb-small}

``` sass
$base-selection-background-color: $background-color-dark !default
```
Value should be a Color.