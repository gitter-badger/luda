---
title: Navigation
description: Learn how to create header navigation and aside navigation in Luda.
---


## Header Navigation
See below example.

<header class="nav-header sta">
  <a class="nav-logo" data-turbolinks="false" href="#header-navigation">
    <img src="{{ '/assets/img/logo-text.svg' | relative_url }}" alt="logo">
  </a>
  <button class="nav-open btn btn-ico btn-text-light" data-toggle-for="header-menu">
    <i class="ico ico-menu"></i>
  </button>
  <div class="nav-menu" data-toggle-target="header-menu">
    <button class="nav-close btn btn-ico btn-text-light" data-toggle>
      <i class="ico ico-cross"></i>
    </button>
    <div class="nav-search fm fm-search fm-small">
      <input type="search" placeholder="Search anything...">
    </div>
    <nav class="nav-items" data-toggle>
      <a class="btn btn-text-light btn-active" data-turbolinks="false" href="#header-navigation">Home</a>
      <a class="btn btn-text-light" data-turbolinks="false" href="#header-navigation">Github</a>
    </nav>
    <nav class="nav-sub-items">
      <div class="dropdown-static dropdown-absolute-m dropdown-align-right">
        <button class="btn btn-ico-right btn-text-light">
          Admin<i class="ico ico-down"></i>
        </button>
        <div class="dropdown-menu mx-small-m">
          <div class="dropdown-items mt-small-m" data-toggle>
            <a class="btn btn-text-light" data-turbolinks="false" href="#header-navigation">Profile</a>
            <a class="btn btn-text-light" data-turbolinks="false" href="#header-navigation">Sign out</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</header>

``` html
<header class="nav-header">
  <a class="nav-logo" href="/">
    <img src="..." alt="logo">
  </a>
  <button class="nav-open btn btn-ico btn-text-light" data-toggle-for="header-menu">
    <i class="ico ico-menu"></i>
  </button>
  <div class="nav-menu" data-toggle-target="header-menu">
    <button class="nav-close btn btn-ico btn-text-light" data-toggle>
      <i class="ico ico-cross"></i>
    </button>
    <div class="nav-search fm fm-search fm-small">
      <input type="search" placeholder="Search anything...">
    </div>
    <nav class="nav-items" data-toggle>
      <a class="btn btn-text-light btn-active" href="#">Home</a>
      <a class="btn btn-text-light" href="#">Github</a>
    </nav>
    <nav class="nav-sub-items">
      <div class="dropdown-static dropdown-absolute-m dropdown-align-right">
        <button class="btn btn-ico-right btn-text-light">
          Admin<i class="ico ico-down"></i>
        </button>
        <div class="dropdown-menu mx-small-m">
          <div class="dropdown-items mt-small-m" data-toggle>
            <a class="btn btn-text-light" href="#">Profile</a>
            <a class="btn btn-text-light" href="#">Sign out</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</header>
```
{: .mt-small}




## Aside Navigation
See below exammple.

{% capture nav_aside_code %}
{% highlight html %}
<aside class="nav-aside">
  <a class="nav-logo" href="/">
    <img src="..." alt="logo">
  </a>
  <button class="nav-open btn btn-ico btn-text-light" data-toggle-for="aside-menu">
    <i class="ico ico-menu"></i>
  </button>
  <div class="nav-menu" data-toggle-target="aside-menu">
    <button class="nav-close btn btn-ico btn-text-light" data-toggle>
      <i class="ico ico-cross"></i>
    </button>
    <div class="nav-search fm fm-search fm-small">
      <input type="search" placeholder="Search anything...">
    </div>
    <nav class="nav-items" data-toggle>
      <a class="btn btn-text-light btn-active" href="#">Home</a>
      <a class="btn btn-text-light" href="#">Documentation</a>
      <a class="btn btn-text-light" href="#">Themes</a>
      <a class="btn btn-text-light" href="#">Changelog</a>
      <a class="btn btn-text-light" href="#">Github</a>
    </nav>
    <nav class="nav-sub-items">
      <div class="dropdown-static">
        <button class="btn btn-ico-right btn-text-light" data-none-toggle>
          Admin<i class="ico ico-down"></i>
        </button>
        <div class="dropdown-menu">
          <div class="dropdown-items" data-toggle>
            <a class="btn btn-text-light" href="#">Profile</a>
            <a class="btn btn-text-light" href="#">Sign out</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</aside>
{% endhighlight %}
{% endcapture %}

