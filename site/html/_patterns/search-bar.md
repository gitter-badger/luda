---
title: Search Bar
description: Learn how to create a search bar in Luda.
---


## Usage
Add the class `.search-bar` to create a search bar.
{% capture search_bar %}
<div class="search-bar">
  <div class="fm fm-text">
    <input type="search" placeholder="Search anything...">
  </div>
  <button class="btn btn-ico btn-primary">
    <i class="ico ico-search"></i>
  </button>
</div>
{% endcapture %}
{{ search_bar }}
``` html{{ search_bar }}```
{: .mt-small}



## Search Options
Prepend a form dropdown or a form select as search options.

{% capture options %}
<div class="search-bar">
  <div class="fm-dropdown dropdown-absolute">
    <div class="fm fm-select"><input></div>
    <div class="dropdown-menu">
      <div class="dropdown-items">
        <div class="btns-y">
          <div class="btn-radio btn-hollow-primary">
            <input type="radio" checked name="single_fm_dropdown" value="one">
            <label>Videos</label>
          </div>
          <div class="btn-radio btn-hollow-primary">
            <input type="radio" name="single_fm_dropdown" value="two">
            <label>Pictures</label>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="fm fm-text">
    <input type="search" placeholder="Form search with a button">
  </div>
  <button class="btn btn-primary">Search</button>
</div>
{% endcapture %}
{{ options }}
``` html{{ options }}```
{: .mt-small}