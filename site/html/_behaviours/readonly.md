---
title: Readonly
description: Native readonly attribute only controls form elements not editable, but still focusable and show a editable cursor in some browsers. Luda readonly attribute makes form elements not focusable nor editable.
---



## Examples

{% capture readonly %}
<div class="fm fm-inline fm-text">
  <input data-readonly placeholder="A readonly text input">
</div>
<div class="fm fm-inline fm-text">
  <input data-readonly="false" placeholder="A text input">
</div>
{% endcapture %}

{{ readonly }}
``` html{{ readonly }}```
{: .mt-small }



## HTML Attributes

``` html
data-readonly
```
Any none false value makes a form element readonly.