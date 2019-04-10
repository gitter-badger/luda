---
title: Breakpoints
order: 4
description: Luda provides width breakpoints, aspect ratio breakpoints and resolution breakpoints by default, lean how to configure and use them in your projects. 
---


## Screen Width Breakpoints

### Introduction
Luda provides 3 screen width breakpoints by default, small, medium and large. In Luda, we extended many component class names with breakpoint postfixes, which means we add shorthand letters to component class names, so the components can be responsive for different size screens.
The postfixes are added for middle size screens and large screens, for small screens, there're no postfixes in class names.

The breakpoints and postfixes are listed in the below table, please check it for detail.

<div class="table table-border my-small">
  <table>
    <thead>
      <tr>
        <th>Breakpoint</th>
        <th>Screen Width</th>
        <th>Postfix</th>
        <th>Postfix Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>small</td>
        <td>≥ 0px</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>medium</td>
        <td>≥ 768px</td>
        <td>-m</td>
        <td><code class="bc-none">.m-small-m</code></td>
      </tr>
      <tr>
        <td>large</td>
        <td>≥ 1200px</td>
        <td>-l</td>
        <td><code class="bc-none">.d-block-l</code></td>
      </tr>
    </tbody>
  </table>
</div>

### Sass Variables
{: .mb-small}

``` sass
$breakpoint-width-pxs: (s: 0, m: 768px, l: 1200px) !default
```
The default screen width breakpoints. You can add or remove breakpoints to this sass map according to your need. Except the key of the first pair in the sass map, all the other keys are considered as postfixes which will be added to responsive components' class names.

### Sass Mixins
{: .mb-small}

``` sass
+media-width($postfix)
```