---
title: Scrollbar
description: Scrollbar styles are rewritten in css for better appearance.
---


## Example
Scrollbar shows for screen matches the `m` and `l` breakpoints.
<div style="height:10rem" class="bc-dark of-auto">
  <div style="width:100vw;height:20rem"></div>
</div>



## Sass Variables

### Webkit
``` sass
$scrollbar-breakpoint-vertical-width-rem: 0.5rem !default
```
Vertical scrollbar width for webkit browsers. Value should be number.
{: .mb-small}

``` sass
$scrollbar-breakpoint-horizontal-height-rem: 0.5rem !default
```
Horizontal scrollbar width for webkit browsers. Value should be number.
{: .mb-small}

``` sass
$scrollbar-thumb-background: rgba($color-muted, $opacity-more-muted) !default
```
Scrollbar thumb background for webkit browsers. Value can be any valid background value.
{: .mb-small}

``` sass
$scrollbar-thumb-border-radius: 0.5rem !default
```
Scrollbar thumb border radius for webkit browsers. Value can be any valid border radius value.

### Edge
``` sass
$scrollbar-ie-edge-overflow-style: -ms-autohiding-scrollbar !default
```
Scrollbar overflow style for edge browser.