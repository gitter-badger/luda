---
title: Tab
description: Learn how to create tabs in Luda.
---

## Vertical
Add the class `.tab` to create a vertical tab.
{% capture tab %}
<div class="tab">
  <nav class="tab-indicators btns-x">
    <div class="btn-radio btn-hollow-secondary">
      <input type="radio" name="tab">
      <label>Tab One</label>
    </div>
    <div class="btn-radio btn-hollow-secondary">
      <input type="radio" name="tab">
      <label>Tab Two</label>
    </div>
    <div class="btn-radio btn-hollow-secondary">
      <input type="radio" name="tab">
      <label>Tab Three</label>
    </div>
  </nav>
  <div class="tab-panes">
    <div class="tab-pane">
      <p>Once upon time a girl named Cinderella lived with her stepmother and two stepsisters. Poor Cinderella had to work hard all day long so the others could rest...</p>
    </div>
    <div class="tab-pane">
      <p>It was she who had to wake up each morning when it was still dark and cold to start the fire. It was she who cooked the meals...</p>
    </div>
    <div class="tab-pane">
      <p> It was she who kept the fire going. The poor girl could not stay clean, from all the ashes and cinders by the fire...</p>
    </div>
  </div>
</div>
{% endcapture %}
{{ tab }}
``` html{{ tab }}```
{: .mt-small}



## Horizontal
Use grid to create a horizontal tab.
{% capture horizontal %}
<div class="tab">
  <div class="grid">
    <div class="col-4 col-3-m">
      <nav class="tab-indicators btns-y btns-fluid">
        <div class="btn-radio btn-hollow-secondary">
          <input type="radio" name="horizontal_tab">
          <label>One</label>
        </div>
        <div class="btn-radio btn-hollow-secondary">
          <input type="radio" checked name="horizontal_tab">
          <label>Two</label>
        </div>
        <div class="btn-radio btn-hollow-secondary">
          <input type="radio" name="horizontal_tab">
          <label>Three</label>
        </div>
      </nav>
    </div>
    <div class="col-auto">
      <div class="tab-panes">
        <div class="tab-pane">
          <p>Once upon time a girl named Cinderella lived with her stepmother and two stepsisters...</p>
        </div>
        <div class="tab-pane">
          <p>It was she who had to wake up each morning when it was still dark and cold to start the fire...</p>
        </div>
        <div class="tab-pane">
          <p> It was she who kept the fire going. The poor girl could not stay clean, from all the ashes and cinders by the fire...</p>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}
<div style="margin: 0 -1rem">
  {{ horizontal }}  
</div>
``` html{{ horizontal }}```
{: .mt-small}



## Sass Variables

``` sass
$tab-panes-padding-top-rem: null !default
```
Description.
{: .mb-small}

``` sass
$tab-panes-padding-bottom-rem: null !default
```
Description.
{: .mb-small}

``` sass
$tab-panes-background: $background-main !default
```
Description.