---
title: Container
description: Use container to center elements with extra surround paddings.
---



## Usage
{% capture container %}
<div class="container bc-primary">
  <div class="bc-dark c-light ta-center">Content in container</div>
</div>
{% endcapture %}
{{ container }}
``` html{{ container }}```
{: .mt-small}



## Sass Variables

``` sass
$container-max-width-rem: 105.076923rem !default
```
Description.
{: .mb-small}

``` sass
$container-padding-rem: $space-medium-rem $space-small-rem !default
```
Description.