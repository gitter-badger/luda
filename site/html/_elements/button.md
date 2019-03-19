---
title: Button
description: Buttons can be created easly by Luda CSS calsses
  in various styles, sizes, actions and more.
---


## Button Styles



### Solid Button
Add the class `.btn.btn-<color>` to create solid buttons.
{% capture solid_button %}
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-dark">Dark</button>
<button class="btn btn-light">Light</button>
<button class="btn btn-danger">Danger</button>
{% endcapture %}
{{ solid_button }}
``` html{{ solid_button }}```



### Hollow Button
Add the class `.btn.btn-hollow-<color>` to create hollow buttons.
{% capture hollow_button %}
<button class="btn btn-hollow-primary">Primary</button>
<button class="btn btn-hollow-secondary">Secondary</button>
<button class="btn btn-hollow-dark">Dark</button>
<button class="btn btn-hollow-light">Light</button>
<button class="btn btn-hollow-danger">Danger</button>
{% endcapture %}
{{ hollow_button }}
``` html{{ hollow_button }}```



### Text Button
Add the class `.btn.btn-text-<color>` to create text buttons.
{% capture text_button %}
<button class="btn btn-text-primary">Primary</button>
<button class="btn btn-text-secondary">Secondary</button>
<button class="btn btn-text-dark">Dark</button>
<button class="btn btn-text-light">Light</button>
<button class="btn btn-text-danger">Danger</button>
{% endcapture %}
{{ text_button }}
``` html{{ text_button }}```



### Button Tags
Button classes can be added to other html tags to create a button.

<a data-turbolinks="false" href="#" class="btn btn-primary">Link</a>
<input type="submit" value="Submit" class="btn btn-hollow-primary">
<input type="reset" value="Reset" class="btn btn-primary">
<input type="button" value="Button" class="btn btn-hollow-primary">
``` html
<a href="#" class="btn btn-primary">Link</a>
<input type="submit" value="Submit" class="btn btn-hollow-primary">
<input type="reset" value="Reset" class="btn btn-primary">
<input type="button" value="Button" class="btn btn-hollow-primary">
```


## Functional Buttons



### Checkbox Button
Use the class `.btn-check` and other button style classes to create checkbox buttons.
{% capture checkbox_button %}
<div class="btn-check btn-hollow-primary">
  <input type="checkbox" name="favriout_films" value="kill_bill">
  <label>Kill Bill</label>
</div>
<div class="btn-check btn-hollow-primary">
  <input type="checkbox" name="favriout_films" value="django">
  <label>Django</label>
</div>
{% endcapture %}
{{ checkbox_button }}
``` html{{ checkbox_button }}```
{: .mt-small}



### Radio Button
Use the class `.btn-radio` and other button style classes to create radio buttons.
{% capture radio_button %}
<div class="btn-radio btn-hollow-primary">
  <input type="radio" name="decision" value="yes">
  <label>Yes, I agree.</label>
</div>
<div class="btn-radio btn-hollow-danger">
  <input type="radio" name="decision" value="no">
  <label>No, I disagree.</label>
</div>
{% endcapture %}
{{ radio_button }}
``` html{{ radio_button }}```
{: .mt-small}



### File Button
Use the class `.btn-file` and other button style classes to create file buttons.
{% capture file_button %}
<div class="btn-file btn-primary">
  <input type="file">
  <label>Upload a file</label>
</div>
<div class="btn-file btn-hollow-primary">
  <input multiple type="file">
  <label>Upload files</label>
</div>
{% endcapture %}
{{ file_button }}
``` html{{ file_button }}```
{: .mt-small}



## Button States



### Active
Add the class `.btn-active` to set button state to active.
{% capture active_button %}
<button class="btn btn-hollow-primary btn-active">Active button</button>
<div class="btn-check btn-hollow-primary btn-active">
  <input type="check">
  <label>Active checkbox button</label>
</div>
<div class="btn-radio btn-hollow-primary btn-active">
  <input type="radio">
  <label>Actived radio button</label>
</div>
<div class="btn-file btn-hollow-primary btn-active">
  <input type="file">
  <label>Actived file button</label>
</div>
{% endcapture %}
{{ active_button }}
``` html{{ active_button }}```
{: .mt-small}


### Disabled
Add the attribute `disabled` to disable buttons.
{% capture disabled_button %}
<button class="btn btn-hollow-primary" disabled>Disabled button</button>
<div class="btn-check btn-hollow-primary">
  <input disabled type="checkbox">
  <label>Disabled checkbox button</label>
