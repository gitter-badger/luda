---
title: Flex
description: Use flexbox utilities to change flexbox properties responsively.
---


## Introduction
Flexbox utilities must be applied to flexbox containers, you can add the `.d-flex` or the `.d-inline-flex` classes to create a flexbox container.

All flexbox utilities are extended with breakpoint postfixes.


## Flex Direction
Flex direction utility classes are named in the format: `.fd-{value}-{breakpoint}`.

All availiable value: `row`, `row-reverse`, `column`, `column-reverse`, `column-reverse`. See how they change flex items' flex directions in the below example.

{% capture direction_row %}
<div class="d-flex fd-row bc-dark">
  <p class="bc-primary px-medium c-light">One</p>
  <p class="bc-danger px-medium c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ direction_row }}
</div>
``` html{{ direction_row }}```
{: .mb-medium}

{% capture direction_row_reverse %}
<div class="d-flex fd-row-reverse bc-dark">
  <p class="bc-primary px-medium c-light">One</p>
  <p class="bc-danger px-medium c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ direction_row_reverse }}
</div>
``` html{{ direction_row_reverse }}```
{: .mb-medium}

{% capture direction_column %}
<div class="d-flex fd-column">
  <p class="bc-primary px-medium c-light">One</p>
  <p class="bc-danger px-medium c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ direction_column }}
</div>
``` html{{ direction_column }}```
{: .mb-medium}

{% capture direction_column_reverse %}
<div class="d-flex fd-column-reverse">
  <p class="bc-primary px-medium c-light">One</p>
  <p class="bc-danger px-medium c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ direction_column_reverse }}
</div>
``` html{{ direction_column_reverse }}```


## Flex Wrap
Flex wrap utility classes are named in the format: `.fw-{value}-{breakpoint}`.

All avaliable value: `nowrap`, `wrap`, `wrap-reverse`. See how they change flex items wrap behavior in the below example.

{% capture nowrap %}
<div class="d-flex fw-nowrap">
  <p class="bc-primary w-100 px-medium c-light">One</p>
  <p class="bc-danger w-100 px-medium c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ nowrap }}
</div>
``` html{{ nowrap }}```
{: .mb-medium}

{% capture wrap %}
<div class="d-flex fw-wrap">
  <p class="bc-primary w-100 px-medium c-light">One</p>
  <p class="bc-danger w-100 px-medium c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ wrap }}
</div>
``` html{{ wrap }}```
{: .mb-medium}

{% capture wrap_reverse %}
<div class="d-flex fw-wrap-reverse">
  <p class="bc-primary w-100 px-medium c-light">One</p>
  <p class="bc-danger w-100 px-medium c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ wrap_reverse }}
</div>
``` html{{ wrap_reverse }}```



## Justify Content
Justify content utility classes are named in the format: `.jc-{value}-{breakpoint}`.

All availiable value: `start`, `center`, `end`, `between`, `around`. See how they change flex items alignment in the below examples.

{% capture jc_start %}
<div class="d-flex jc-start bc-dark">
  <p class="bc-primary w-33 px-medium c-light">One</p>
  <p class="bc-danger w-33 px-medium c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ jc_start }}
</div>
``` html{{ jc_start }}```
{: .mb-medium}

{% capture jc_center %}
<div class="d-flex jc-center bc-dark">
  <p class="bc-primary w-33 px-medium c-light">One</p>
  <p class="bc-danger w-33 px-medium c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ jc_center }}
</div>
``` html{{ jc_center }}```
{: .mb-medium}

{% capture jc_end %}
<div class="d-flex jc-end bc-dark">
  <p class="bc-primary w-33 px-medium c-light">One</p>
  <p class="bc-danger w-33 px-medium c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ jc_end }}
</div>
``` html{{ jc_end }}```
{: .mb-medium}

{% capture jc_between %}
<div class="d-flex jc-between bc-dark">
  <p class="bc-primary w-33 px-medium c-light">One</p>
  <p class="bc-danger w-33 px-medium c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ jc_between }}
</div>
``` html{{ jc_between }}```
{: .mb-medium}

{% capture jc_around %}
<div class="d-flex jc-around bc-dark">
  <p class="bc-primary w-33 px-medium c-light">One</p>
  <p class="bc-danger w-33 px-medium c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ jc_around }}
</div>
``` html{{ jc_around }}```