<div class="d-block d-flex-m">
  <aside class="nav-aside">
    <a class="nav-logo" data-turbolinks="false" href="#aside-navigation">
      <img src="{{ '/assets/img/logo-text.svg' | relative_url }}" alt="logo">
    </a>
    <button class="nav-open btn btn-ico btn-text-light" data-toggle-for="aside-menu">
      <i class="ico ico-menu"></i>
    </button>
    <div class="nav-menu" data-toggle-target="aside-menu">
      <button class="nav-close btn btn-ico btn-text-light" data-toggle>
        <i class="ico ico-cross"></i>
      </button>
      <div class="nav-search fm fm-search fm-small">
        <input type="search" placeholder="Search anything...">
      </div>
      <nav class="nav-items" data-toggle>
        <a class="btn btn-text-light btn-active" data-turbolinks="false" href="#aside-navigation">Home</a>
        <a class="btn btn-text-light" data-turbolinks="false" href="#aside-navigation">Documentation</a>
        <a class="btn btn-text-light" data-turbolinks="false" href="#aside-navigation">Themes</a>
        <a class="btn btn-text-light" data-turbolinks="false" href="#aside-navigation">Changelog</a>
        <a class="btn btn-text-light" data-turbolinks="false" href="#aside-navigation">Github</a>
      </nav>
      <nav class="nav-sub-items">
        <div class="dropdown-static">
          <button class="btn btn-ico-right btn-text-light" data-none-toggle>
            Admin<i class="ico ico-down"></i>
          </button>
          <div class="dropdown-menu">
            <div class="dropdown-items" data-toggle>
              <a class="btn btn-text-light" data-turbolinks="false" href="#aside-navigation">Profile</a>
              <a class="btn btn-text-light" data-turbolinks="false" href="#aside-navigation">Sign out</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </aside>
  <div class="mt-small mt-none-m" style="min-width:0">{{ nav_aside_code }}</div>
</div>




## Sass Variables

### Sizes
``` sass
$navigation-width-breakpoint: m !default
```
Description.
{: .mb-small}

``` sass
$navigation-padding-rem: $space-tiny-rem $space-small-rem !default
```
Description.
{: .mb-small}

``` sass
$navigation-logo-margin-rem: 0 $space-small-rem !default
```
Description.
{: .mb-small}

``` sass
$navigation-logo-image-height-rem: 2rem !default
```
Description.
{: .mb-small}

``` sass
$navigation-open-margin-rem: 0 0 0 auto !default
```
Description.
{: .mb-small}

``` sass
$navigation-close-margin-rem: $space-small-rem $space-small-rem 0 auto !default
```
Description.
{: .mb-small}

``` sass
$navigation-search-margin-rem: $space-medium-rem !default
```
Description.
{: .mb-small}

``` sass
$navigation-items-margin-rem: $space-small-rem !default
```
Description.
{: .mb-small}

``` sass
$navigation-sub-items-margin-rem: $navigation-items-margin-rem !default
```
Description.


#### Header Navigation Sizes
``` sass
$navigation-header-breakpoint-search-margin-rem: 0 $space-small-rem !default
```
Description.
{: .mb-small}

``` sass
$navigation-header-breakpoint-items-margin-rem: 0 auto 0 0 !default
```
Description.
{: .mb-small}

``` sass
$navigation-header-breakpoint-sub-items-margin-rem: 0 !default
```
Description.
{: .mb-small}

``` sass
$navigation-header-breakpoint-search-width-rem: 16rem !default
```
Description.


#### Aside Navigation Sizes
``` sass
$navigation-aside-breakpoint-padding-rem: 0 !default
```
Description.
{: .mb-small}

``` sass
$navigation-aside-breakpoint-logo-margin-rem: 3 * $space-small-rem $space-medium-rem $space-small-rem !default
```
Description.
{: .mb-small}

``` sass
$navigation-aside-breakpoint-logo-image-height-rem: 7rem !default
```
Description.
{: .mb-small}

``` sass
$navigation-aside-breakpoint-logo-image-width-rem: 9rem !default
```
Description.
{: .mb-small}

``` sass
$navigation-aside-breakpoint-min-width-rem: 18rem !default
```
Description.
{: .mb-small}

``` sass
$navigation-aside-breakpoint-max-width-rem: 20rem !default
```
Description.


### Others
``` sass
$navigation-background: $background-color-dark !default
```
Description.
{: .mb-small}

``` sass
$navigation-header-breakpoint-dropdown-background: $navigation-background !default
```
Description.
{: .mb-small}

``` sass
$navigation-header-box-shadow: $box-shadow-normal !default
```
Description.
{: .mb-small}

``` sass
$navigation-aside-box-shadow: $navigation-header-box-shadow !default
```
Description.
{: .mb-small}

``` sass
$navigation-aside-breakpoint-box-shadow: $box-shadow-normal !default
```
Description.