</div>
<div class="btn-radio btn-hollow-primary">
  <input disabled type="radio">
  <label>Disabled radio button</label>
</div>
<div class="btn-file btn-hollow-primary">
  <input disabled type="file">
  <label>Disabled file button</label>
</div>
{% endcapture %}
{{ disabled_button }}
``` html{{ disabled_button }}```
{: .mt-small}


### Checked
Add the attribute `checked` to checkbox button and radio button to set checked state.
{% capture checked_button %}
<div class="btn-check btn-hollow-primary">
  <input checked type="checkbox">
  <label>Checked checkbox button</label>
</div>
<div class="btn-radio btn-hollow-primary">
  <input checked type="radio">
  <label>Checked radio button</label>
</div>
{% endcapture %}
{{ checked_button }}
``` html{{ checked_button }}```
{: .mt-small}


### Readonly
Add the attribute `data-readonly` to checkbox button and radio button to set readonly state.
{% capture readonly_button %}
<div class="btn-check btn-hollow-primary" data-readonly>
  <input type="checkbox" data-readonly>
  <label>Readonly checkbox button</label>
</div>
<div class="btn-radio btn-hollow-primary" data-readonly>
  <input type="radio" data-readonly>
  <label>Readonly radio button</label>
</div>
{% endcapture %}
{{ readonly_button }}
``` html{{ readonly_button }}```
{: .mt-small}



## Style Modifiers



### Small{% include modifier.html %}
Add the class `.btn-small` to make small buttons.
{% capture small_button %}
<button class="btn btn-primary btn-small">Small solid button</button>
<button class="btn btn-hollow-primary btn-small">Small hollow button</button>
<button class="btn btn-text-primary btn-small">Small text button</button>
<div class="btn-check btn-hollow-primary btn-small">
  <input type="checkbox">
  <label>Small checkbox button</label>
</div>
<div class="btn-radio btn-hollow-primary btn-small">
  <input type="radio">
  <label>Small radio button</label>
</div>
<div class="btn-file btn-hollow-primary btn-small">
  <input type="file">
  <label>Small file button</label>
</div>
{% endcapture %}
{{ small_button }}
``` html{{ small_button }}```
{: .mt-small}



### Large{% include modifier.html %}
Add the class `.btn-large` to make large buttons.
{% capture large_button %}
<button class="btn btn-primary btn-large">Large solid button</button>
<button class="btn btn-hollow-primary btn-large">Large hollow button</button>
<button class="btn btn-text-primary btn-large">Large text button</button>
<div class="btn-check btn-hollow-primary btn-large">
  <input type="checkbox">
  <label>Large checkbox button</label>
</div>
<div class="btn-radio btn-hollow-primary btn-large">
  <input type="radio">
  <label>Large radio button</label>
</div>
<div class="btn-file btn-hollow-primary btn-large">
  <input type="file">
  <label>Large file button</label>
</div>
{% endcapture %}
{{ large_button }}
``` html{{ large_button }}```
{: .mt-small}



### Fluid{% include modifier.html %}
Add the class `.btn-fluid` to make fluid buttons.
{% capture fluid_button %}
<button class="btn btn-primary btn-fluid">Fluid solid button</button>
<button class="btn btn-hollow-primary btn-fluid">Fluid hollow button</button>
<button class="btn btn-text-primary btn-fluid">Fluid text button</button>
<div class="btn-check btn-hollow-primary btn-fluid">
  <input type="checkbox">
  <label>Fluid checkbox button</label>
</div>
<div class="btn-radio btn-hollow-secondary btn-fluid">
  <input type="radio">
  <label>Fluid radio button</label>
</div>
<div class="btn-file btn-primary btn-fluid">
  <input type="file">
  <label>Fluid file button</label>
</div>
{% endcapture %}
{{ fluid_button }}
``` html{{ fluid_button }}```
{: .mt-small}



## Sass Variables

``` sass
$button-height-rem: 3rem !default
```
Description.
{: .mb-small}

``` sass
$button-small-height-rem: 2rem !default
```
Description.
{: .mb-small}

``` sass
$button-large-height-rem: 4rem !default
```
Description.
{: .mb-small}

``` sass
$button-helvertical-padding-em: strip-unit($space-small-rem) * 1em !default
```
Description.
{: .mb-small}

``` sass
$button-typography-size-level: 5 !default
```
Description.
{: .mb-small}

``` sass
$button-small-typography-size-level: 6 !default
```
Description.
{: .mb-small}

``` sass
$button-large-typography-size-level: 4 !default
```
Description.
{: .mb-small}

