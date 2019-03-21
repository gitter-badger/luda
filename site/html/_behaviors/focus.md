---
title: Focus
description: Focus enhances html elements focus state by adding <code>.focus</code> class. Except form elements, <code>.focus</code> class will be added only when an element is focused through keyboard or manually called <code>focus()</code> in Javascript.
---


## Examples


<a href="#" data-turbolinks="false">This link will show focus state only when focused through keyboard.</a>
``` html
<a href="#">This link will show focus state only when focused through keyboard.</a>
```
{: .mb-small }

{% capture button_focus %}
<button class="btn btn-primary">Primary button</button>
{% endcapture %}
{{ button_focus }}
This button will show focus state only when focused through keyboard.
``` html{{ button_focus }}```
{: .mb-medium }

{% capture form_focus %}
<div class="fm fm-text">
  <input placeholder="A text filed">
</div>
{% endcapture %}

{{ form_focus }}
This text field will show focus state nomather how it's focused.
``` html{{ form_focus }}```

## JavaScript Methods
``` javascript
luda.focus.deactive()
```
Deactive focus globally.
{: .mb-small}

``` javascript
luda.focus.active()
```
Active focus globally. Actived by default.