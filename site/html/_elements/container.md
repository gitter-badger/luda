---
title: Container
description: Use container to add surrounding paddings and position content at the horizontal center.
---



## Usage
The container is just a simple `<div>`, it has surround paddings and a max width limit. It will be positioned at the horizontal center when available horizontal space is larger then the max width limit. 
{% capture container %}
<div class="container bc-primary">
  <div class="bc-dark c-light ta-center">Content in container</div>
</div>
{% endcapture %}
<div class="example">
  {{ container }}
</div>
``` html{{ container }}```



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