``` sass
$button-border-width: 1px !default
```
Description.
{: .mb-small}

``` sass
$button-border-style: solid !default
```
Description.
{: .mb-small}

``` sass
$button-border-radius: $border-radius-main !default
```
Description.
{: .mb-small}

``` sass
$button-primary-color: $color-inverse-main !default
```
Description.
{: .mb-small}

``` sass
$button-primary-hover-color: null !default
```
Description.
{: .mb-small}

``` sass
$button-primary-active-color: null !default
```
Description.
{: .mb-small}

``` sass
$button-primary-background: $background-color-primary !default
```
Description.
{: .mb-small}

``` sass
$button-primary-hover-background: darken($background-color-primary, 2%) !default
```
Description.
{: .mb-small}

``` sass
$button-primary-active-background: darken($background-color-primary, 4%) !default
```
Description.
{: .mb-small}

``` sass
$button-primary-border-color: null !default
```
Description.
{: .mb-small}

``` sass
$button-primary-hover-border-color: null !default
```
Description.
{: .mb-small}

``` sass
$button-primary-active-border-color: null !default
```
Description.
{: .mb-small}

``` sass
$button-primary-box-shadow: null !default
```
Description.
{: .mb-small}

``` sass
$button-primary-hover-box-shadow: null !default
```
Description.
{: .mb-small}

``` sass
$button-primary-active-box-shadow: null !default
```
Description.
{: .mb-small}

``` sass
$button-secondary-color: $color-main !default
```
Description.
{: .mb-small}

``` sass
$button-secondary-hover-color: null !default
```
Description.
{: .mb-small}

``` sass
$button-secondary-active-color: null !default
```
Description.
{: .mb-small}

``` sass
$button-secondary-background: $background-color-secondary !default
```
Description.
{: .mb-small}

``` sass
$button-secondary-hover-background: darken($background-color-secondary, 2%) !default
```
Description.
{: .mb-small}

``` sass
$button-secondary-active-background: darken($background-color-secondary, 4%) !default
```
Description.
{: .mb-small}

``` sass
$button-secondary-border-color: null !default
```
Description.
{: .mb-small}

``` sass
$button-secondary-hover-border-color: null !default
```
Description.
{: .mb-small}

``` sass
$button-secondary-active-border-color: null !default
```
Description.
{: .mb-small}

``` sass
$button-secondary-box-shadow: null !default
```
Description.
{: .mb-small}

``` sass
$button-secondary-hover-box-shadow: null !default
```
Description.
{: .mb-small}

``` sass
$button-secondary-active-box-shadow: null !default
```
Description.
{: .mb-small}

``` sass
$button-danger-color: $color-inverse-main !default
```
Description.
{: .mb-small}

``` sass
$button-danger-hover-color: null !default
```
Description.
{: .mb-small}

``` sass
$button-danger-active-color: null !default
```
Description.
{: .mb-small}

``` sass
$button-danger-background: $background-color-danger !default
```
Description.
{: .mb-small}

``` sass
$button-danger-hover-background: darken($background-color-danger, 2%) !default
```
Description.
{: .mb-small}

``` sass
$button-danger-active-background: darken($background-color-danger, 4%) !default
```
Description.
{: .mb-small}

``` sass
$button-danger-border-color: null !default
```
Description.
{: .mb-small}

``` sass
$button-danger-hover-border-color: null !default
```
Description.
{: .mb-small}

``` sass
$button-danger-active-border-color: null !default
```
Description.
{: .mb-small}

``` sass
$button-danger-box-shadow: null !default
```
Description.
{: .mb-small}

``` sass
$button-danger-hover-box-shadow: null !default
```
Description.
{: .mb-small}

``` sass
$button-danger-active-box-shadow: null !default
```
Description.
{: .mb-small}


``` sass
$button-dark-color: $color-inverse-main !default
```
Description.
{: .mb-small}

``` sass
$button-dark-hover-color: null !default
```
Description.
{: .mb-small}

``` sass
$button-dark-active-color: null !default
```
Description.
{: .mb-small}

``` sass
$button-dark-background: $background-color-dark !default
```
Description.
{: .mb-small}

``` sass
$button-dark-hover-background: darken($background-color-dark, 2%) !default
```
Description.
{: .mb-small}

``` sass
$button-dark-active-background: darken($background-color-dark, 4%) !default
```
Description.
{: .mb-small}

``` sass
$button-dark-border-color: null !default
```
Description.
{: .mb-small}

``` sass
$button-dark-hover-border-color: null !default
```
Description.
{: .mb-small}

