---
title: Progress
description: Progress is designed to show progress data.
---


## Usage
Nest `.progress-bar` in `.progress` and use size utilities to control progress width.
{% capture usage %}
<div class="progress">
  <div class="progress-bar w-25">25%</div>
</div>
{% endcapture %}
{{ usage }}
``` html{{ usage }}```
{: .mt-small}


## Backgrounds
Use background utilities to change `.progress-bar` backgrounds.
{% capture backgrounds %}
<div class="progress">
  <div class="progress-bar w-25">25%</div>
  <div class="progress-bar w-33 bc-danger">33%</div>
  <div class="progress-bar w-33 bc-dark">33%</div>
</div>
{% endcapture %}
{{ backgrounds }}
``` html{{ backgrounds }}```
{: .mt-small}


## Height
Change `.progress-bar` height to make it thinner.
{% capture height %}
<div class="progress" style="height:1rem">
  <div class="progress-bar w-25"></div>
  <div class="progress-bar bc-danger w-50"></div>
</div>
{% endcapture %}
{{ height }}
``` html{{ height }}```
{: .mt-small}



## Sass Variables

### Sizes
``` sass
$progress-height-rem: 2rem !default
```
Default height of progerss. Value should be number.
{: .mb-small}

``` sass
$progress-bar-min-width-em: 3em !default
```
Min width of progress bar. Value should be number.
{: .mb-small}

``` sass
$progress-bar-padding: 0 $space-tiny-rem !default
```
Padding of progress bar. Value can be any valid padding value.

### Others
``` sass
$progress-bar-typography-size-level: 6 !default
```
Progress bar font size level. Value should be between 1 ~ 6.
{: .mb-small}

``` sass
$progress-bar-color: $color-inverse-main !default
```
Color of progress bar. Value can be any valid color value.
{: .mb-small}

``` sass
$progress-border-radius: $border-radius-main !default
```
Border radius of progress. Value can be any valid border radius value.
{: .mb-small}

``` sass
$progress-background: $background-muted !default
```
Background of progress. Value can be any valid background value.
{: .mb-small}

``` sass
$progress-bar-background: $background-color-primary !default
```
Background of progress bar. Value can be any valid background value.