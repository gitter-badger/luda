---
title: Display
description: Use display utility classes to control elements' display property responsively.
---


## Introduction
Display utility classes change the value of elements' display property, these classes are extended with breakpoint postfixes. The classes are named in the format `d-{value}-{breakpoint}`. For example, if the `.d-block-l` class is added to an element, the value of the element's display property will be `block` when scrren width matches the `l` breakpoint.

All avialible value: `none`, `inline`, `inline-block`, `block`, `inline-flex`, `flex`, `table`, `table-cell`, `table-row`. 

For print control, there is a `.d-none-print` class for hidding elements when print.


## Example
In the below example, we hide the div on small screens, show it on middle size screens and hide it again on large screens.

{% capture example %}
<div class="d-none d-block-m d-none-l p-medium bc-primary"></div>
{% endcapture %}

{{ example }}
``` html{{ example }}```
{: .mt-small.mb-small-m}