``` sass
$button-dark-active-border-color: null !default
```
Description.
{: .mb-small}

``` sass
$button-dark-box-shadow: null !default
```
Description.
{: .mb-small}

``` sass
$button-dark-hover-box-shadow: null !default
```
Description.
{: .mb-small}

``` sass
$button-dark-active-box-shadow: null !default
```
Description.
{: .mb-small}

``` sass
$button-light-color: $color-main !default
```
Description.
{: .mb-small}

``` sass
$button-light-hover-color: null !default
```
Description.
{: .mb-small}

``` sass
$button-light-active-color: null !default
```
Description.
{: .mb-small}

``` sass
$button-light-background: $background-color-light !default
```
Description.
{: .mb-small}

``` sass
$button-light-hover-background: darken($background-color-light, 2%) !default
```
Description.
{: .mb-small}

``` sass
$button-light-active-background: darken($background-color-light, 4%) !default
```
Description.
{: .mb-small}

``` sass
$button-light-border-color: null !default
```
Description.
{: .mb-small}

``` sass
$button-light-hover-border-color: null !default
```
Description.
{: .mb-small}

``` sass
$button-light-active-border-color: null !default
```
Description.
{: .mb-small}

``` sass
$button-light-box-shadow: null !default
```
Description.
{: .mb-small}

``` sass
$button-light-hover-box-shadow: null !default
```
Description.
{: .mb-small}

``` sass
$button-light-active-box-shadow: null !default
```
Description.
{: .mb-small}


``` sass
$button-hollow-primary-color: $color-primary !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-primary-hover-color: existing($button-primary-hover-color, $button-primary-color) !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-primary-active-color: existing($button-primary-active-color, $button-hollow-primary-hover-color) !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-primary-hover-background: existing($button-primary-hover-background, $button-primary-background) !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-primary-active-background: existing($button-primary-active-background, $button-hollow-primary-hover-background) !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-primary-border-color: null !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-primary-hover-border-color: existing($button-primary-hover-border-color, $button-primary-border-color, transparent) !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-primary-active-border-color: existing($button-primary-active-border-color, $button-hollow-primary-hover-border-color) !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-primary-box-shadow: $button-primary-box-shadow !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-primary-hover-box-shadow: $button-primary-hover-box-shadow !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-primary-active-box-shadow: $button-primary-active-box-shadow !default
```
Description.
{: .mb-small}


``` sass
$button-hollow-secondary-color: $color-main !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-secondary-hover-color: existing($button-secondary-hover-color, $button-secondary-color) !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-secondary-active-color: existing($button-secondary-active-color, $button-hollow-secondary-hover-color) !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-secondary-hover-background: existing($button-secondary-hover-background, $button-secondary-background) !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-secondary-active-background: existing($button-secondary-active-background, $button-hollow-secondary-hover-background) !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-secondary-border-color: $line-color-secondary !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-secondary-hover-border-color: existing($button-secondary-hover-border-color, $button-secondary-border-color, transparent) !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-secondary-active-border-color: existing($button-secondary-active-border-color, $button-hollow-secondary-hover-border-color) !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-secondary-box-shadow: $button-secondary-box-shadow !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-secondary-hover-box-shadow: $button-secondary-hover-box-shadow !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-secondary-active-box-shadow: $button-secondary-active-box-shadow !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-danger-color: $color-danger !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-danger-hover-color: existing($button-danger-hover-color, $button-danger-color) !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-danger-active-color: existing($button-danger-active-color, $button-hollow-danger-hover-color) !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-danger-hover-background: existing($button-danger-hover-background, $button-danger-background) !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-danger-active-background: existing($button-danger-active-background, $button-hollow-danger-hover-background) !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-danger-border-color: null !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-danger-hover-border-color: existing($button-danger-hover-border-color, $button-danger-border-color, transparent) !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-danger-active-border-color: existing($button-danger-active-border-color, $button-hollow-danger-hover-border-color) !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-danger-box-shadow: $button-danger-box-shadow !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-danger-hover-box-shadow: $button-danger-hover-box-shadow !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-danger-active-box-shadow: $button-danger-active-box-shadow !default
```
Description.
{: .mb-small}


