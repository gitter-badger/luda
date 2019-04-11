---
title: Disabled
description: Use disabled attribute to make buttons, forms and more not accessable. Values of disabled form fileds will not be submited, if you just want a not editable form element, you should use readonly instead.
---



## Disable a Button
Add `disabled` attribute to a button to disable it.

{% capture disabled_button %}
<button class="btn btn-primary" disabled>Disabled luda button</button>
{% endcapture %}

{{ disabled_button }}{: .mb-small}
``` html{{ disabled_button }}```


## Disable a Form Element

Add `disabled` attribute to a form element to disable it.

{% capture disabled_form %}
<div class="fm fm-text" disabled>
  <input disabled placeholder="Disabled luda form text">
</div>
{% endcapture %}

{{ disabled_form }}{: .mb-small}
``` html{{disabled_form}}```


## HTML Attributes

``` html
disabled
```
Disable a form element or a button.


## Sass Variables
{: .mb-small}

``` sass
$opacity-disabled: $opacity-muted !default
```