---
title: Progress
description: Progress is designed to show in-progress data.
---


## Usage
A progress bar is offen used to show in-progress data like loading progress and data percentage. Progress bars can be easily created, add the `.progress` class to a container and the `.progress-bar` class to wrapped elements.

The below example shows a single progress bar wrapped in a `.progress` container, we use a size utility class to control the progress bar's width.

{% capture usage %}
<div class="progress">
  <div class="progress-bar w-25">25%</div>
</div>
{% endcapture %}
<div class="example">
  {{ usage }}
</div>
``` html{{ usage }}```
{: .mt-small}


## Background
The background color of progress bars can be changed by adding background utility classes. Let's see the below example.
{% capture backgrounds %}
<div class="progress">
  <div class="progress-bar w-25">25%</div>
  <div class="progress-bar w-33 bc-danger">33%</div>
  <div class="progress-bar w-33 bc-dark">33%</div>
</div>
{% endcapture %}
<div class="example">
  {{ backgrounds }}
</div>
``` html{{ backgrounds }}```


## Height
In the below example, the progress bars' height is changed by adding an inline style to the `.progress` container. Of course, you'd better change the height in stylesheets in real projects. 
{% capture height %}
<div class="progress" style="height:1rem">
  <div class="progress-bar w-25"></div>
  <div class="progress-bar bc-danger w-50"></div>
</div>
{% endcapture %}
<div class="example">
  {{ height }}
</div>
``` html{{ height }}```



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