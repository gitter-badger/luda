---
title: Readonly
description: Prevent elements from responding to user actions.
---


## Introduction
The native `readonly` attribute is for form control only, it makes a form element not editable. But a native readonly form element is still focusable, and what's worse, some browsers even show a editable text cursor.

The `data-readonly` attribute in Luda is for solving such problems. A form element has the `data-readonly` attribute is not focusable nor editable. And we can even use this attribute to prevent other elements from responding to user actions in some situations.

Let's see the below examples.

## Examples

### Form
{% capture readonly %}
<div class="fm fm-text" data-readonly>
  <input data-readonly placeholder="A readonly text input">
</div>
{% endcapture %}
<div class="example">
  {{ readonly }}
</div>
``` html{{ readonly }}```
Use the `data-readonly` attribute to prevent a form element from being edited.

### Link
{% capture link %}
<a href="#" data-readonly>A disabled link</a>
{% endcapture %}
<p class="example">
  {{ link }}
</p>
``` html{{ link }}```
Use the `data-readonly` attribute to disable a link.


## Dynamic Control

In Luda, we use the `[data-readonly]` selector to detect readonly elements. If you want to remove the readonly state dynamically in Javascript, don't remove the `data-readonly` attribute, set its value to `false` instead.

``` javascript
luda.$child('#my-readonly-element').setAttribute('data-readonly', false)
```