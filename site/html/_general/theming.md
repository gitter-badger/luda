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

### Breakpoints

{% include doc-sass-variable-breakpoints-width.md %}

{% include doc-sass-variable-breakpoints-aspect-ratio.md %}

{% include doc-sass-variable-breakpoints-resolution.md %}

### Spacing

``` sass
$spacing-base-rem: 1rem !default
```
The base spacing size.

{% include doc-sass-variable-spacing.md %}

### Typography

{% include doc-sass-variable-typography-main.md %}


### Layers

{% include doc-sass-variable-z-index.md %}

### Opacities
{% include doc-sass-variable-opacity.md %}

``` sass
$opacity-disabled: $opacity-muted !default
```
{: .mt-small}

### Colors
{% include doc-sass-variable-color.md %}


### Backgrounds
{% include doc-sass-variable-background.md %}

### Borders

``` sass
$line-width-main: 1px !default
```

``` sass
$line-color-primary: $color-primary !default
```

``` sass
$line-color-secondary: lighten($color-secondary, 30%) !default
```

``` sass
$line-color-danger: $color-danger !default
```

``` sass
$line-color-dark: $color-dark !default
```

``` sass
$line-color-light: $color-light !default
```

``` sass
$line-color-emphasis: $line-color-primary !default
```

``` sass
$line-color-main: lighten($line-color-dark, 60%) !default
```

``` sass
$line-color-muted: lighten($line-color-dark, 40%) !default
```

``` sass
$line-color-inverse-emphasis: $line-color-primary !default
```

``` sass
$line-color-inverse-main: rgba($line-color-light, $opacity-main) !default
```

``` sass
$line-color-inverse-muted: rgba($line-color-light, $opacity-muted) !default
```

{% include doc-sass-variable-shape.md %}

``` sass
$border-radius-main: $border-radius-sharp !default
```
{: .mt-small}

### Shadows

{% include doc-sass-variable-shadow.md %}

``` sass
$box-shadow-inset-low: null !default
```
{: .my-small}

``` sass
$box-shadow-inset-normal: null !default
```

``` sass
$box-shadow-inset-high: null !default
```

``` sass
$text-shadow-low: null !default
```

``` sass
$text-shadow-normal: null !default
```

``` sass
$text-shadow-high: null !default
```

### Animations
``` sass
$transition-duration-short: 0.25s !default
```

``` sass
$transition-duration-normal: 0.5s !default
```

``` sass
$transition-duration-long: 1s !default
```

``` sass
$transition-timing-function-main: ease !default
```

### Others

``` sass
$base-cursor: default !default
```
The default cursor of html.

``` sass
$base-word-break: break-word !default
```
Set the word break rule of body texts.

``` sass
$base-text-underline-position: under !default
```

``` sass
$base-text-rendering: optimizeLegibility !default
```

``` sass
$base-webkit-font-smoothing: antialiased !default
```

``` sass
$base-moz-font-smoothing: grayscale !default
```

``` sass
$base-tap-highlight-color: transparent !default
```

``` sass
$base-webkit-touch-callout: none !default
```

``` sass
$base-html-background: $background-color-inverse-muted !default
```

``` sass
$base-body-min-height: 100vh !default
```

``` sass
$base-body-background: $background-color-main !default
```

``` sass
$base-selection-color: $color-inverse-main !default
```

``` sass
$base-selection-background-color: $background-color-dark !default
```