``` sass
$button-hollow-dark-color: $color-dark !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-dark-hover-color: existing($button-dark-hover-color, $button-dark-color) !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-dark-active-color: existing($button-dark-active-color, $button-hollow-dark-hover-color) !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-dark-hover-background: existing($button-dark-hover-background, $button-dark-background) !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-dark-active-background: existing($button-dark-active-background, $button-hollow-dark-hover-background) !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-dark-border-color: null !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-dark-hover-border-color: existing($button-dark-hover-border-color, $button-dark-border-color, transparent) !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-dark-active-border-color: existing($button-dark-active-border-color, $button-hollow-dark-hover-border-color) !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-dark-box-shadow: $button-dark-box-shadow !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-dark-hover-box-shadow: $button-dark-hover-box-shadow !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-dark-active-box-shadow: $button-dark-active-box-shadow !default
```
Description.
{: .mb-small}


``` sass
$button-hollow-light-color: $color-light !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-light-hover-color: existing($button-light-hover-color, $button-light-color) !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-light-active-color: existing($button-light-active-color, $button-hollow-light-hover-color) !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-light-hover-background: existing($button-light-hover-background, $button-light-background) !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-light-active-background: existing($button-light-active-background, $button-hollow-light-hover-background) !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-light-border-color: null !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-light-hover-border-color: existing($button-light-hover-border-color, $button-light-border-color, transparent) !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-light-active-border-color: existing($button-light-active-border-color, $button-hollow-light-hover-border-color) !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-light-box-shadow: $button-light-box-shadow !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-light-hover-box-shadow: $button-light-hover-box-shadow !default
```
Description.
{: .mb-small}

``` sass
$button-hollow-light-active-box-shadow: $button-light-active-box-shadow !default
```
Description.
{: .mb-small}

``` sass
$button-text-primary-color: $color-primary !default
```
Description.
{: .mb-small}

``` sass
$button-text-primary-hover-color: darken($color-primary, 10%) !default
```
Description.
{: .mb-small}

``` sass
$button-text-primary-active-color: $button-text-primary-hover-color !default
```
Description.
{: .mb-small}

``` sass
$button-text-primary-text-shadow: null !default
```
Description.
{: .mb-small}

``` sass
$button-text-primary-hover-text-shadow: null !default
```
Description.
{: .mb-small}

``` sass
$button-text-primary-active-text-shadow: null !default
```
Description.
{: .mb-small}


``` sass
$button-text-secondary-color: $color-secondary !default
```
Description.
{: .mb-small}

``` sass
$button-text-secondary-hover-color: darken($color-secondary, 10%) !default
```
Description.
{: .mb-small}

``` sass
$button-text-secondary-active-color: $button-text-secondary-hover-color !default
```
Description.
{: .mb-small}

``` sass
$button-text-secondary-text-shadow: null !default
```
Description.
{: .mb-small}

``` sass
$button-text-secondary-hover-text-shadow: null !default
```
Description.
{: .mb-small}

``` sass
$button-text-secondary-active-text-shadow: null !default
```
Description.
{: .mb-small}

``` sass
$button-text-danger-color: $color-danger !default
```
Description.
{: .mb-small}

``` sass
$button-text-danger-hover-color: darken($color-danger, 5%) !default
```
Description.
{: .mb-small}

``` sass
$button-text-danger-active-color: $button-text-danger-hover-color !default
```
Description.
{: .mb-small}

``` sass
$button-text-danger-text-shadow: null !default
```
Description.
{: .mb-small}

``` sass
$button-text-danger-hover-text-shadow: null !default
```
Description.
{: .mb-small}

``` sass
$button-text-danger-active-text-shadow: null !default
```
Description.
{: .mb-small}

``` sass
$button-text-dark-color: lighten($color-dark, 10%) !default
```
Description.
{: .mb-small}

``` sass
$button-text-dark-hover-color: $color-dark !default
```
Description.
{: .mb-small}

``` sass
$button-text-dark-active-color: $button-text-dark-hover-color !default
```
Description.
{: .mb-small}

``` sass
$button-text-dark-text-shadow: null !default
```
Description.
{: .mb-small}

``` sass
$button-text-dark-hover-text-shadow: null !default
```
Description.
{: .mb-small}

``` sass
$button-text-dark-active-text-shadow: null !default
```
Description.
{: .mb-small}


``` sass
$button-text-light-color: rgba($color-light, $opacity-muted) !default
```
Description.
{: .mb-small}

``` sass
$button-text-light-hover-color: $color-light !default
```
Description.
{: .mb-small}

``` sass
$button-text-light-active-color: $button-text-light-hover-color !default
```
Description.
{: .mb-small}

``` sass
$button-text-light-text-shadow: null !default
```
Description.
{: .mb-small}

``` sass
$button-text-light-hover-text-shadow: null !default
```
Description.
{: .mb-small}

``` sass
$button-text-light-active-text-shadow: null !default
```