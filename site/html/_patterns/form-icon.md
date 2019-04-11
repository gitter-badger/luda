---
title: Form Icon
description: Icons can be wrapped in the left or right of form elements.
---


## Icon in the Left
To add an icon in the left of a form element,
add the `.fm-ico-left` class to the `.fm` container,
then wrap an icon element inside.

{% capture left %}
<div class="fm fm-text fm-ico-left fm-small">
  <input placeholder="Form text with an icon in the left">
  <i class="ico ico-search"></i>
</div>
<div class="fm fm-text fm-ico-left">
  <input placeholder="Form text with an icon in the left">
  <i class="ico ico-search"></i>
</div>
<div class="fm fm-text fm-ico-left fm-large">
  <input placeholder="Form text with an icon in the left">
  <i class="ico ico-search"></i>
</div>
{% endcapture %}
<div class="form-example">
  {{ left }}
</div>
``` html{{ left }}```


## Icon in the Right
Also, you can wrap an icon in the right of a form element,
just replace the `.fm-ico-left` class with `.fm-ico-right`. 

{% capture right %}
<div class="fm fm-select fm-ico-right fm-small">
  <select placeholder="Form select with an icon in the right">
    <option>Gmail</option>
    <option>Hotmail</option>
  </select>
  <i class="ico material-icons">mail</i>
</div>
<div class="fm fm-select fm-ico-right">
  <select placeholder="Form select with an icon in the right">
    <option>Gmail</option>
    <option>Hotmail</option>
  </select>
  <i class="ico material-icons">mail</i>
</div>
<div class="fm fm-select fm-ico-right fm-large">
  <select placeholder="Form select with an icon in the right">
    <option>Gmail</option>
    <option>Hotmail</option>
  </select>
  <i class="ico material-icons">mail</i>
</div>
{% endcapture%}
<div class="form-example">
  {{ right }}
</div>
``` html{{ right }}```



## Sass Variables
{: .mb-small}

``` sass
$form-element-icon-size-em: 1.286em !default
```
{: .mb-small}

``` sass
$form-element-icon-color: $form-element-border-color !default
```
{: .mb-small}

``` sass
$form-element-error-icon-color: $form-element-error-border-color !default
```
{: .mb-small}

``` sass
$form-element-focus-icon-color: $form-element-focus-border-color !default
```