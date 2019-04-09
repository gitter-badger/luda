---
title: Flex
description: Use flexbox utilities to change flexbox properties responsively.
---


## Introduction
Flexbox is a widely used layout scenario in CSS, if you're not familiar with it, be sure to read
[this tutorial](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) at first.

Flexbox utilities must be applied to flexbox containers or flexbox items,
you can use the `.d-flex` class or the `.d-inline-flex` class to create a flexbox container.

All flexbox utilities are extended with [screen width breakpoint postfixes]() for responsive control.


## Flex Direction
Flex direction utilities are classes for setting the value of the [`flex-direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction) property,
they are named using the format: `.fd-{value}-{breakpoint}`. The value can be one of `row`, `row-reverse`,
`column`, `column-reverse` and `column-reverse`. See how they change flex items' direction in the below examples.

{% capture direction_row %}
<div class="d-flex fd-row bc-dark">
  <p class="bc-primary px-small c-light">One</p>
  <p class="bc-danger px-small c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ direction_row }}
</div>
``` html{{ direction_row }}```
{: .mb-medium}

{% capture direction_row_reverse %}
<div class="d-flex fd-row-reverse bc-dark">
  <p class="bc-primary px-small c-light">One</p>
  <p class="bc-danger px-small c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ direction_row_reverse }}
</div>
``` html{{ direction_row_reverse }}```
{: .mb-medium}

{% capture direction_column %}
<div class="d-flex fd-column">
  <p class="bc-primary px-small c-light">One</p>
  <p class="bc-danger px-small c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ direction_column }}
</div>
``` html{{ direction_column }}```
{: .mb-medium}

{% capture direction_column_reverse %}
<div class="d-flex fd-column-reverse">
  <p class="bc-primary px-small c-light">One</p>
  <p class="bc-danger px-small c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ direction_column_reverse }}
</div>
``` html{{ direction_column_reverse }}```


## Flex Wrap
Flex wrap utilities are classes for setting the value of the [`flex-wrap`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap) property,
they are named using the format: `.fw-{value}-{breakpoint}`. The value can be one of `nowrap`,
`wrap` and `wrap-reverse`. Let's see the below examples for detail.

{% capture nowrap %}
<div class="d-flex fw-nowrap">
  <p class="bc-primary w-100 px-small c-light">One</p>
  <p class="bc-danger w-100 px-small c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ nowrap }}
</div>
``` html{{ nowrap }}```
{: .mb-medium}

{% capture wrap %}
<div class="d-flex fw-wrap">
  <p class="bc-primary w-100 px-small c-light">One</p>
  <p class="bc-danger w-100 px-small c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ wrap }}
</div>
``` html{{ wrap }}```
{: .mb-medium}

{% capture wrap_reverse %}
<div class="d-flex fw-wrap-reverse">
  <p class="bc-primary w-100 px-small c-light">One</p>
  <p class="bc-danger w-100 px-small c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ wrap_reverse }}
</div>
``` html{{ wrap_reverse }}```



## Justify Content
Justify content utilities are classes for setting the value of the [`justify-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) property,
they are named using the format: `.jc-{value}-{breakpoint}`. The value can be one of `start`,
`center`, `end`, `between` and `around`. See how they change flex items' alignment in the below examples.

{% capture jc_start %}
<div class="d-flex jc-start bc-dark">
  <p class="bc-primary w-33 px-small c-light">One</p>
  <p class="bc-danger w-33 px-small c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ jc_start }}
</div>
``` html{{ jc_start }}```
{: .mb-medium}

{% capture jc_center %}
<div class="d-flex jc-center bc-dark">
  <p class="bc-primary w-33 px-small c-light">One</p>
  <p class="bc-danger w-33 px-small c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ jc_center }}
</div>
``` html{{ jc_center }}```
{: .mb-medium}

{% capture jc_end %}
<div class="d-flex jc-end bc-dark">
  <p class="bc-primary w-33 px-small c-light">One</p>
  <p class="bc-danger w-33 px-small c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ jc_end }}
</div>
``` html{{ jc_end }}```
{: .mb-medium}

{% capture jc_between %}
<div class="d-flex jc-between bc-dark">
  <p class="bc-primary w-33 px-small c-light">One</p>
  <p class="bc-danger w-33 px-small c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ jc_between }}
</div>
``` html{{ jc_between }}```
{: .mb-medium}

{% capture jc_around %}
<div class="d-flex jc-around bc-dark">
  <p class="bc-primary w-33 px-small c-light">One</p>
  <p class="bc-danger w-33 px-small c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ jc_around }}
</div>
``` html{{ jc_around }}```


