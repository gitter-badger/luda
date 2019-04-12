---
title: Toggle
description: Quickly show or hide elements without any Javascript codes. 
---


## Introduction
It's a very common situation to show or hide an element dynamically in front-end development. Toggle behavior helps you to do this without having to write Javascript codes.

Let's see the below examples for clarification.

## Examples
{% capture toggle %}
<button class="btn btn-primary" data-toggle-for="toggle_example">Click to toggle</button>
<div class="bc-dark p-small" data-toggle-target="toggle_example">
  <p class="c-light">Hello Luda!</p>
</div>
{% endcapture %}
<div class="example">
  {{ toggle }}
</div>
``` html{{ toggle }}```
In this example, we use the `data-toggle-target` attribute to define a target, and use the `data-toggle-for` attribute to define a trigger. The values of these two attributes must be the same.

Let's see another example.

{% capture toggle_inside %}
<button class="btn btn-primary" data-toggle-for="toggle_example2">Click to toggle</button>
<div class="bc-dark p-small" data-toggle-target="toggle_example2" data-toggle>
  <button class="btn btn-primary">Click to hide</button>
  <button class="btn btn-light" data-toggle-disabled>Toggle behavior disabled</button>
</div>
{% endcapture %}
<div class="example">
  {{ toggle_inside }}
</div>
``` html{{ toggle_inside }}```
In this example, we add the attribute `data-toggle` to the target element to make it an anonymous trigger for itself. We use the attribute `data-toggle-disabled` to partially disable the behavior in the target, so when the disabled area clicked, the target will not be hided.

## HTML Attributes

### data-toggle-target="name"
``` html
<div data-toggle-target="demo"></div>
```
Use this attribute to define a target.

### data-toggle-for="name"
``` html
<div data-toggle-for="demo"></div>
```
Use this attribute to define a trigger, the value must be the same as the value of the target's `data-toggle-target` attribute.

### data-toggle
``` html
<div data-toggle-for="demo" data-toggle></div>
```
Use this attribute to define an anonymous trigger wrapped in the target or make the target an anonymous trigger fot itself. 

### data-toggle-disabled
``` html
<div data-toggle-for="demo" data-toggle>
  <div data-toggle-disabled></div>
</div>
```
Use this attribute to disable the behavior partially in an anonymous trigger.



## Javascript Methods

### luda.toggle.activate(name | element)

``` javascript
luda.toggle.activate('demo')
```
Use this method to show a target through the value of its `data-toggle-target` attribute.

``` javascript
let $myTarget = luda.$child('[data-toggle-target="demo"]')
luda.toggle.activate($myTarget)
```
A target can also be activated through its element instance.

### luda.toggle.deactivate(name | element)
``` javascript
luda.toggle.deactivate('demo')
```
Use this method to hide a target through the value of its `data-toggle-target` attribute.

``` javascript
let $myTarget = luda.$child('[data-toggle-target="demo"]')
luda.toggle.deactivate($myTarget)
```
A target can also be deactivated through its element instance.

### luda.toggle.toggle(name | element)
``` javascript
luda.toggle.toggle('demo')
```
Use this method to toggle a target through the value of its `data-toggle-target` attribute.

``` javascript
let $myTarget = luda.$child('[data-toggle-target="demo"]')
luda.toggle.toggle($myTarget)
```
A target can also be toggled through its element instance.



## Dom Events

### luda:toggle:activated
``` javascript
luda.on('luda:toggle:activated', '#myTarget', function(event){
  let $myTarget = this
})
```
Triggered after the `.toggle-active` class added to the target.

### luda:toggle:deactivated
``` javascript
luda.on('luda:toggle:activated', '#myTarget', function(event){
  let $myTarget = this
})
```
Triggered after the `.toggle-active` class removed from the target.