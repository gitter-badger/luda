---
title: Badge
description: Badge is designed to show short text in notifications.
---

## Badge Styles

### Badge
Add the `.badge` class to create a badge.
{% capture badge %}
<p>You have new messages<span class="badge">8</span></p>
{% endcapture %}
{{ badge }}
``` html{{ badge }}```

### Baseline Badge
Add the `.badge-baseline` class to create a baseline badge.
{% capture badge_baseline %}
<button class="btn btn-hollow-primary">Messages<span class="badge-baseline">22</span></button>
{% endcapture %}
{{ badge_baseline }}
``` html{{ badge_baseline }}```


### Color and Background
Use utilities to change badge color and background.
{% capture badge_color_and_background %}
<button class="btn btn-dark">Messages<span class="badge-baseline c-dark bc-light">99+</span></button>
{% endcapture %}
{{ badge_color_and_background }}
``` html{{ badge_color_and_background }}```


## Sass Variables

``` sass
$badge-offset-top-em: -0.4em !default
```
Offset top distance of badge, value should be number.
{: .mb-small}

``` sass
$badge-offset-left-em: 0.4em !default
```
Offset left distance of badge, value should be number.
{: .mb-small}

``` sass
$badge-height-em: 1.2em !default
```
Badge height, value should be number.
{: .mb-small}

``` sass
$badge-padding-em: 0.4em !default
```
Badge padding, should be number.
{: .mb-small}

``` sass
$badge-background: $background-color-primary !default
```
Badge background, can be any valid background value.
{: .mb-small}

``` sass
$badge-color: $color-inverse-emphasis !default
```
Badge color, can be any valid color value.