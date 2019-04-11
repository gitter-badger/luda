---
title: Spacing
description: Use spacing utilities to control an elment's margin and padding responsively.
---


{% include variables.html %}


## Introduction
All space utilities are extend with [the screen width breakpoint postfixes]({{ width_breakpoints }}) for responsive control. Margin utility classes are named using the format `.m{direction}-{value}-{breakpoint}`, and padding utilities are named using the format `.p{direction}-{value}-{breakpoint}`. It means all directions if the `{direction}` part is not included.

We use shorthand class names and meaningful value words for these utilities, all abbreviations and value words are listed in the below tables.

##### Direction Abbreviations
<div class="table table-border mb-small">
  <table>
    <thead>
      <tr><th>Abbreviation</th><th>Direction</th></tr>
    </thead>
    <tbody>
      <tr><td>t</td><td>top</td></tr>
      <tr><td>r</td><td>right</td></tr>
      <tr><td>b</td><td>bottom</td></tr>
      <tr><td>l</td><td>left</td></tr>
      <tr><td>x</td><td>left and right</td></tr>
      <tr><td>y</td><td>top and bottom</td></tr>
    </tbody>
  </table>
</div>


##### Value Words
<div class="table table-border mb-small">
  <table>
    <thead>
      <tr><th>Word</th><th>Value</th></tr>
    </thead>
    <tbody>
      <tr><td>tiny</td><td>0.5rem</td></tr>
      <tr><td>small</td><td>1rem</td></tr>
      <tr><td>medium</td><td>2rem</td></tr>
      <tr><td>large</td><td>4rem</td></tr>
      <tr><td>none</td><td>0</td></tr>
      <tr><td>auto(only for margins)</td><td>auto</td></tr>
    </tbody>
  </table>
</div>

## Example
In the below example, we control elements' margins and paddings according to screen width easily and responsively.

{% capture space %}
<div class="p-small px-medium-m py-large-l bc-primary">
  <div class="bc-danger">
    <div class="p-large mx-small my-medium-m m-large-l bc-dark"></div>
  </div>
</div>
{% endcapture %}
<div class="example">
  {{ space }}
</div>
``` html{{ space }}```



## Sass Variables
{: .mb-small}

{% include doc-sass-variable-spacing.md %}