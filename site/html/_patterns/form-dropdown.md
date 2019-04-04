---
title: Form Dropdown
description: Form dropdown is an alternative to form select, it offers a more beautiful appearance and flexible customization support.
---


## Single Select
To simulate a single form select, we can use a form dropdown to wrap radio buttons. Add the class `.fm-dropdown` to a container and wrap elements like the below example.  

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
<div class="example">
  {{ single }}
</div>
``` html{{ single }}```


## Multiple Select
To simulate a multiple select, we can wrap checkbox buttons in a `.fm-dropdown` container and use the `data-dropdown-toggle-disabled` attribute to control the toggle behavior.

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
<div class="example">
  {{ multiple }}
</div>
``` html{{ multiple }}```




## Customized Option Texts
By default, the form dropdown component uses the `innerText` of its selected radio buttons' or checkbox buttons' labels as the text for display. But if the `data-fm-dropdown-label` attribute are setted on the wrapped inputs, the attributes' values will be used for display instead.

In the below example, we use material icons in the nested radio buttons, if we don't set the `data-fm-dropdown-label` attribute, the display texts will includes the material icons' texts. The `data-fm-dropdown-label` helps in situations like this.

{% capture customized_option_text %}
<div class="fm-dropdown dropdown-fixed dropdown-absolute-m">
  <div class="fm fm-select">
    <input placeholder="Form dropdown with customized value">
  </div>
  <div class="dropdown-menu">
    <div class="dropdown-items">
      <div class="btns-y">
        <div class="btn-radio btn-hollow-primary btn-ico-left">
          <input data-fm-dropdown-label="Item one" checked type="radio" name="custom_fm_dropdown" value="one">
          <label>Item one<i class="ico material-icons">face</i></label>
        </div>
        <div class="btn-radio btn-hollow-primary btn-ico-left">
          <input data-fm-dropdown-label="Item two" type="radio" name="custom_fm_dropdown" value="two">
          <label>Item two<i class="ico material-icons">face</i></label>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}
<div class="example">
  {{ customized_option_text }}
</div>
``` html{{ customized_option_text }}```
