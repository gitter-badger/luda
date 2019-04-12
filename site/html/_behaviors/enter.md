---
title: Enter
description: Enhance the behavior of the enter key for a better interaction experience.
---


## Introduction
In native HTML, the `click` event is triggered on limited elements when the `Enter` key pressed. In Luda, checkboxes, radios and elements have a none negative `tabindex` attribute are enhanced. The `click` event will be triggered on them when they're focused and the `Enter` key pressed. In some situations, this helps to improve interaction experience.

Let's see the below examples for clarification.


## Examples

### Checkbox
After focused and the `Enter` key pressed, the checked states of these checkboxes will be changed.
{% capture checkbox %}
<div class="fm fm-check">
  <label>
    <input type="checkbox"> One
  </label>
  <label>
    <input type="checkbox"> Two
  </label>
</div>
{% endcapture %}
<div class="example mt-none">
  {{ checkbox }}
</div>
``` html{{ checkbox }}```


### Radio
Focus these radios through the `Tab` key and press the `Enter` key to see what will happen.
{% capture radio %}
<div class="fm fm-radio">
  <label>
    <input type="radio" name="enter_click_radio" value="one"> One
  </label>
  <label>
    <input type="radio" name="enter_click_radio" value="two"> Two
  </label>
</div>
{% endcapture %}
<div class="example mt-none">
  {{ radio }}
</div>
``` html{{ radio }}```


### Tabindex
{% capture tabindex %}
<div class="bc-primary p-small my-small c-light" tabindex="0" onclick="alert('clicked')">Focus this div through the tab key and press the enter key.</div>
{% endcapture %}
<div class="example">
  {{ tabindex }}
</div>
``` html{{ tabindex }}```




## HTML Attributes

### data-enter-disabled

``` html
<html data-enter-disabled>...</html>
```
Add this attribute to the `<html>` tag to disable the enhanced behavior of the `Enter` key.

