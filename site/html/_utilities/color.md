---
title: Color
description: Use color utilities to change text and text decoration color of an element.
---

## Introduction

Color utilities are classes for setting the value of the [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color) property.
You can preview the colors in the below gallery. When you pick up a color class, consider
the meaning in your context but not only the appearance, since in different themes colors may be
changed but the meanings keep the same.

<div class="example d-flex fw-wrap mt-none">
  <p class="mr-small c-primary">.c-primary</p>
  <p class="mr-small c-secondary">.c-secondary</p>
  <p class="mr-small c-danger">.c-danger</p>
  <p class="mr-small c-dark">.c-dark</p>
  <p class="mr-small c-light"><span class="px-tiny bc-dark">.c-light</span></p>
  <p class="mr-small c-emphasis">.c-emphasis</p>
  <p class="mr-small c-main">.c-main</p>
  <p class="mr-small c-muted">.c-muted</p>
  <p class="mr-small c-inverse-emphasis"><span class="px-tiny bc-inverse-main">.c-inverse-emphasis</span></p>
  <p class="mr-small c-inverse-main"><span class="px-tiny bc-inverse-main">.c-inverse-main</span></p>
  <p class="mr-small c-inverse-muted"><span class="px-tiny bc-inverse-main">.c-inverse-muted</span></p>
</div>

``` html
<p class="c-primary"></p>
<p class="c-secondary"></p>
<p class="c-danger"></p>
<p class="c-dark"></p>
<p class="c-light"></p>
<p class="c-emphasis"></p>
<p class="c-main"></p>
<p class="c-muted"></p>
<p class="c-inverse-emphasis"></p>
<p class="c-inverse-main"></p>
<p class="c-inverse-muted"></p>
```


## Sass Variables
{: .mb-small}

{% include doc-sass-variable-color.md %}