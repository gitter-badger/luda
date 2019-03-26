---
title: Form Dropdown
description: Learn how to create form dropdown in Luda.
---


## Single Select

Combine radio input to create a single select dropdown.
{% capture single %}
<div class="fm-dropdown dropdown-fixed dropdown-absolute-m">
  <div class="fm fm-select">
    <input placeholder="Single select form dropdown">
  </div>
  <div class="dropdown-menu">
    <div class="dropdown-items">
      <div class="btns-y">
        <div class="btn-radio btn-hollow-primary">
          <input type="radio" name="single_fm_dropdown" value="one">
          <label>Item one</label>
        </div>
        <div class="btn-radio btn-hollow-primary">
          <input type="radio" name="single_fm_dropdown" value="two">
          <label>Item two</label>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}
{{ single }}
``` html{{ single }}```
{: .mt-small}


## Multiple Select
Combine checkbox input to create a multiple select dropdown.

{% capture multiple %}
<div class="fm-dropdown dropdown-fixed dropdown-absolute-m">
  <div class="fm fm-select">
    <input placeholder="Multiple select form dropdown">
  </div>
  <div class="dropdown-menu">
    <div class="dropdown-items" data-dropdown-toggle-disabled>
      <div class="btns-y">
        <div class="btn-check btn-hollow-primary">
          <input type="checkbox" name="multiple_fm_dropdown" value="one">
          <label>Item One</label>
        </div>
        <div class="btn-check btn-hollow-primary">
          <input type="checkbox" name="multiple_fm_dropdown" value="two">
          <label>Item Two</label>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}
{{ multiple }}
``` html{{ multiple }}```
{: .mt-small}



## Customized Option Text
Use the attribute `data-fm-dropdown-label` to indicate selected text.
{% capture customized_option_text %}
<div class="fm-dropdown dropdown-fixed dropdown-absolute-m">
  <div class="fm fm-select">
    <input placeholder="Form dropdown with customized value">
  </div>
  <div class="dropdown-menu">
    <div class="dropdown-items" data-dropdown-toggle-disabled>
      <div class="btns-y">
        <div class="btn-check btn-hollow-primary btn-ico-left">
          <input checked type="checkbox" name="custom_fm_dropdown" value="one" data-fm-dropdown-label="Item one">
          <label>Item one<i class="ico material-icons">face</i></label>
        </div>
        <div class="btn-check btn-hollow-primary btn-ico-left">
          <input type="checkbox" name="custom_fm_dropdown" value="two" data-fm-dropdown-label="Item two">
          <label>Item two<i class="ico material-icons">face</i></label>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}
{{ customized_option_text }}
``` html{{ customized_option_text }}```
{: .mt-small}