## Align Content
Align content utility classes are named in the format `.ac-{value}-{breakpoint}`.

All availiabe value: `start`, `center`, `end`, `between`, `around`, `stretch`. See how they change flex items layout in the below example.

{% capture ac_start %}
<div class="d-flex fw-wrap ac-start bc-dark" style="height: 9rem">
  <p class="bc-primary w-100 px-medium c-light">One</p>
  <p class="bc-danger w-100 px-medium c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ ac_start }}
</div>
``` html{{ ac_start }}```
{: .mb-medium}

{% capture ac_center %}
<div class="d-flex fw-wrap ac-center bc-dark" style="height: 9rem">
  <p class="bc-primary w-100 px-medium c-light">One</p>
  <p class="bc-danger w-100 px-medium c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ ac_center }}
</div>
``` html{{ ac_center }}```
{: .mb-medium}

{% capture ac_end %}
<div class="d-flex fw-wrap ac-end bc-dark" style="height: 9rem">
  <p class="bc-primary w-100 px-medium c-light">One</p>
  <p class="bc-danger w-100 px-medium c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ ac_end }}
</div>
``` html{{ ac_end }}```
{: .mb-medium}

{% capture ac_between %}
<div class="d-flex fw-wrap ac-between bc-dark" style="height: 9rem">
  <p class="bc-primary w-100 px-medium c-light">One</p>
  <p class="bc-danger w-100 px-medium c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ ac_between }}
</div>
``` html{{ ac_between }}```
{: .mb-medium}

{% capture ac_around %}
<div class="d-flex fw-wrap ac-around bc-dark" style="height: 9rem">
  <p class="bc-primary w-100 px-medium c-light">One</p>
  <p class="bc-danger w-100 px-medium c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ ac_around }}
</div>
``` html{{ ac_around }}```
{: .mb-medium}

{% capture ac_stretch %}
<div class="d-flex fw-wrap ac-stretch bc-dark" style="height: 9rem">
  <p class="bc-primary w-100 px-medium c-light">One</p>
  <p class="bc-danger w-100 px-medium c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ ac_stretch }}
</div>
``` html{{ ac_stretch }}```
{: .mb-medium}


## Align Items
Align item utility classes are named in the format `.ai-{value}-{breakpoint}`.

All availiable value: `start`, `center`, `end`, `baseline`, `stretch`. See how they change flex items layout in the below examples.

{% capture ai_start %}
<div class="d-flex ai-start bc-dark" style="height: 6rem">
  <p class="bc-primary w-50 px-medium c-light">One</p>
  <p class="p2 bc-danger w-50 px-medium c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ ai_start }}
</div>
``` html{{ ai_start }}```
{: .mb-medium}

{% capture ai_center %}
<div class="d-flex ai-center bc-dark" style="height: 6rem">
  <p class="bc-primary w-50 px-medium c-light">One</p>
  <p class="p2 bc-danger w-50 px-medium c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ ai_center }}
</div>
``` html{{ ai_center }}```
{: .mb-medium}

{% capture ai_baseline %}
<div class="d-flex ai-baseline bc-dark" style="height: 6rem">
  <p class="bc-primary w-50 px-medium c-light">One</p>
  <p class="p2 bc-danger w-50 px-medium c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ ai_baseline }}
</div>
``` html{{ ai_baseline }}```
{: .mb-medium}

{% capture ai_end %}
<div class="d-flex ai-end bc-dark" style="height: 6rem">
  <p class="bc-primary w-50 px-medium c-light">One</p>
  <p class="p2 bc-danger w-50 px-medium c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ ai_end }}
</div>
``` html{{ ai_end }}```
{: .mb-medium}

{% capture ai_stretch %}
<div class="d-flex ai-stretch bc-dark" style="height: 6rem">
  <p class="bc-primary w-50 px-medium c-light">One</p>
  <p class="p2 bc-danger w-50 px-medium c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ ai_stretch }}
</div>
``` html{{ ai_stretch }}```


## Align Self
Align self utility classes are named in the format `.as-{value}-{breakpoint}`.

All availiable value: `start`, `center`, `end`, `baseline`, `stretch`. See how they change flex items layout in the below examples.

{% capture as_start %}
<div class="d-flex bc-dark" style="height: 6rem">
  <p class="as-start bc-primary w-50 px-medium c-light">One</p>
  <p class="p2 bc-danger w-50 px-medium c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ as_start }}