## Align Content
Align content utilities are classes for setting the value of the [`align-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content) property,
they are named using the format: `.ac-{value}-{breakpoint}`. The value can be one of `start`,
`center`, `end`, `between`, `around` and `stretch`. See how they change flex items' alignment in the below examples.

{% capture ac_start %}
<div class="d-flex fw-wrap ac-start bc-dark" style="height: 9rem">
  <p class="bc-primary w-100 px-small c-light">One</p>
  <p class="bc-danger w-100 px-small c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ ac_start }}
</div>
``` html{{ ac_start }}```
{: .mb-medium}

{% capture ac_center %}
<div class="d-flex fw-wrap ac-center bc-dark" style="height: 9rem">
  <p class="bc-primary w-100 px-small c-light">One</p>
  <p class="bc-danger w-100 px-small c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ ac_center }}
</div>
``` html{{ ac_center }}```
{: .mb-medium}

{% capture ac_end %}
<div class="d-flex fw-wrap ac-end bc-dark" style="height: 9rem">
  <p class="bc-primary w-100 px-small c-light">One</p>
  <p class="bc-danger w-100 px-small c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ ac_end }}
</div>
``` html{{ ac_end }}```
{: .mb-medium}

{% capture ac_between %}
<div class="d-flex fw-wrap ac-between bc-dark" style="height: 9rem">
  <p class="bc-primary w-100 px-small c-light">One</p>
  <p class="bc-danger w-100 px-small c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ ac_between }}
</div>
``` html{{ ac_between }}```
{: .mb-medium}

{% capture ac_around %}
<div class="d-flex fw-wrap ac-around bc-dark" style="height: 9rem">
  <p class="bc-primary w-100 px-small c-light">One</p>
  <p class="bc-danger w-100 px-small c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ ac_around }}
</div>
``` html{{ ac_around }}```
{: .mb-medium}

{% capture ac_stretch %}
<div class="d-flex fw-wrap ac-stretch bc-dark" style="height: 9rem">
  <p class="bc-primary w-100 px-small c-light">One</p>
  <p class="bc-danger w-100 px-small c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ ac_stretch }}
</div>
``` html{{ ac_stretch }}```
{: .mb-medium}


## Align Items
Align item utilities are classes for setting the value of the [`align-items`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) property,
they are named using the format `.ai-{value}-{breakpoint}`. The value can be one of `start`,
`center`, `end`, `baseline` and `stretch`. See how they change flex items' alignment in the below examples.

{% capture ai_start %}
<div class="d-flex ai-start bc-dark" style="height: 6rem">
  <p class="bc-primary w-50 px-small c-light">One</p>
  <p class="p2 bc-danger w-50 px-small c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ ai_start }}
</div>
``` html{{ ai_start }}```
{: .mb-medium}

{% capture ai_center %}
<div class="d-flex ai-center bc-dark" style="height: 6rem">
  <p class="bc-primary w-50 px-small c-light">One</p>
  <p class="p2 bc-danger w-50 px-small c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ ai_center }}
</div>
``` html{{ ai_center }}```
{: .mb-medium}

{% capture ai_baseline %}
<div class="d-flex ai-baseline bc-dark" style="height: 6rem">
  <p class="bc-primary w-50 px-small c-light">One</p>
  <p class="p2 bc-danger w-50 px-small c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ ai_baseline }}
</div>
``` html{{ ai_baseline }}```
{: .mb-medium}

{% capture ai_end %}
<div class="d-flex ai-end bc-dark" style="height: 6rem">
  <p class="bc-primary w-50 px-small c-light">One</p>
  <p class="p2 bc-danger w-50 px-small c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ ai_end }}
</div>
``` html{{ ai_end }}```
{: .mb-medium}

{% capture ai_stretch %}
<div class="d-flex ai-stretch bc-dark" style="height: 6rem">
  <p class="bc-primary w-50 px-small c-light">One</p>
  <p class="p2 bc-danger w-50 px-small c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ ai_stretch }}
</div>
``` html{{ ai_stretch }}```


## Align Self
Align self utilities are classes for setting the value of the [`align-self`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self) propery,
they are like align items utilities, but only affect specfic flex items.

Align self utilities are named using the format: `.as-{value}-{breakpoint}`. The value can be
one of `start`, `center`, `end`, `baseline` and `stretch`. See how they change a flex item's
alignment in the below examples.

{% capture as_start %}
<div class="d-flex bc-dark" style="height: 6rem">
  <p class="as-start bc-primary w-50 px-small c-light">One</p>
  <p class="p2 bc-danger w-50 px-small c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ as_start }}
</div>
``` html{{ as_start }}```
{: .mb-medium}

{% capture as_center %}
<div class="d-flex as-center bc-dark" style="height: 6rem">
  <p class="as-center bc-primary w-50 px-small c-light">One</p>
  <p class="p2 bc-danger w-50 px-small c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ as_center }}
</div>
``` html{{ as_center }}```
{: .mb-medium}

{% capture as_baseline %}
<div class="d-flex as-baseline bc-dark" style="height: 6rem">
  <p class="as-baseline bc-primary w-50 px-small c-light">One</p>
  <p class="p2 bc-danger w-50 px-small c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ as_baseline }}
</div>
``` html{{ as_baseline }}```
{: .mb-medium}

{% capture as_end %}
<div class="d-flex as-end bc-dark" style="height: 6rem">
  <p class="as-end bc-primary w-50 px-small c-light">One</p>
  <p class="p2 bc-danger w-50 px-small c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ as_end }}
</div>
``` html{{ as_end }}```
{: .mb-medium}

{% capture as_stretch %}
<div class="d-flex as-stretch bc-dark" style="height: 6rem">
  <p class="as-stretch bc-primary w-50 px-small c-light">One</p>
  <p class="p2 bc-danger w-50 px-small c-light">Two</p>
</div>
{% endcapture %}
<div class="example">
  {{ as_stretch }}
</div>
``` html{{ as_stretch }}```

## Flex Order
Flex order utilities are classes for setting the value of the [`order`](https://developer.mozilla.org/en-US/docs/Web/CSS/order) property
to sort flex items. There're two kinds of order utilities in Luda, positive order utilities and negative order utilities.
Positive order utilities move flex items after unsorted items and negative order utilities move flex items
before unsorted items.

Positive order utilities are named using the format: `.od-{value}-{breakpoint}`, and negative order utilities are
named using the format: `.on-{value}-{breakpoint}`. The value can be from `1` to `6`. Let's preview how they change
flex items' orders in the below examples.

{% capture flex_order %}
<div class="d-flex fw-wrap bc-dark">
  <p class="od-6 w-100 px-small bc-primary c-light">.od-6</p>
  <p class="od-5 w-100 px-small bc-danger c-light">.od-5</p>
  <p class="od-4 w-100 px-small bc-primary c-light">.od-4</p>
  <p class="od-3 w-100 px-small bc-danger c-light">.od-3</p>
  <p class="od-2 w-100 px-small bc-primary c-light">.od-2</p>
  <p class="od-1 w-100 px-small bc-danger c-light">.od-1</p>
  <p class="on-1 w-100 px-small bc-primary c-light">.on-1</p>
  <p class="on-2 w-100 px-small bc-danger c-light">.on-2</p>
  <p class="on-3 w-100 px-small bc-primary c-light">.on-3</p>
  <p class="on-4 w-100 px-small bc-danger c-light">.on-4</p>
  <p class="on-5 w-100 px-small bc-primary c-light">.on-5</p>
  <p class="on-6 w-100 px-small bc-danger c-light">.on-6</p>  
</div>
{% endcapture %}
<div class="example">
  {{ flex_order }}
</div>
``` html{{ flex_order }}```


## Flex Grow and Flex Shrink
Flex grow utilities set the value of the [`flex-grow`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow) property, they are named using
the format: `.fg-{value}-{breakpoint}`, and the value can be `1` or `0`. The value `1` makes a flex item able to grow to fill the remaining space in its flex container.
Oppsite, the value `0` makes a flex item not able to grow.

Flex shrink utilities set the value of the [`flex-shrink`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink) property, they are named using
the format: `.fs-{value}-{breakpoint}`, and the value can be `0` or `1`. The value `1` makes a flex item able to shrink when the space in its flex container is not enough.
Oppsite, the value `0` makes a flex item not able to shrink.

The `.flex-auto-{breakpoint}` class makes a flex item able to grow and shrink.

Let's see the below examples for detail.

{% capture fg %}
<div class="d-flex bc-dark">
  <p class="fg-1 w-33 bc-primary c-light px-small">.fg-1.w-33</p>
  <p class="fg-0 w-33 bc-danger c-light px-small">.fg-0.w-33</p>
</div>
{% endcapture %}
<div class="example">
  {{ fg }}
</div>
``` html{{ fg }}```
{: .mb-medium}

{% capture fs %}
<div class="d-flex bc-dark">
  <p class="fs-1 w-66 bc-primary c-light px-small">.fs-1.w-66</p>
  <p class="fs-0 w-66 bc-danger c-light px-small">.fs-0.w-66</p>
</div>
{% endcapture %}
<div class="example">
  {{ fs }}
</div>
``` html{{ fs }}```
{: .mb-medium}

{% capture flex_auto %}
<div class="d-flex bc-dark">
  <p class="flex-auto w-66 bc-primary c-light px-small">.flex-auto.w-66</p>
  <p class="flex-auto w-66 bc-danger c-light px-small">.flex-auto.w-66</p>
</div>
{% endcapture %}
<div class="example">
  {{ flex_auto }}
</div>
``` html{{ flex_auto }}```