---
title: Navigation
description: Learn how to create header navigation and aside navigation in Luda.
---


## Introduction
The navigation component includes three parts, a logo, a navigation menu and an open button.
The navigation menu includes four parts, main navigation items, sub navigation items,
a search field and a close button.

The open button and the close button only shows on small screens for opening and closing the navigation menu.
Except the open button and the close button, all the other parts in the navigation component are optional.

Based on the `position: sticky` rule, the navigation component will be sticky to the top of the
viewport for middle size screens and larger screens.

## Header Navigation
To create a header navigation, add the class `.nav-header` to a container, then wrap
elements like the below example.
<header class="nav-header sti my-small">
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




## Aside Navigation
To create an aside navigation, add the `.nav-aside` class to a container, then wrap elements
like the below example.

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

<div class="d-block d-flex-m my-small">
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
Specify a width breakpoint for header navigations and aside navigations. The layout of navigations will be changed if the screen width is equal to or wider than the breakpoint width.

``` sass
$navigation-padding-rem: $spacing-tiny-rem $spacing-small-rem !default
```

``` sass
$navigation-logo-margin-rem: 0 $spacing-small-rem !default
```

``` sass
$navigation-logo-image-height-rem: 2rem !default
```

``` sass
$navigation-open-button-margin-rem: 0 0 0 auto !default
```

``` sass
$navigation-close-button-margin-rem: $spacing-small-rem $spacing-small-rem 0 auto !default
```

``` sass
$navigation-search-field-margin-rem: $spacing-medium-rem !default
```

``` sass
$navigation-items-margin-rem: $spacing-small-rem !default
```

``` sass
$navigation-sub-items-margin-rem: $navigation-items-margin-rem !default
```


#### Header Navigation Sizes

``` sass
$navigation-header-breakpoint-search-field-margin-rem: 0 $spacing-small-rem !default
```

``` sass
$navigation-header-breakpoint-items-margin-rem: 0 auto 0 0 !default
```

``` sass
$navigation-header-breakpoint-sub-items-margin-rem: 0 !default
```

``` sass
$navigation-header-breakpoint-search-field-width-rem: 16rem !default
```


#### Aside Navigation Sizes

``` sass
$navigation-aside-breakpoint-padding-rem: 0 !default
```

``` sass
$navigation-aside-breakpoint-logo-margin-rem: 3 * $spacing-small-rem $spacing-medium-rem $spacing-small-rem !default
```

``` sass
$navigation-aside-breakpoint-logo-image-height-rem: 7rem !default
```

``` sass
$navigation-aside-breakpoint-logo-image-width-rem: 9rem !default
```

``` sass
$navigation-aside-breakpoint-min-width-rem: 18rem !default
```

``` sass
$navigation-aside-breakpoint-max-width-rem: 20rem !default
```


### Others

``` sass
$navigation-background: $background-color-dark !default
```

``` sass
$navigation-header-breakpoint-dropdown-background: $navigation-background !default
```

``` sass
$navigation-header-box-shadow: null !default
```

``` sass
$navigation-aside-box-shadow: $navigation-header-box-shadow !default
```

``` sass
$navigation-aside-breakpoint-box-shadow: none !default
```