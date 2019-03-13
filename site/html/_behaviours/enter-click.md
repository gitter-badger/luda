---
title: Enter Click
description: Enter click enhances checkbox, radio and elements with tabindex attribute. Click event will trigger when enter key pressed on these elements.
---


## Examples

<div class="fm fm-check mb-small">
  <label>
    <input type="checkbox">
    Check state of this checkbox will be toggled when enter key pressed after focused.
  </label>
</div>

``` html
<div class="fm fm-check">
  <input type="checkbox">
</div>
```


<div class="dis-flex my-small">
  <div class="fm fm-radio">
    <label>
      <input type="radio" name="enter_click_radio" value="one">
    </label>
  </div>
  <div class="fm fm-radio">
    <label>
      <input type="radio" name="enter_click_radio" value="two">
      Check state of these two radios will be toggled when enter key pressed after focused.
    </label>
  </div>
</div>

``` html
<div class="fm fm-radio">
  <input type="radio" name="enter_click_radio" value="one">
  <input type="radio" name="enter_click_radio" value="two">
</div>
```


<div class="bc-primary p-small my-small c-light" tabindex="0" onclick="alert('clicked')">Click event of this div will trigger when enter key pressed after focused.</div>


``` html
<div class="bc-primary p-small" tabindex="0" onclick="alert('clicked')"></div>
```




## JavaScript Methods

``` javascript
luda.enterClick.deactive()
```
Deactive enter click globally.
{: .mb-small}

``` javascript
luda.enterClick.active()
```
Active enter click globally. Actived by default.