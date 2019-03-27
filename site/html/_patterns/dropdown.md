---
title: Dropdown
description: Learn how to create dropdowns in Luda.
---


## Absolute Dropdown

### Usage
Add the class `.dropdown-absolute` to create an absolute dropdown.

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
{{ absolute_dropdown }}
``` html{{ absolute_dropdown }}```
{: .mt-small}


### Style Modifiers

#### Top{% include modifier.html %}
Add the class `.dropdown-top` to an absolute dropdown.

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
{{ top }}
``` html{{ top }}```
{: .mt-small}

#### Right{% include modifier.html %}
Add the class `.dropdown-right` to an absolute dropdown.

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
{{ right }}
``` html{{ right }}```
{: .mt-small}


#### Left{% include modifier.html %}
Add the class `.dropdown-left` to an absolute dropdown.

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
<div class="d-flex jc-end">
  {{ left }}
</div>
``` html{{ left }}```
{: .mt-small}


#### Align Right
Add the class `.dropdown-align-right` to an absolute dropdown.

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
{{ align_right }}
``` html{{ align_right }}```
{: .mt-small}




## Static Dropdown
Add the class `.dropdown-static` to create an absolute dropdown.

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
{{ static_dropdown }}
``` html{{ static_dropdown }}```
{: .mt-small}



## Nested Dropdown


### Nested Absolute Dropdown
Absolute dropdown can be nested.

{% capture nested_absolute_dropdown %}
<div class="dropdown-absolute">
  <button class="btn btn-primary">Eat something?</button>
  <div class="dropdown-menu">
    <div class="dropdown-items of-visible">
      <div class="dropdown-absolute dropdown-right">
        <button class="btn btn-primary btn-ico-right sharp-b bd-b-none">Fruit <i class="ico ico-right"></i></button>
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
      <div class="dropdown-absolute dropdown-right">
        <button class="btn btn-primary btn-ico-right sharp bd-t-none bd-b-none">Meat<i class="ico ico-right"></i></button>
        <div class="dropdown-menu">
          <div class="dropdown-items">
            <div class="btns-y">
              <button class="btn btn-dark">Chicken</button>
              <button class="btn btn-dark">Pig</button>
              <button class="btn btn-dark">Duck</button>
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-primary sharp-t bd-t-none">No, Thanks.</button>
    </div>
  </div>
</div>
{% endcapture %}
{{ nested_absolute_dropdown }}
``` html{{ nested_absolute_dropdown }}```
{: .mt-small}


### Nested Static Dropdown
Static Dropdown can be nested too.

{% capture nested_static_dropdown %}
<div class="dropdown-static">
  <button class="btn btn-text-dark">Any thing to eat?</button>
  <div class="dropdown-menu">
    <div class="dropdown-items of-visible">
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
{{ nested_static_dropdown }}
``` html{{ nested_static_dropdown }}```
{: .mt-small}



## Responsive Dropdown
The class `.dropdown-absolute` is prefixed with breakpoint `m`.

{% capture responsive_dropdown %}
<div class="dropdown-fixed dropdown-absolute-m">
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
{{ responsive_dropdown }}
``` html{{ responsive_dropdown }}```
{: .mt-small}




## HTML Attributes

``` html
data-dropdown-standalone
```
Description.
{: .mb-small}

``` html
data-dropdown-toggle
```
Description.
{: .mb-small}

``` html
data-dropdown-toggle-disabled
```
Description.



## DOM Events

``` javascript
luda:dropdown:actived
```
Description.
{: .mb-small}

``` javascript
luda:dropdown:deactived
```
Description.



## Sass Variables

### Sizes
``` sass
$dropdown-width-breakpoint: m !default
```
Description.
{: .mb-small}

``` sass
$dropdown-static-menu-margin-left-rem: $space-small-rem !default
```
Description.
{: .mb-small}

``` sass
$dropdown-absolute-max-height-rem: 33rem !default
```
Description.
{: .mb-small}

``` sass
$dropdown-absolute-drop-gap-rem: $space-tiny-rem !default
```
Description.


### Others
``` sass
$dropdown-absolute-border-radius: $border-radius-main !default
```
Description.
{: .mb-small}

``` sass
$dropdown-absolute-fixed-background: $background-main !default
```
Description.
{: .mb-small}

``` sass
$dropdown-absolute-box-shadow: $box-shadow-normal !default
```
Description.