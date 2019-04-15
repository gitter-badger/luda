---
title: Dropdown
description: Dropdown is designed to show a toggleable menu or a nested tree. Pointer events and keyboard events are both well supported for control.
---


## Absolute Dropdown
The trigger of an absolute dropdown is positioned in the normal document flow, but the menu is not. 

### Usage
Add the class `.dropdown-absolute` to a container, then wrap a button element as the trigger, a button group as the dropdown menu. Let's see the below example for detail.

{% capture absolute_dropdown %}
<div class="dropdown-absolute">
  <button class="btn btn-primary btn-ico-right">
    Dropdown <i class="ico ico-down"></i>
  </button>
  <div class="dropdown-menu">
    <div class="dropdown-items">
      <div class="btns-y">
        <button class="btn btn-primary">One</button>
        <button class="btn btn-primary">Two</button>
        <button class="btn btn-primary">Three</button>        
      </div>
    </div>
  </div>
</div>
{% endcapture %}
<div class="example">
  {{ absolute_dropdown }}
</div>
``` html{{ absolute_dropdown }}```


### Style Modifiers

#### Top{% include modifier.html %}
Add the class `.dropdown-top` to an absolute dropdown to position its menu on the top of its trigger.

{% capture top %}
<div class="dropdown-absolute dropdown-top">
  <button class="btn btn-primary btn-ico-right">
    Dropdown <i class="ico ico-up"></i>
  </button>
  <div class="dropdown-menu">
    <div class="dropdown-items">
      <div class="btns-y">
        <button class="btn btn-primary">One</button>
        <button class="btn btn-primary">Two</button>
        <button class="btn btn-primary">Three</button>        
      </div>
    </div>
  </div>
</div>
{% endcapture %}
<div class="example">
  {{ top }}
</div>
``` html{{ top }}```


#### Right{% include modifier.html %}
Add the class `.dropdown-right` to an absolute dropdown to position its menu on the right of its trigger.

{% capture right %}
<div class="dropdown-absolute dropdown-right">
  <button class="btn btn-primary btn-ico-right">
    Dropdown <i class="ico ico-right"></i>
  </button>
  <div class="dropdown-menu">
    <div class="dropdown-items">
      <div class="btns-y">
        <button class="btn btn-primary">One</button>
        <button class="btn btn-primary">Two</button>
        <button class="btn btn-primary">Three</button>        
      </div>
    </div>
  </div>
</div>
{% endcapture %}
<div class="example">
  {{ right }}
</div>
``` html{{ right }}```


#### Left{% include modifier.html %}
Add the class `.dropdown-left` to an absolute dropdown to position its menu on the left of its trigger.

{% capture left %}
<div class="dropdown-absolute dropdown-left">
  <button class="btn btn-primary btn-ico-left">
    Dropdown <i class="ico ico-left"></i>
  </button>
  <div class="dropdown-menu">
    <div class="dropdown-items">
      <div class="btns-y">
        <button class="btn btn-primary">One</button>
        <button class="btn btn-primary">Two</button>
        <button class="btn btn-primary">Three</button>        
      </div>
    </div>
  </div>
</div>
{% endcapture %}
<div class="example d-flex jc-end">
  {{ left }}
</div>
``` html{{ left }}```


#### Align Right
Add the class `.dropdown-align-right` to an absolute dropdown to position its menu aligned to the right edge of its trigger.

{% capture align_right %}
<div class="dropdown-absolute dropdown-align-right">
  <button class="btn btn-primary btn-ico-right">
    Dropdown <i class="ico ico-down"></i>
  </button>
  <div class="dropdown-menu">
    <div class="dropdown-items">
      <div class="btns-y">
        <button class="btn btn-primary">One</button>
        <button class="btn btn-primary">Two</button>
        <button class="btn btn-primary">A long long line</button>        
      </div>
    </div>
  </div>
</div>
{% endcapture %}
<div class="example">
  {{ align_right }}
</div>
``` html{{ align_right }}```




