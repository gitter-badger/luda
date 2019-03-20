---
title: Overlay
description: Overlay can be used as the background of promotion dialogs to cover document viewport.
---



## Usage
The `.overlay` is the cover of document viewport, put elements in a nested `.overlay-body`.
See below example to know how to use overlay with toggle behaviour.
{% capture overlay %}
<button class="btn btn-primary" data-toggle-for="overlay">Active overlay</button>
<div class="overlay" data-toggle-target="overlay" data-toggle>
  <div class="overlay-body bc-light">
    Overlay content
  </div>
</div>
{% endcapture %}
{{ overlay }}
``` html{{ overlay }}```
{: .mt-small}



## Sass Variables

``` sass
$overlay-background: rgba($background-color-dark, $opacity-main) !default
```
The background of overlay. Value can be any valid background value.