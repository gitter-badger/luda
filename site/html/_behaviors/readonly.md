---
title: Readonly
description: Native readonly attribute only controls form elements not editable, but still focusable and show a editable cursor in some browsers. Luda readonly attribute makes form elements not focusable nor editable.
---



## Usage
{% capture readonly %}
<div class="fm fm-text" data-readonly>
  <input data-readonly placeholder="A readonly text input">
</div>
{% endcapture %}
Add the attribute `data-readonly` to a form element to make it readonly.
{{ readonly }}
``` html{{ readonly }}```
{: .mt-small }

Change the value of attributue `data-readonly` to `false` to remove readonly state.
{% capture readonly_false %}
<div class="fm fm-text" data-readonly="false">
  <input data-readonly="false" placeholder="A text input">
</div>
{% endcapture %}
{{ readonly_false }}
``` html{{ readonly_false }}```
{: .mt-small }


## HTML Attributes

``` html
data-readonly
```
Any none false value makes a form element readonly.