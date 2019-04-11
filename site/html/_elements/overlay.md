---
title: Overlay
description: Overlay can be used as the background of promotion dialogs to cover the document viewport.
---



## Usage
Use the class `.overlay` to create a cover of the document viewport, and used the class `.overlay-body` to wrap the content. Let's see an example in action.
{% capture overlay %}
<!-- Create a toggle trigger to active the overlay -->
<button class="btn btn-primary" data-toggle-for="overlay">Active the overlay</button>
<!-- The document viewport cover -->
<div class="overlay" data-toggle-target="overlay" data-toggle>
  <!-- The content in the overlay -->
  <div class="overlay-body bc-light">
    Overlay content
  </div>
</div>
{% endcapture %}
<div class="example">
  {{ overlay }}
</div>
``` html{{ overlay }}```



## Sass Variables
{: .mb-small}

``` sass
$overlay-background: rgba($background-color-dark, $opacity-main) !default
```