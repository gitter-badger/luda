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



## Global Sass Variables

### Sizes

``` sass
$breakpoint-width-pxs: (s: 0, m: 768px, l: 1200px) !default
```
Screen width breakpoints.
{: .mb-small}

``` sass
$breakpoint-aspect-ratios: (p: 0, l: 1.0001) !default
```
Screen aspect ratio breakpoints.
{: .mb-small}

``` sass
$breakpoint-resolutions: (l: 0, h: 105.6dpi, xh: 201.6dpi) !default
```
Screen resolution breakpoints.
{: .mb-small}

``` sass
$spacing-base-rem: 1rem !default
```
The base spacing size.
{: .mb-small}

``` sass
$spacing-tiny-rem: $spacing-base-rem / 2 !default
```
{: .mb-small}

``` sass
$spacing-small-rem: $spacing-base-rem !default
```
{: .mb-small}

``` sass
$spacing-medium-rem: $spacing-base-rem * 2 !default
```
{: .mb-small}

``` sass
$spacing-large-rem: $spacing-base-rem * 4 !default
```

### Typography

``` sass
$typography-main: constant-get(typography-stacks, sans-serif) !default
```
Set the font family of body texts.
{: .mb-small}

``` sass
$typography-main-baseline-offset-ratio: constant-get(baseline-offset-ratios, "Helvetica Neue") !default
```
Set the baseline offset ratio of body texts for better baseline alignment.
{: .mb-small}

``` sass
$typography-main-size-px: 14px !default
```
Set the font size of body texts. We don't use the value of this variable to set the `font-size` property of body directly, a calculated `rem` value will be used.
{: .mb-small}

``` sass
$typography-main-line-height-ratio: 26 / 14 !default
```
Set the line height of body texts. The height of baseline is calculated through this variable and the `$typography-main-size-px` variable.
{: .mb-small}

``` sass
$typography-main-size-level: 5 !default
```
Specify the font size level of body texts. The value must be an integer between 1 and 6.
{: .mb-small}

``` sass
$typography-size-scale-ratio: constant-get(scale-ratios, minor-third) !default
```
Set the scale ratio of texts. Different level font sizes are calculated through this variable and the `$typography-main-size-level` variable.
{: .mb-small}

``` sass
$typography-main-color: $color-main !default
```
Set the color of body texts.

### Layers

``` sass
$z-index-low: -1 !default
```
{: .mb-small}

``` sass
$z-index-normal: 0 !default
```
{: .mb-small}

``` sass
$z-index-high: 1 !default
```
{: .mb-small}

``` sass
$z-index-higher: 2 !default
```
{: .mb-small}

``` sass
$z-index-much-higher: 3 !default
```
{: .mb-small}

``` sass
$z-index-highest: 4 !default
```

### Opacities

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
{: .mb-small}

``` sass
$opacity-disabled: $opacity-muted !default
```

### Colors

``` sass
$color-primary: hsba(340, 54, 98) !default
```
{: .mb-small}

``` sass
$color-secondary: hsba(0, 0, 56) !default
```
{: .mb-small}

``` sass
$color-danger: hsba(0, 82, 82) !default
```
{: .mb-small}

``` sass
$color-dark: hsba(0, 0, 32) !default
```
{: .mb-small}

``` sass
$color-light: hsba(0, 0, 100) !default
```
{: .mb-small}

``` sass
$color-emphasis: $color-dark !default
```
{: .mb-small}

``` sass
$color-main: lighten($color-dark, 10%) !default
```
{: .mb-small}

``` sass
$color-muted: lighten($color-dark, 50%) !default
```
{: .mb-small}

``` sass
$color-inverse-emphasis: $color-light !default
```
{: .mb-small}

``` sass
$color-inverse-main: rgba($color-light, $opacity-main) !default
```
{: .mb-small}

``` sass
$color-inverse-muted: rgba($color-light, $opacity-muted) !default
```

### Backgrounds

``` sass
$background-color-primary: $color-primary !default
```
{: .mb-small}

``` sass
$background-color-secondary: lighten($color-secondary, 30%) !default
```
{: .mb-small}

``` sass
$background-color-danger: $color-danger !default
```
{: .mb-small}

``` sass
$background-color-dark: $color-dark !default
```
{: .mb-small}

``` sass
$background-color-light: $color-light !default
```
{: .mb-small}

