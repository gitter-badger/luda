---
title: Alert
description: Use alert to show state messages and combine toggle behaviour to control display.
---


## Usage
Use `.alert` and `.alert-content` to show messages.
{% capture alert %}
<div class="alert">
  <p class="alert-content">This is the default alert.</p>
</div>
{% endcapture %}
{{ alert }}
``` html{{ alert }}```
{: .mt-small}


## Combine Toggle Behaviour
Use `.alert-action` to show actions and combine toggle behaviour.
{% capture toggle %}
<button class="btn btn-primary" data-toggle-for="alert_example">Show alert</button>
<div class="alert" data-toggle-target="alert_example">
  <p class="alert-content">This is the default alert.</p>
  <button class="alert-action btn btn-ico btn-dark btn-small" data-toggle>
    <i class="ico ico-cross"></i>
  </button>
</div>
{% endcapture %}
{{ toggle }}
``` html{{ toggle }}```
{: .mt-small}


## Color and Background
Use color and background utiltities to change alert style.
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
<div class="alert bc-danger mb-small">
  <p class="alert-content">This is a danger alert.</p>
  <button class="alert-action btn btn-danger btn-ico btn-small">
    <i class="ico ico-cross"></i>
  </button>
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
$alert-padding-rem: $space-small-rem !default
```
Description.
{: .mb-small}

``` sass
$alert-action-margin-left-rem: $space-small-rem !default
```
Description.

### Others

``` sass
$alert-background: $background-color-dark !default
```
Description.
{: .mb-small}

``` sass
$alert-border-radius: 0 !default
```
Description.
{: .mb-small}

``` sass
$alert-box-shadow: null !default
```
Description.
{: .mb-small}

``` sass
$alert-content-color: $color-inverse-main !default
```
Description.
{: .mb-small}