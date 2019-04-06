---
title: Alignment
description: Use alignment utilities to change the vertical alignment of elements.
---


## Usage
The alignment utility classes include `.va-top`, `.va-middle`, `.va-bottom`, `.va-baseline`,
`.va-text-top` and `.va-text-bottom`, see how they affect inline or inline block elements in
the below example.

{% capture alignment %}
<span class="va-top">top</span>
<span class="va-middle">middle</span>
<span class="va-bottom">bottom</span>
<span class="va-baseline">baseline</span>
<span calss="va-text-top">text-top</span>
<span calss="va-text-bottom">text-bottom</span>
{% endcapture %}

<div class="example baseline">
  <p class="p3 d-inline-block">Here are some texts:</p>
  {{ alignment }}
</div>

``` html{{ alignment }}```