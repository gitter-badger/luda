---
title: Browser Support
order: 4
description: Luda supports most modern browsers, for browsers not supported, you can use Luda degeradation script as a fallback.
---


## Supported Browsers

<div class="dis-flex fw-wrap mt-small">
  <div class="mr-small ta-center">
    <img width="50" height="50" src="{{ '/assets/img/chrome.svg' | relative_url }}" alt="chrome">
    <p class="p6">Latest Versions</p>
  </div>
  <div class="mr-small ta-center">
    <img width="50" height="50" src="{{ '/assets/img/firefox.svg' | relative_url }}" alt="firefox">
    <p class="p6">Latest Versions</p>
  </div>
  <div class="mr-small ta-center">
    <img width="50" height="50" src="{{ '/assets/img/safari.svg' | relative_url }}" alt="safari">
    <p class="p6">Latest Versions</p>
  </div>
  <div class="mr-small ta-center">
    <img width="50" height="50" src="{{ '/assets/img/opera.svg' | relative_url }}" alt="opera">
    <p class="p6">Latest Versions</p>
  </div>
  <div class="mr-small ta-center">
    <img width="50" height="50" src="{{ '/assets/img/edge.svg' | relative_url }}" alt="edge">
    <p class="p6">Latest Versions</p>
  </div>
</div>

Luda targets all recent versions of above modern browsers and doesn't include unnecessary polyfills nor prefixers. For old version browsers, Luda degradation script can be used for redirecting to a browser update page or some degradated url. If old version browsers are still your main targets, you can add extra polyfills and prefixers by yourself with tools like [Babel]() and [Autoprefixer]().


## The Degeradation Script
Luda degeradation script is a tiny javascript file detecting the key features Luda based on. If any feature not supported by running browser, the degeradation script will try to redirect to a fallback url defined by its `data-degeradation-url` attribute. If this attribute is not defined, a simple browser update page will show to remind the user
to get a modern browser.

The degeradation script is simple to use, just include the script before other scripts in your template and set a degradation url as below.

``` html
<script data-degradation-url="your_degradation_url" src="https://unpkg.com/luda@{{site.release_version}}/dist/js/luda-degradation.min.js"></script>
```

If you use assets bundlers to import the degeradation script, make sure it's bundled as a standalone file.
{: .c-danger}

### Import in Node.js Apps

``` javascript
import 'luda/src/js/degeradation'
```

### Import in Sprokets Apps

``` javascript
//= require luda-degeradation
```

### Import in Hanami Apps

<!-- htmllint attr-name-style="false" -->
<!-- htmllint tag-close="false" -->
``` html
<% javascript 'luda-degeradation' %>
```
<!-- htmllint attr-name-style="true" -->
<!-- htmllint tag-close="true" -->