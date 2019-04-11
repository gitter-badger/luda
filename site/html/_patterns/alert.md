---
title: Alert
description: Use alert to show state messages and combine toggle behavior to control display.
---


## Usage
Add the `.alert` class to a container, then add the class `.alert-content` to the element wraps the message.

{% capture alert %}
<div class="alert">
  <p class="alert-content">This is the default alert.</p>
</div>
{% endcapture %}
<div class="example">
  {{ alert }}
</div>
``` html{{ alert }}```


## Wrap a Toggle
A toggle can be wrapped in the `.alert` container to control the alert's display. Add the `.alert-action` to a button, and combine the toggle behavior like the below example.

{% capture toggle %}
<button class="btn btn-primary" data-toggle-for="alert_example">Show the alert</button>
<div class="alert" data-toggle-target="alert_example">
  <p class="alert-content">This is the default alert.</p>
  <button class="alert-action btn btn-ico btn-dark btn-small" data-toggle>
    <i class="ico ico-cross"></i>
  </button>
</div>
{% endcapture %}
<div class="example">
  {{ toggle }}
</div>
``` html{{ toggle }}```


## Color and Background
We can use color and background utility classes to change alert's appearance. See the below examples.
<div class="example">
  <div class="alert bc-primary mb-small">
    <p class="alert-content">This is a primary alert.</p>
    <button class="alert-action btn btn-primary btn-ico btn-small">
      <i class="ico ico-cross"></i>
    </button>
  </div>
  <div class="alert bc-secondary mb-small">
    <p class="alert-content c-dark">This is a secondary alert.</p>
    <button class="alert-action btn btn-secondary btn-ico btn-small">
      <i class="ico ico-cross"></i>
    </button>
  </div>
  <div class="alert bc-danger">
    <p class="alert-content">This is a danger alert.</p>
    <button class="alert-action btn btn-danger btn-ico btn-small">
      <i class="ico ico-cross"></i>
    </button>
  </div>
</div>
``` html
<div class="alert bc-primary">
  <p class="alert-content">This is a primary alert.</p>
  <button class="alert-action btn btn-primary btn-ico btn-small">
    <i class="ico ico-cross"></i>
  </button>
</div>
<div class="alert bc-secondary">
  <p class="alert-content c-dark">This is a secondary alert.</p>
  <button class="alert-action btn btn-secondary btn-ico btn-small">
    <i class="ico ico-cross"></i>
  </button>
</div>
<div class="alert bc-danger">
  <p class="alert-content">This is a danger alert.</p>
  <button class="alert-action btn btn-danger btn-ico btn-small">
    <i class="ico ico-cross"></i>
  </button>
</div>
```


## A More Complex Example

Finally, let's see a complex example.

<div class="alert bc-danger my-small">
  <div class="alert-content">
    <h5 class="c-light">Danger!</h5>
    <p>
      Poor performance detected. Track <a class="link-light" href="#" data-turbolinks="false">the issue</a>.
    </p>
  </div>
  <div class="alert-action">
    <button class="btn btn-small btn-light">Ignore!</button>
    <button class="btn btn-small btn-light ml-tiny">Log</button>
  </div>
</div>

``` html
<div class="alert bc-danger">
  <div class="alert-content">
    <h5 class="c-light">Danger!</h5>
    <p>Poor performance detected. Track <a class="link-light" href="#">the issue</a>.</p>
  </div>
  <div class="alert-action">
    <button class="btn btn-small btn-light">Ignore!</button>
    <button class="btn btn-small btn-light ml-tiny">Log</button>
  </div>
</div>
```



## Sass Variables

### Sizes
``` sass
$alert-padding-rem: $spacing-small-rem !default
```
{: .mb-small}

``` sass
$alert-action-margin-left-rem: $spacing-small-rem !default
```

### Others

``` sass
$alert-background: $background-color-dark !default
```
{: .mb-small}

``` sass
$alert-border-radius: $border-radius-main !default
```
{: .mb-small}

``` sass
$alert-box-shadow: null !default
```
{: .mb-small}

``` sass
$alert-content-color: $color-inverse-main !default
```