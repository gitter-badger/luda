---
title: Form Icon
description: Icons can be wrapped in form elements.
---


## Icon in the Left
Add the class `.fm-ico-left` to nest an icon in the left.

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
Add the class `.fm-ico-right` to nest an icon in the right.

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