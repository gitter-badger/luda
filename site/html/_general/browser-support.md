---
title: Browser Support
order: 4
description: Luda supports most modern browsers, for browsers not supported, you can use Luda degeradation script as a fallback.
---


## Supported Browsers

<div class="dis-flex fw-wrap jc-between mt-small">
  <div class="mx-tiny ta-center">
    <img width="50" height="50" src="{{ '/assets/img/chrome.svg' | relative_url }}" alt="chrome">
    <p>Latest 2</p>
  </div>
  <div class="mx-tiny ta-center">
    <img width="50" height="50" src="{{ '/assets/img/firefox.svg' | relative_url }}" alt="firefox">
    <p>Latest 2</p>
  </div>
  <div class="mx-tiny ta-center">
    <img width="50" height="50" src="{{ '/assets/img/safari.svg' | relative_url }}" alt="safari">
    <p>Latest 2</p>
  </div>
  <div class="mx-tiny ta-center">
    <img width="50" height="50" src="{{ '/assets/img/opera.svg' | relative_url }}" alt="opera">
    <p>Latest 2</p>
  </div>
  <div class="mx-tiny ta-center">
    <img width="50" height="50" src="{{ '/assets/img/edge.svg' | relative_url }}" alt="edge">
    <p>Latest 2</p>
  </div>
</div>

If your target browsers are not listed above, it does't mean you cannot use Luda. Most modern browsers use the same engines as above ones. If you're not sure if Luda works in your target browser, you can use Luda degeradation script as a fallback option.


## The Degeradation Script
Luda degeradation script is a tiny javascript file detecting the key features Luda based on. If any feature not supported by running browser, the degeradation script will try to redirect to a fallback url defined by its `data-degeradation-url` attribute. If this attribute is not defined, a simple browser update page will show to remind the user
to get a modern browser.

The degeradation script is simple to use, just include the script before other scripts in your template and set a degradation url as below.

``` html
<script data-degradation-url="your_degradation_url" src="https://raw.githubusercontent.com/oatw/luda/v{{site.release_version}}/dist/js/luda-degradation.min.js"></script>
```

If you use assets bundlers to import the degeradation script, make sure it's bundled as a standalone file.
{: .c-danger}

### Import in Node.js Apps

``` javascript
import 'luda/degeradation'
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