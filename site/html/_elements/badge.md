---
title: Badge
description: Badge is designed to show short text in notifications.
---

## Badge Styles

### Badge
Badge is simple to create, just add the `.badge` class to an inline element. Let's see below example.
{% capture badge %}
<p>
  You have new messages <span class="badge">8</span>
</p>
{% endcapture %}
{{ badge }}
``` html{{ badge }}```

### Align to Baseline
If you want a badge aligned to text baseline, replace the `.badge` class with `.badge-baseline`. Below example shows a badge nested in a button.
{% capture badge_baseline %}
<button class="btn btn-hollow-primary">
  Messages <span class="badge-baseline">22</span>
</button>
{% endcapture %}
<div class="button-example">
  {{ badge_baseline }}
</div>
``` html{{ badge_baseline }}```


### Color and Background
We can change color and background of badges with color and background utilities.
{% capture badge_color_and_background %}
<button class="btn btn-dark">
  Messages <span class="badge-baseline c-dark bc-light">99+</span>
</button>
{% endcapture %}
<div class="button-example">
  {{ badge_color_and_background }}
</div>
``` html{{ badge_color_and_background }}```

## Sass Variables

### Sizes
``` sass
$badge-offset-top-em: -0.4em !default
```

``` sass
$badge-offset-left-em: 0.4em !default
```

``` sass
$badge-height-em: 1.2em !default
```

``` sass
$badge-padding-em: 0.4em !default
```

### Others
``` sass
$badge-background: $background-color-primary !default
```

``` sass
$badge-color: $color-inverse-emphasis !default
```