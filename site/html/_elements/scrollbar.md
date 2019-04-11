---
title: Scrollbar
description: Scrollbar styles are rewritten in css for a better appearance.
---


## Example
The scrollbar styles are written in pure CSS in Luda, the customized styles only shows for screens larger than the `m` width breakpoint. The styles only work for webkit based browsers and IE edge browsers since Firefox doesn't support customizing scrollbar appearance in CSS.

In the below example, customized scrollbar styles will show for middle size and large screens.

<div style="height:10rem" class="example bc-dark of-auto">
  <div style="width:100vw;height:20rem"></div>
</div>



## Sass Variables
{: .mb-small}

``` sass
$scrollbar-width-breakpoint: m !default
```
The customized scrollbar styles will effect when screen width is equal to or larger than the specified breakpoint.
{: .mb-small}

``` sass
$scrollbar-breakpoint-vertical-width-rem: 0.5rem !default
```
Vertical scrollbar width for webkit browsers.
{: .mb-small}

``` sass
$scrollbar-breakpoint-horizontal-height-rem: 0.5rem !default
```
Horizontal scrollbar height for webkit browsers.
{: .mb-small}

``` sass
$scrollbar-thumb-background: rgba($color-muted, $opacity-more-muted) !default
```
Scrollbar thumb background for webkit browsers.
{: .mb-small}

``` sass
$scrollbar-thumb-border-radius: 0.5rem !default
```
Scrollbar thumb border radius for webkit browsers.
{: .mb-small}

``` sass
$scrollbar-edge-overflow-style: -ms-autohiding-scrollbar !default
```
Scrollbar style for the edge browser.