## Static Dropdown
A static dropdown is positioned in the normal document flow. Add the class `.dropdown-static` to a container to create a static dropdown like the below example.

{% capture static_dropdown %}
<div class="dropdown-static">
  <button class="btn btn-text-dark btn-ico-right">
    Dropdown <i class="ico ico-down"></i>
  </button>
  <div class="dropdown-menu">
    <div class="dropdown-items">
      <div class="btns-y">
        <button class="btn btn-text-dark">One</button>
        <button class="btn btn-text-dark">Two</button>
        <button class="btn btn-text-dark">Three</button>        
      </div>
    </div>
  </div>
</div>
{% endcapture %}
<div class="example">
  {{ static_dropdown }}
</div>
``` html{{ static_dropdown }}```



## Nested Dropdowns


### Nested Absolute Dropdowns
Absolute dropdowns can be nested. Let's see the below example for detail.

{% capture nested_absolute_dropdown %}
<div class="dropdown-absolute">
  <button class="btn btn-primary">Drink something?</button>
  <div class="dropdown-menu">
    <!-- The of-visible utility prevents scrolling in the root dropdown. -->
    <div class="dropdown-items of-visible">
      <div class="dropdown-absolute dropdown-right">
        <!-- The bd-b-none utility removes the bottom border and the sharp-b utility removes the bottom border radius.  -->
        <button class="btn btn-primary btn-ico-right bd-b-none sharp-b">Juice <i class="ico ico-right"></i></button>
        <div class="dropdown-menu">
          <div class="dropdown-items">
            <div class="btns-y">
              <button class="btn btn-dark">Apple</button>
              <button class="btn btn-dark">Orange</button>
              <button class="btn btn-dark">Banana</button>
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-primary bd-t-none bd-b-none sharp">Whiskey, please.</button>
      <button class="btn btn-primary bd-t-none sharp-t">No, thanks.</button>
    </div>
  </div>
</div>
{% endcapture %}
<div class="example">
  {{ nested_absolute_dropdown }}
</div>
``` html{{ nested_absolute_dropdown }}```


### Nested Static Dropdown
Static dropdowns can also be nested, we can use nested static dropdowns to create a menu tree. Let's see the below example for detail.

{% capture nested_static_dropdown %}
<div class="dropdown-static">
  <button class="btn btn-text-dark">Any thing to eat?</button>
  <div class="dropdown-menu">
    <div class="dropdown-items">
      <div class="dropdown-static">
        <button class="btn btn-text-dark btn-ico-right">Fruit <i class="ico ico-down"></i></button>
        <div class="dropdown-menu">
          <div class="dropdown-items">
            <div class="btns-y">
              <button class="btn btn-text-dark">Apple</button>
              <button class="btn btn-text-dark">Orange</button>
              <button class="btn btn-text-dark">Banana</button>
            </div>
          </div>
        </div>
      </div>
      <div class="dropdown-static">
        <button class="btn btn-text-dark btn-ico-right">Meat <i class="ico ico-down"></i></button>
        <div class="dropdown-menu">
          <div class="dropdown-items">
            <div class="btns-y">
              <button class="btn btn-text-dark">Chicken</button>
              <button class="btn btn-text-dark">Pig</button>
              <button class="btn btn-text-dark">Duck</button>
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-text-dark">No, Thanks.</button>
    </div>
  </div>
</div>
{% endcapture %}
<div class="example">
  {{ nested_static_dropdown }}
</div>
``` html{{ nested_static_dropdown }}```



## Responsive Dropdown
Actually, there is another dropdown class `.dropdown-fixed`, it's designed for mobile and responsive control. The `.dropdown-fixed` class positioned a dropdown in the document viewport with an overlay cover, we can combine it with the `.dropdown-absolute-m` class to create a responsive dropdown.

The combination of these two classes means a fixed dropdown is prefered for small screens, but when the screen width matches the `m` breakpoint, an absolute dropdown is prefered. Let's see the below example for detail.

