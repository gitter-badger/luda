---
title: Radio tab
description: Radio tab enhances radio elements, it makes radios accesable through tab key.
---


## Examples



{% capture radio_tab %}
<div class="fm fm-radio">
  <label><input type="radio" name="radio_tab" value="one">One</label>
  <label><input type="radio" name="radio_tab" value="two">Two</label>
</div>
{% endcapture %}
{{ radio_tab }}
These radios can be focused through tab key or shift + tab key.
{: .mb-small}
``` html{{ radio_tab }}```




## JavaScript Methods

``` javascript
luda.radioTab.deactive()
```
Deactive radio tab globally.
{: .mb-small}


``` javascript
luda.radioTab.active()
```
Active radio tab globally. Actived by default.
{: .mb-small}