---
title: Modal
description: Modal is designed to show custom dialogs to communicate with users.
---


## Usage
Add the `.modal` class to a container, then wrap elements inside to create a modal,
see the below example. 
{% capture modal %}
<div class="modal">
  <h4>Confirm your operation</h4>
  <p>Do you really want to delete this? This operation is permanent!</p>
  <div class="btns-x btns-margin mt-small">
    <button class="btn btn-primary">Yes, delete it.</button>
    <button class="btn btn-secondary">No, don't delete.</button>
  </div>
</div>
{% endcapture %}
<div class="example">
  {{ modal }}
</div>
``` html{{ modal }}```


## Combine Toggle Behavior
In most cases, modal is used with the overlay element and the toggle behavior together.
Let's see the below example for detail.

{% capture modal_toggle %}
<button class="btn btn-danger" data-toggle-for="delete_confirmation">Delete</button>
<div class="overlay" data-toggle-target="delete_confirmation" data-toggle>
  <div class="overlay-body">
    <div class="modal" data-toggle-disabled>
      <h4>Do you really want to delete this?</h4>
      <p>This operation is permanent, password must be entered to confirm.</p>
      <div class="fm fm-text">
        <input type="password" placeholder="Enter password">
      </div>
      <div class="btns-x btns-margin mt-medium" data-toggle>
        <button class="btn btn-primary">Yes, delete it.</button>
        <button class="btn btn-secondary">No, don't delete.</button>
      </div>
    </div>
  </div>
</div>
{% endcapture %}
<div class="example">
  {{ modal_toggle }}
</div>
``` html{{ modal_toggle }}```



## Sass Variables

### Sizes
``` sass
$modal-padding-rem: $space-medium-rem !default
```
Description.
{: .mb-small}

``` sass
$modal-in-overlay-max-width-rem: 46.153846rem !default
```
Description.
{: .mb-small}

``` sass
$modal-in-overlay-min-width-rem: 24.615384rem !default
```
Description.

### Others
``` sass
$modal-background: $background-muted !default
```
Description.
{: .mb-small}

``` sass
$modal-border-radius: $border-radius-main !default
```
Description.
{: .mb-small}

``` sass
$modal-box-shadow: $box-shadow-normal !default
```
Description.