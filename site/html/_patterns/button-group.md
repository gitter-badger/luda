---
title: Button Group
description: Groups similar function buttons together.
---


## Horizontal Button Group

Add the class `.btns-x` to create a horizontal button group.
{% capture button_group_x %}
<div class="btns-x">
  <button class="btn btn-primary">One</button>
  <button class="btn btn-primary">Two</button>
  <button class="btn btn-primary">Three</button>
</div>
<div class="btns-x">
  <div class="btn-check btn-hollow-primary">
    <input type="checkbox">
    <label>Check</label>
  </div>
  <div class="btn-radio btn-hollow-primary">
    <input type="radio">
    <label>Radio</label>
  </div>
  <div class="btn-file btn-hollow-primary">
    <input type="file">
    <label>File</label>
  </div>
</div>
{% endcapture%}
<div class="button-example">
  {{ button_group_x}}  
</div>
``` html{{ button_group_x }}```



## Vertical Button Group

Add the class `.btns-y` to create a vertical button group.

{% capture button_group_y %}
<div class="btns-y">
  <button class="btn btn-ico-left btn-hollow-secondary">One <i class="ico ico-plus"></i></button>
  <button class="btn btn-ico-left btn-hollow-secondary">Two <i class="ico ico-cross"></i></button>
  <button class="btn btn-ico-left btn-hollow-secondary">Three <i class="ico ico-search"></i></button>
  <button class="btn btn-ico-left btn-hollow-secondary">Four <i class="ico ico-menu"></i></button>
</div>
<div class="btns-y">
  <button class="btn btn-ico btn-primary"><i class="ico ico-up"></i></button>
  <button class="btn btn-ico btn-primary"><i class="ico ico-right"></i></button>
  <button class="btn btn-ico btn-primary"><i class="ico ico-down"></i></button>
  <button class="btn btn-ico btn-primary"><i class="ico ico-left"></i></button>
</div>
{% endcapture%}
<div class="button-example">
  {{ button_group_y }}
</div>
``` html{{ button_group_y }}```


## Style Modifiers

### Fluid
Add the class `.btns-fluid` to make button group fluid.

{% capture button_group_fluid %}
<div class="btns-x btns-fluid">
  <button class="btn btn-ico-top btn-primary">Add <i class="ico ico-plus"></i></button>
  <button class="btn btn-ico-top btn-primary">Search <i class="ico ico-search"></i></button>
  <button class="btn btn-ico-top btn-primary">Delete <i class="ico ico-cross"></i></button>
</div>
<div class="btns-y btns-fluid">
  <button class="btn btn-ico-left btn-hollow-secondary">Add <i class="ico ico-plus"></i></button>
  <button class="btn btn-ico-left btn-hollow-secondary">Search <i class="ico ico-search"></i></button>
  <button class="btn btn-ico-left btn-hollow-secondary">Delete <i class="ico ico-cross"></i></button>
</div>
{% endcapture %}
<div class="button-example">
  {{ button_group_fluid }}
</div>
``` html{{ button_group_fluid }}```


### Margin
Add the class `.btns-margin` to add margins around buttons.

{% capture button_group_margin %}
<div class="btns-y btns-margin">
  <button class="btn btn-hollow-primary">One</button>
  <button class="btn btn-hollow-primary">Two</button>
  <button class="btn btn-hollow-primary">Three</button>
</div>
<div class="btns-x btns-margin">
  <button class="btn btn-hollow-secondary">1</button>
  <button class="btn btn-hollow-secondary" disabled>...</button>
  <button class="btn btn-dark">5</button>
  <button class="btn btn-hollow-secondary" disabled>...</button>
  <button class="btn btn-hollow-secondary">9</button>
</div>
{% endcapture %}
{{ button_group_margin }}
``` html{{ button_group_margin }}```


## Sass Variables

``` sass
$button-group-box-shadow: $box-shadow-normal !default
```
Description.
{: .mb-small}

``` sass
$button-group-children-margin-rem: 0 $space-small-rem $space-small-rem 0 !default
```
Description.