{% capture responsive_dropdown %}
<div class="dropdown-fixed dropdown-absolute-m">
  <button class="btn btn-primary btn-ico-right">
    I'm responsive <i class="ico ico-down"></i>
  </button>
  <div class="dropdown-menu">
    <div class="dropdown-items">
      <div class="btns-y">
        <button class="btn btn-primary">One</button>
        <button class="btn btn-primary">Two</button>
        <button class="btn btn-primary">Three</button>
      </div>
    </div>
  </div>
</div>
{% endcapture %}
<div class="example">
  {{ responsive_dropdown }}
</div>
``` html{{ responsive_dropdown }}```




## HTML Attributes

### data-dropdown-standalone

``` html
< div class="dropdown-absolute" data-dropdown-standalone>...</div>
```
Prevent the dropdown from being toggled
unless the `click` event is triggered on itself or its descendant elements.

### data-dropdown-toggle-disabled

``` html
<div class="dropdown-items" data-dropdown-toggle-disabled>...</div>
```
Prevent the dropdown from being toggled
when the `click` event is triggered on the specific element
or the specific element's descendant elements.

### data-dropdown-toggle

``` html
<div class="dropdown-items" data-dropdown-toggle-disabled>
  <div class="btns-y">
    <button data-dropdown-toggle class="btn btn-primary">Do something</button>
    <button class="btn btn-primary">Close</button>
  </div>
</div>
```
Recover the ability of toggling the dropdown
for the element and the element's descendant elements.


## Javascript Methods

### luda.dropdown.activate(element)
``` javascript
luda.dropdown.activate(document.querySelector('#my-dropdown'))
```
Open the dropdown.

### luda.dropdown.deactivate(element)
``` javascript
luda.dropdown.deactivate(document.querySelector('#my-dropdown'))
```
Close the dropdown.

### luda.dropdown.toggle(element)
``` javascript
luda.dropdown.toggle(document.querySelector('#my-dropdown'))
```
Toggle the dropdown.

## DOM Events

### luda:dropdown:activate
``` javascript
luda.on('luda:dropdown:activate', '#my-dropdown', function(event){
  let $myDropdown = this, $activateDropdown = e.target
  event.preventDefault() // Prevent the dropdown from being activated if necessary.
})
```
Triggered before the `.dropdown-active` class added to the dropdown.

### luda:dropdown:activated
``` javascript
luda.on('luda:dropdown:activated', '#my-dropdown', function(event){
  let $myDropdown = this, $activatedDropdown = e.target
})
```
Triggered after the `.dropdown-active` class added to the dropdown and transition end.

### luda:dropdown:deactivate
``` javascript
luda.on('luda:dropdown:deactivate', '#my-dropdown', function(event){
  let $myDropdown = this, $deactivateDropdown = e.target
  event.preventDefault() // Prevent the dropdown from being deactivated if necessary.
})
```
Triggered before the `.dropdown-active` class removed from the dropdown.

### luda:dropdown:deactivated
``` javascript
luda.on('luda:dropdown:deactivated', '#my-dropdown', function(event){
  let $myDropdown = this, $deactivatedDropdown = e.target
})
```
Triggered after the `.dropdown-active` class removed from the dropdown and transition end.


## Sass Variables

### Sizes
``` sass
$dropdown-width-breakpoint: m !default
```
Specify a width breakpoint for dropdowns. The layout of dropdowns have the `.dropdown-absolute-{breakpoint}` class will be changed if the screen width is equal to or wider than the breakpoint width.

``` sass
$dropdown-static-menu-margin-left-rem: $spacing-small-rem !default
```

``` sass
$dropdown-absolute-max-height-rem: 33rem !default
```

``` sass
$dropdown-absolute-activated-gap-rem: $spacing-tiny-rem !default
```


### Others

``` sass
$dropdown-absolute-border-radius: $border-radius-main !default
```

``` sass
$dropdown-absolute-fixed-background: $background-color-main !default
```

``` sass
$dropdown-absolute-box-shadow: $box-shadow-normal !default
```