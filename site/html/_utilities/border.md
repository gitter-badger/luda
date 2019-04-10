---
title: Border
description: Use border utilities to remove unnecessary borders of elements.
---

## Introduction
Many designers like to seperate elements by lines, so maybe because of this, many UI frameworks offer visible border and divider components. But a heavy use of dividers leads to visual noise and dense, it makes interfaces crowded. It's not the modern way.

Personally, I don't like to use lines to seperate elements, I think the better way is to group and divide elements through spacing and contrast by considering the functions and meanings of them. In this way, your interfaces will be simple and clean. So, there're no visible border utilities in Luda by default, we only provide some border utilities to remove unnecessary borders.

Border utilities are named using the format `.bd-{direction}-none`. If the `{direction}` part is not included, it means all directions. Let's see how to use them in the below examples.

{% capture border %}
<div style="height: 3rem; border: solid 2px #000" class="bd-t-none mb-small bc-muted"></div>
<div style="height: 3rem; border: solid 2px #000" class="bd-r-none mb-small bc-muted"></div>
<div style="height: 3rem; border: solid 2px #000" class="bd-b-none mb-small bc-muted"></div>
<div style="height: 3rem; border: solid 2px #000" class="bd-l-none mb-small bc-muted"></div>
<div style="height: 3rem; border: solid 2px #000" class="bd-none mb-small bc-muted"></div>
{% endcapture %}
<div class="example">
  {{ border }}
</div>
``` html{{ border }}```