---
title: Button Icon
description: Nest icons in buttons to create beautiful button icon.
---


## Icon on the Left
Add the class `.btn-ico-left` to create a button with an icon on the left.

{% capture icon_on_the_left %}
<button class="btn btn-primary btn-ico-left btn-small">
  Search <i class="ico ico-search"></i>
</button>
<button class="btn btn-primary btn-ico-left">
  Search <i class="ico ico-search"></i>
</button>
<button class="btn btn-primary btn-ico-left btn-large">
  Search <i class="ico ico-search"></i>
</button>
{% endcapture %}

<div class="button-example">
  {{ icon_on_the_left }}
</div>
``` html{{ icon_on_the_left }}```


## Icon on the Right
Add the class `.btn-ico-right` to create a button with an icon on the right.

{% capture icon_on_the_right %}
<div class="btn-check btn-hollow-primary btn-ico-right btn-small">
  <input type="checkbox">
  <label>Check <i class="ico material-icons">check</i></label>
</div>
<div class="btn-check btn-hollow-primary btn-ico-right">
  <input type="checkbox">
  <label>Check <i class="ico material-icons">check</i></label>
</div>
<div class="btn-check btn-hollow-primary btn-ico-right btn-large">
  <input type="checkbox">
  <label>Check <i class="ico material-icons">check</i></label>
</div>
{% endcapture %}

<div class="button-example">
  {{ icon_on_the_right }}
</div>
``` html{{ icon_on_the_right }}```


## Icon on the Top
Add the class `.btn-ico-top` to create a button with and icon on the top.

{% capture icon_on_the_top %}
<button class="btn btn-primary btn-ico-top btn-small">
  Delete <i class="ico ico-cross"></i>
</button>
<button class="btn btn-primary btn-ico-top">
  Delete <i class="ico ico-cross"></i>
</button>
<button class="btn btn-primary btn-ico-top btn-large">
  Delete <i class="ico ico-cross"></i>
</button>
{% endcapture %}

<div class="button-example">
  {{ icon_on_the_top }}
</div>
``` html{{ icon_on_the_top }}```


## Icon Only
Add the class `.btn-ico` to create an icon only button.

{% capture icon_only %}
<div class="btn-file btn-primary btn-ico btn-small">
  <input type="file">
  <label><i class="ico material-icons">cloud_upload</i></label>
</div>
<div class="btn-file btn-primary btn-ico">
  <input type="file">
  <label><i class="ico material-icons">cloud_upload</i></label>
</div>
<div class="btn-file btn-primary btn-ico btn-large">
  <input type="file">
  <label><i class="ico material-icons">cloud_upload</i></label>
</div>
{% endcapture %}

<div class="button-example">
  {{ icon_only }}
</div>
``` html{{ icon_only }}```



## Sass Variables

``` sass
$button-icon-size-em: 1.286em !default
```
Description.
{: .mb-small}

``` sass
$button-icon-top-size-em: 1.5em !default
```
Description.
{: .mb-small}

``` sass
$button-icon-left-margin-em: 0 0.4em 0 0 !default
```
Description.
{: .mb-small}

``` sass
$button-icon-right-margin-em: 0 0 0 0.4em !default
```
Description.
{: .mb-small}

``` sass
$button-icon-top-margin-em: 0 0 0.15em 0 !default
```
Description.
{: .mb-small}

``` sass
$button-icon-top-height-rem: 4rem !default
```
Description.
{: .mb-small}

``` sass
$button-large-icon-top-height-rem: 5rem !default
```
Description.
{: .mb-small}

``` sass
$button-small-icon-top-height-rem: 3rem !default
```
Description.