</div>
``` html{{ as_start }}```
{: .mb-medium}

{% capture as_center %}
<div class="d-flex as-center bc-dark" style="height: 6rem">
  <p class="as-center bc-primary w-50 px-medium c-light">One</p>
  <p class="p2 bc-danger w-50 px-medium c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ as_center }}
</div>
``` html{{ as_center }}```
{: .mb-medium}

{% capture as_baseline %}
<div class="d-flex as-baseline bc-dark" style="height: 6rem">
  <p class="as-baseline bc-primary w-50 px-medium c-light">One</p>
  <p class="p2 bc-danger w-50 px-medium c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ as_baseline }}
</div>
``` html{{ as_baseline }}```
{: .mb-medium}

{% capture as_end %}
<div class="d-flex as-end bc-dark" style="height: 6rem">
  <p class="as-end bc-primary w-50 px-medium c-light">One</p>
  <p class="p2 bc-danger w-50 px-medium c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ as_end }}
</div>
``` html{{ as_end }}```
{: .mb-medium}

{% capture as_stretch %}
<div class="d-flex as-stretch bc-dark" style="height: 6rem">
  <p class="as-stretch bc-primary w-50 px-medium c-light">One</p>
  <p class="p2 bc-danger w-50 px-medium c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ as_stretch }}
</div>
``` html{{ as_stretch }}```

## Flex Order
The order utility classes from `.od-1` to `.od-6` are used to move columns after unsorted columns, and from `.on-1` to `.on-6` are used to move columns before unsorted columns. The `on` is short for "negative order".

{% capture flex_order %}
<div class="d-flex fw-wrap bc-dark">
  <p class="od-6 w-100 px-medium bc-primary c-light">.od-6</p>
  <p class="od-5 w-100 px-medium bc-danger c-light">.od-5</p>
  <p class="od-4 w-100 px-medium bc-primary c-light">.od-4</p>
  <p class="od-3 w-100 px-medium bc-danger c-light">.od-3</p>
  <p class="od-2 w-100 px-medium bc-primary c-light">.od-2</p>
  <p class="od-1 w-100 px-medium bc-danger c-light">.od-1</p>
  <p class="on-1 w-100 px-medium bc-primary c-light">.on-1</p>
  <p class="on-2 w-100 px-medium bc-danger c-light">.on-2</p>
  <p class="on-3 w-100 px-medium bc-primary c-light">.on-3</p>
  <p class="on-4 w-100 px-medium bc-danger c-light">.on-4</p>
  <p class="on-5 w-100 px-medium bc-primary c-light">.on-5</p>
  <p class="on-6 w-100 px-medium bc-danger c-light">.on-6</p>  
</div>
{% endcapture %}
<div class="example">
  {{ flex_order }}
</div>
``` html{{ flex_order }}```


## Grow and Shrink
Flex grow utility classes are named in the format `.fg-{value}-{breakpoint}` and flex shrink utility classes are named in the format `.fs-{value}-{breakpoint}`, value can be `1` or `0`.

The `.flex-auto-{breakpoint}` classes...

{% capture fg %}
<div class="d-flex bc-dark">
  <p class="fg-1 w-33 bc-primary c-light px-medium">.fg-1.w-33</p>
  <p class="fg-0 w-33 bc-danger c-light px-medium">.fg-0.w-33</p>
</div>
{% endcapture %}
<div class="example">
  {{ fg }}
</div>
``` html{{ fg }}```
{: .mb-medium}

{% capture fs %}
<div class="d-flex bc-dark">
  <p class="fs-1 w-66 bc-primary c-light px-medium">.fs-1.w-66</p>
  <p class="fs-0 w-66 bc-danger c-light px-medium">.fs-0.w-66</p>
</div>
{% endcapture %}
<div class="example">
  {{ fs }}
</div>
``` html{{ fs }}```
{: .mb-medium}

{% capture flex_auto %}
<div class="d-flex bc-dark">
  <p class="flex-auto w-66 bc-primary c-light px-medium">.flex-auto.w-66</p>
  <p class="flex-auto w-66 bc-danger c-light px-medium">.flex-auto.w-66</p>
</div>
{% endcapture %}
<div class="example">
  {{ flex_auto }}
</div>
``` html{{ flex_auto }}```