``` sass
$background-color-emphasis: lighten($background-color-primary, 22%) !default
```
{: .mb-small}

``` sass
$background-color-main: $background-color-light !default
```
{: .mb-small}

``` sass
$background-color-muted: darken($background-color-light, 3%) !default
```
{: .mb-small}

``` sass
$background-color-inverse-emphasis: lighten($background-color-primary, 22%) !default
```
{: .mb-small}

``` sass
$background-color-inverse-main: $background-color-dark !default
```
{: .mb-small}

``` sass
$background-color-inverse-muted: lighten($background-color-dark, 3%) !default
```

### Borders

``` sass
$line-width-main: 1px !default
```
{: .mb-small}

``` sass
$line-color-primary: $color-primary !default
```
{: .mb-small}

``` sass
$line-color-secondary: lighten($color-secondary, 30%) !default
```
{: .mb-small}

``` sass
$line-color-danger: $color-danger !default
```
{: .mb-small}

``` sass
$line-color-dark: $color-dark !default
```
{: .mb-small}

``` sass
$line-color-light: $color-light !default
```
{: .mb-small}

``` sass
$line-color-emphasis: $line-color-primary !default
```
{: .mb-small}

``` sass
$line-color-main: lighten($line-color-dark, 60%) !default
```
{: .mb-small}

``` sass
$line-color-muted: lighten($line-color-dark, 40%) !default
```
{: .mb-small}

``` sass
$line-color-inverse-emphasis: $line-color-primary !default
```
{: .mb-small}

``` sass
$line-color-inverse-main: rgba($line-color-light, $opacity-main) !default
```
{: .mb-small}

``` sass
$line-color-inverse-muted: rgba($line-color-light, $opacity-muted) !default
```
{: .mb-small}

``` sass
$border-radius-sharp: 0 !default
```
{: .mb-small}

``` sass
$border-radius-rounded: 2px !default
```
{: .mb-small}

``` sass
$border-radius-circle: 9999px !default
```
{: .mb-small}

``` sass
$border-radius-main: $border-radius-sharp !default
```

### Shadows

``` sass
$box-shadow-low: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.08) !default
```
{: .mb-small}

``` sass
$box-shadow-normal: 0 0.56rem 1.68rem rgba(0, 0, 0, 0.112) !default
```
{: .mb-small}

``` sass
$box-shadow-high: 0 0.784rem 2.352rem rgba(0, 0, 0, 0.1568) !default
```
{: .mb-small}

``` sass
$box-shadow-inset-low: null !default
```
{: .mb-small}

``` sass
$box-shadow-inset-normal: null !default
```
{: .mb-small}

``` sass
$box-shadow-inset-high: null !default
```
{: .mb-small}

``` sass
$text-shadow-low: null !default
```
{: .mb-small}

``` sass
$text-shadow-normal: null !default
```
{: .mb-small}

``` sass
$text-shadow-high: null !default
```

### Animations
``` sass
$transition-duration-short: 0.25s !default
```
{: .mb-small}

``` sass
$transition-duration-normal: 0.5s !default
```
{: .mb-small}

``` sass
$transition-duration-long: 1s !default
```
{: .mb-small}

``` sass
$transition-timing-function-main: ease !default
```

### Others

``` sass
$base-cursor: default !default
```
The default cursor of html.
{: .mb-small}

``` sass
$base-word-break: break-word !default
```
Set the word break rule of body texts.
{: .mb-small}

``` sass
$base-text-underline-position: under !default
```
{: .mb-small}

``` sass
$base-text-rendering: optimizeLegibility !default
```
{: .mb-small}

``` sass
$base-webkit-font-smoothing: antialiased !default
```
{: .mb-small}

``` sass
$base-moz-font-smoothing: grayscale !default
```
{: .mb-small}

``` sass
$base-tap-highlight-color: transparent !default
```
{: .mb-small}

``` sass
$base-webkit-touch-callout: none !default
```
{: .mb-small}

``` sass
$base-html-background: $background-color-inverse-muted !default
```
{: .mb-small}

``` sass
$base-body-min-height: 100vh !default
```
{: .mb-small}

``` sass
$base-body-background: $background-color-main !default
```
{: .mb-small}

``` sass
$base-selection-color: $color-inverse-main !default
```
{: .mb-small}

``` sass
$base-selection-background-color: $background-color-dark !default
```