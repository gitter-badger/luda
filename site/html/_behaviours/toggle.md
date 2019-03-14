---
title: Toggle
description: Toggle is a convinence behaviour to show or hide a html element. Toggle behaviour can be controlled through html attributes or JavaScript methods.
---

## Examples

{% capture toggle %}
<button class="btn btn-primary" data-toggle-for="toggle_example">Click to toggle</button>
<div class="bc-dark p-small" data-toggle-target="toggle_example" data-toggle>
  <button class="btn btn-primary">Click to hide</button>
  <button class="btn btn-light" data-toggle-disabled>Toggle behaviour disabled</button>
</div>
{% endcapture %}

{{ toggle }}
``` html{{ toggle }}```
{: .mt-small}

## HTML Attributes

``` html
data-toggle-target="target_name"
```
Sets a toggle target with a name.
{: .mb-small}

``` html
data-toggle-for="target_name"
```
Sets an outside toggler for named toggle targets.
{: .mb-small}

``` html
data-toggle
```
Sets an inside toggle in a toggle target.
{: .mb-small}


``` html
data-toggle-disabled
```
Disable toggle behaviour in an inside toggler.


## Javascript Methods

``` javascript
luda.toggle.active(param)
```
Shows a toggle target. Param can be a toggle target name or toggle target element.
{: .mb-small}


``` javascript
luda.toggle.deactive(param)
```
Hides a toggle target. Param can be a toggle target name or toggle target element.
{: .mb-small}


``` javascript
luda.toggle.toggle(param)
```
Shows or hides a toggle target depending on its state. Param can be a toggle target name or toggle target element.


## Dom Events

``` javascript
luda:toggle:actived
```
Triggered and bubbled after a toggle target showed.
{: .mb-small}


``` javascript
luda:toggle:deactived
```
Triggered and bubbled after a toggle target hided.