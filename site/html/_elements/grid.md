---
title: Grid
description: With Luda grid, you can create mobile-first responsive layout fast and easily.
---

## Column Width
Luda provides 12 columns grid wrapped by `.grid` class by default, column width can be setted as spefic or auto expaned.
Each column has `1rem` padding left and right by default. You can preview grid layout in below examples.

### Specfic Width Columns
Add the classes from `.col-1` to `.col-12` to create spefic width column.
<div class="grid w-auto" style="margin: 1rem -1rem">
  <div class="col-12"><p class="p6 bc-primary c-light ta-center mb-medium">.col-12</p></div>
  <div class="col-11"><p class="p6 bc-primary c-light ta-center mb-medium">.col-11</p></div>
  <div class="col-1"><p class="p6 bc-primary c-light ta-center mb-medium">.col-1</p></div>
  <div class="col-10"><p class="p6 bc-primary c-light ta-center mb-medium">.col-10</p></div>
  <div class="col-2"><p class="p6 bc-primary c-light ta-center mb-medium">.col-2</p></div>
  <div class="col-9"><p class="p6 bc-primary c-light ta-center mb-medium">.col-9</p></div>
  <div class="col-3"><p class="p6 bc-primary c-light ta-center mb-medium">.col-3</p></div>
  <div class="col-8"><p class="p6 bc-primary c-light ta-center mb-medium">.col-8</p></div>
  <div class="col-4"><p class="p6 bc-primary c-light ta-center mb-medium">.col-4</p></div>
  <div class="col-7"><p class="p6 bc-primary c-light ta-center mb-medium">.col-7</p></div>
  <div class="col-5"><p class="p6 bc-primary c-light ta-center mb-medium">.col-5</p></div>
  <div class="col-6"><p class="p6 bc-primary c-light ta-center">.col-6</p></div>
  <div class="col-6"><p class="p6 bc-primary c-light ta-center">.col-6</p></div>
</div>

``` html
<div class="grid">
  <div class="col-12"></div>
  <div class="col-11"></div>
  <div class="col-1"></div>
  <div class="col-10"></div>
  <div class="col-2"></div>
  <div class="col-9"></div>
  <div class="col-3"></div>
  <div class="col-4"></div>
  <div class="col-7"></div>
  <div class="col-5"></div>
  <div class="col-6"></div>
  <div class="col-6"></div>
</div>
```


### Responsive Column Width
All spefic column width classes are extended by responsive refixers. `.col-<n>-m` classes means column width will be `n/12` of the `.grid` when screen width matches the `m` breakpoint. So as `.col-<n>-l`.

<div class="grid w-auto" style="margin: 1rem -1rem">
  <div class="col-12 col-10-m col-8-l">
    <p class="p6 bc-primary c-light ta-center">.col-12.col-10-m.col-8-l</p>
  </div>
</div>
``` html
<div class="grid">
  <div class="col-12 col-10-m col-8-l"></div>
</div>
```


### Fluid Column Width
Add the class `.col-auto` to make a column width auto adjusted. The width of this column depends on the left horizontal space of its `.grid` container.

<div class="grid w-auto" style="margin: 1rem -1rem">
  <div class="col-4"><p class="p6 bc-primary c-light ta-center">.col-4</p></div>
  <div class="col-auto"><p class="p6 bc-primary c-light ta-center">.col-auto</p></div>
</div>
``` html
<div class="grid">
  <div class="col-4"></div>
  <div class="col-auto"></div>
</div>
```



## Column Offset
Like column width, column offset also can be spefic or auto adjust through offset utilities and margin utilities.

### Specfic Offset
Add the offset utiltiy classes from `.offset-1` to `.offset-11` to control spefic offset distance.

<div class="grid w-auto" style="margin: 1rem -1rem">
  <div class="col-11 offset-1"><p class="p6 bc-primary c-light ta-center mb-medium">.offset-1</p></div>
  <div class="col-10 offset-2"><p class="p6 bc-primary c-light ta-center mb-medium">.offset-2</p></div>
  <div class="col-9 offset-3"><p class="p6 bc-primary c-light ta-center mb-medium">.offset-3</p></div>
  <div class="col-8 offset-4"><p class="p6 bc-primary c-light ta-center mb-medium">.offset-4</p></div>
  <div class="col-7 offset-5"><p class="p6 bc-primary c-light ta-center mb-medium">.offset-5</p></div>
  <div class="col-6 offset-6"><p class="p6 bc-primary c-light ta-center mb-medium">.offset-6</p></div>
  <div class="col-5 offset-7"><p class="p6 bc-primary c-light ta-center mb-medium">.offset-7</p></div>
  <div class="col-4 offset-8"><p class="p6 bc-primary c-light ta-center mb-medium">.offset-8</p></div>
  <div class="col-3 offset-9"><p class="p6 bc-primary c-light ta-center mb-medium">.offset-9</p></div>
  <div class="col-2 offset-10"><p class="p6 bc-primary c-light ta-center mb-medium">.offset-10</p></div>
  <div class="col-1 offset-11"><p class="p6 bc-primary c-light ta-center">.offset-11</p></div>
</div>
``` html
<div class="grid">
  <div class="col-11 offset-1"></div>
  <div class="col-10 offset-2"></div>
  <div class="col-9 offset-3"></div>
  <div class="col-8 offset-4"></div>
  <div class="col-7 offset-5"></div>
  <div class="col-6 offset-6"></div>
  <div class="col-5 offset-7"></div>
  <div class="col-4 offset-8"></div>
  <div class="col-3 offset-9"></div>
  <div class="col-2 offset-10"></div>
  <div class="col-1 offset-11"></div>
</div>
```


### Auto Adjust Offset
Add the margin utility classes `.mx-auto`, `.mr-auto`, `.ml-auto` to set offset distance auto adjusted.

<div class="grid w-auto" style="margin: 1rem -1rem">
  <div class="col-10 mx-auto">
    <p class="p6 bc-primary c-light ta-center mb-medium">.mx-auto</p>
  </div>
  <div class="col-10 mr-auto">
    <p class="p6 bc-primary c-light ta-center mb-medium">.mr-auto</p>
  </div>
  <div class="col-10 ml-auto">
    <p class="p6 bc-primary c-light ta-center">.ml-auto</p>
  </div>
</div>
``` html
<div class="grid">
  <div class="col-10 mx-auto"></div>
  <div class="col-10 mr-auto"></div>
  <div class="col-10 ml-auto"></div>
</div>
```


### Responsive Offset Control
The offset utilities and margin utilities are both responsive, responsive offset can be easily controlled by adding breakpoins prefixers.

<div class="grid w-auto" style="margin: 1rem -1rem">
  <div class="col-9 offset-3 offset-2-m offset-1-l">
    <p class="p6 bc-primary c-light ta-center mb-medium">.offset-3.offset-2-m.offset-1-l</p>
  </div>
  <div class="col-9 ml-auto ml-none-m ml-auto-l">
    <p class="p6 bc-primary c-light ta-center">.ml-auto.ml-none-m.ml-auto-l</p>
  </div>
</div>



## Column Align


### Horizontal Align
Horizontal alignment of columns can be controlled by flex utility classes `.jc-start`, `.jc-center`, `.jc-end`, `.jc-around` and `.jc-between`.


#### Align to Horizontal Center
Add the class `.jc-center` to `.grid` to center columns in horizontal.

<div class="grid jc-center bc-dark mb-small">
  <div class="col-10">
    <p class="p6 bc-primary c-light ta-center">Center</p>
  </div>
</div>
``` html
<div class="grid jc-center"></div>
```

#### Align to Horizontal End
Add the class `.jc-end` to `.grid` to align columns to horizontal end.

<div class="grid jc-end bc-dark mb-small">
  <div class="col-10">
    <p class="p6 bc-primary c-light ta-center">End</p>
  </div>
</div>
``` html
<div class="grid jc-end"></div>
```

#### Align Around Horizontal
Add the class `.jc-around` to `.grid` to align columns around horizontal.

<div class="grid jc-around bc-dark mb-small">
  <div class="col-5">
    <p class="p6 bc-primary c-light ta-center">Around</p>
  </div>
  <div class="col-5">
    <p class="p6 bc-primary c-light ta-center">Around</p>
  </div>
</div>
``` html
<div class="grid jc-around"></div>
```

#### Align Between Horizontal
Add the class `.jc-between` to `.grid` to align columns between horizontal.

<div class="grid jc-between bc-dark mb-small">
  <div class="col-5">
    <p class="p6 bc-primary c-light ta-center">Between</p>
  </div>
  <div class="col-5">
    <p class="p6 bc-primary c-light ta-center">Between</p>
  </div>
</div>
``` html
<div class="grid jc-between"></div>
```



### Vertical Align
Vertical alignment of columns can be controlled by flex utility classes `.ai-start`, `.ai-center` and `.ai-end`. You can also control spefic column vertical align with classes `.as-start`, `.as-center` and `.as-end`.

#### Align to Vertical Center
Add the class `.ai-center` to `.grid` to center columns in vertical.

<div class="grid ai-center bc-dark mb-small" style="height: 8rem">
  <div class="col-12">
    <p class="p6 bc-primary c-light ta-center">Center</p>
  </div>
</div>
``` html
<div class="grid ai-center"></div>
```
{: .mb-small}

Add the class `.as-center` to align a single column in vertical center.

<div class="grid bc-dark mb-small" style="height: 8rem">
  <div class="col-auto">
    <p class="p6 bc-primary c-light ta-center">Start</p>
  </div>
  <div class="col-auto as-center">
    <p class="p6 bc-primary c-light ta-center">Center</p>
  </div>
</div>
``` html
<div class="grid">
  <div class="col-auto as-center"></div>
</div>
```


#### Align to Vertical End
Add the class `.ai-end` to `.grid` to align columns to vertical end.

<div class="grid ai-end bc-dark mb-small" style="height: 8rem">
  <div class="col-12">
    <p class="p6 bc-primary c-light ta-center">Center</p>
  </div>
</div>
``` html
<div class="grid ai-end"></div>
```
{: .mb-small}

Add the class `.as-end` to align a single column to vertical end.

<div class="grid bc-dark mb-small" style="height: 8rem">
  <div class="col-auto">
    <p class="p6 bc-primary c-light ta-center">Start</p>
  </div>
  <div class="col-auto as-end">
    <p class="p6 bc-primary c-light ta-center">Center</p>
  </div>
</div>
``` html
<div class="grid">
  <div class="col-auto as-end"></div>
</div>
```

## Column Order
The order utilities classes from `.od-1` to `.od-6` are used to backward column orders and from `.on-1` to `.on-6` are used to forward column orders. The `on` is short for negative order.  

<div class="grid w-auto" style="margin: 1rem -1rem">
  <div class="col-12 od-6">
    <p class="p6 bc-primary c-light ta-center">.od-6</p>
  </div>
  <div class="col-12 od-5">
    <p class="p6 bc-primary c-light ta-center mb-medium">.od-5</p>
  </div>
  <div class="col-12 od-4">
    <p class="p6 bc-primary c-light ta-center mb-medium">.od-4</p>
  </div>
  <div class="col-12 od-3">
    <p class="p6 bc-primary c-light ta-center mb-medium">.od-3</p>
  </div>
  <div class="col-12 od-2">
    <p class="p6 bc-primary c-light ta-center mb-medium">.od-2</p>
  </div>
  <div class="col-12 od-1">
    <p class="p6 bc-primary c-light ta-center mb-medium">.od-1</p>
  </div>
  <div class="col-12 on-1">
    <p class="p6 bc-primary c-light ta-center mb-medium">.on-1</p>
  </div>
  <div class="col-12 on-2">
    <p class="p6 bc-primary c-light ta-center mb-medium">.on-2</p>
  </div>
  <div class="col-12 on-3">
    <p class="p6 bc-primary c-light ta-center mb-medium">.on-3</p>
  </div>
  <div class="col-12 on-4">
    <p class="p6 bc-primary c-light ta-center mb-medium">.on-4</p>
  </div>
  <div class="col-12 on-5">
    <p class="p6 bc-primary c-light ta-center mb-medium">.on-5</p>
  </div>
  <div class="col-12 on-6">
    <p class="p6 bc-primary c-light ta-center mb-medium">.on-6</p>
  </div>
</div>

``` html
<div class="grid">
  <div class="col-12 od-6"></div>
  <div class="col-12 od-5"></div>
  <div class="col-12 od-4"></div>
  <div class="col-12 od-3"></div>
  <div class="col-12 od-2"></div>
  <div class="col-12 od-1"></div>
  <div class="col-12 on-1"></div>
  <div class="col-12 on-2"></div>
  <div class="col-12 on-3"></div>
  <div class="col-12 on-4"></div>
  <div class="col-12 on-5"></div>
  <div class="col-12 on-6"></div>
</div>
```




{%
  include doc-chapter.html
  title="Column breaker"
  content=""
%}

{% capture column_breaker_code %}
<div class="grid">
  <div class="col-6 mb-medium">
    <p class="bc-primary c-light ta-center">.col-6</p>
  </div>
  <hr>
  <div class="col-6">
    <p class="bc-primary c-light ta-center">.col-6</p>
  </div>
</div>
{% endcapture %}

{% capture column_breaker_code_sample %}
<div class="grid">
  <div class="col-6"></div>
  <hr>
  <div class="col-6"></div>
</div>
{% endcapture %}

{%
  include doc-example.html
  title="Column breaker usage"
  content=""
  code=column_breaker_code
  code_sample=column_breaker_code_sample
%}

{%
  include doc-chapter.html
  title="Responsive grid"
  content=""
%}

{% capture responsive_columns_code %}
<div class="grid">
  <div class="col-12 col-8-m od-3 on-3-m mb-medium-m">
    <p class="bc-primary c-light ta-center">.col-12.col-8-m.od-3.on-3-m</p>
  </div>
  <div class="col-12 col-8-m col-6-l od-2 on-1-m mb-medium mb-none-m">
    <p class="bc-dark c-light ta-center">.col-12.col-8-m.col-6-l.od-2.on-1-m</p>
  </div>
  <div class="col-auto od-1 on-2-m mb-medium">
    <p class="bc-danger c-light ta-center">.col-auto.od-1.on-2-m</p>
  </div>
</div>
{% endcapture %}

{% capture responsive_columns_code_sample %}
<div class="grid">
  <div class="col-12 col-8-m od-3 on-3-m mb-medium-m">
  </div>
  <div class="col-12 col-8-m col-6-l od-2 on-1-m mb-medium mb-none-m">
  </div>
  <div class="col-auto od-1 on-2-m mb-medium">
  </div>
</div>
{% endcapture %}

{%
  include doc-example.html
  title="Responsive columns"
  content=""
  code=responsive_columns_code
  code_sample=responsive_columns_code_sample
%}

{%
  include doc-chapter.html
  title="Gutterless grid"
  content=""
%}

{% capture grid_edge_code %}
<div class="grid-edge">
  <div class="col-auto">
    <p class="bc-primary c-light ta-center">.grid-edge .col-auto</p>
  </div>
  <div class="col-auto">
    <p class="bc-dark c-light ta-center">.grid-edge .col-auto</p>
  </div>
  <div class="col-auto">
    <p class="bc-danger c-light ta-center">.grid-edge .col-auto</p>
  </div>
</div>
{% endcapture %}

{% capture grid_edge_code_sample %}
<div class="grid-edge">
  <div class="col-auto"></div>
  <div class="col-auto"></div>
  <div class="col-auto"></div>
</div>
{% endcapture %}

{%
  include doc-example.html
  title="Grid edge"
  content=""
  code=grid_edge_code
  code_sample=grid_edge_code_sample
%}

{%
  include doc-chapter.html
  title="Nested grid"
  content=""
%}

{% capture nested_gird_code %}
<div class="grid mb-medium">
  <div class="col-8">
    <p class="bc-primary c-light mb-medium ta-center">.grid .col-8</p>
  </div>
  <div class="col-10">
    <div class="grid">
      <div class="col-8">
        <p class="bc-primary c-light mb-medium ta-center">.grid .col-10 .grid .col-8</p>
      </div>
    </div>
  </div>
  <div class="col-12">
    <div class="grid">
      <div class="col-8">
        <p class="bc-primary c-light ta-center">.grid .col-12 .grid .col-8</p>
      </div>
    </div>
  </div>
</div>
<div class="grid mb-medium">
  <div class="col-12">
    <div class="grid-edge">
      <div class="col-12">
        <p class="bc-dark c-light">.grid .col-12 .grid-edge .col-12</p>
      </div>
    </div>
  </div>
  <div class="col-12 mt-medium">
    <p class="bc-dark c-light">.grid .col-12</p>
  </div>
</div>
<div class="grid-edge">
  <div class="col-12">
    <div class="grid">
      <div class="col-12">
        <p class="bc-primary c-light">.grid-edge .col-12 .grid .col-12</p>
      </div>
    </div>
  </div>
  <div class="col-12 mt-medium">
    <p class="bc-primary c-light">.grid-edge .col-12</p>
  </div>
</div>
{% endcapture %}

{% capture nested_grid_code_sample %}
<div class="grid">
  <div class="col-8"></div>
  <div class="col-10">
    <div class="grid">
      <div class="col-8"></div>
    </div>
  </div>
  <div class="col-12">
    <div class="grid">
      <div class="col-8"></div>
    </div>
  </div>
</div>
<div class="grid">
  <div class="col-12">
    <div class="grid-edge">
      <div class="col-12"></div>
    </div>
  </div>
  <div class="col-12"></div>
</div>
<div class="grid-edge">
  <div class="col-12">
    <div class="grid">
      <div class="col-12"></div>
    </div>
  </div>
  <div class="col-12"></div>
</div>
{% endcapture %}

{%
  include doc-example.html
  title="Nested grid"
  content=""
  code=nested_gird_code
  code_sample=nested_grid_code_sample
%}

{%
  include doc-chapter.html
  title="Grid as container"
  content=""
%}

{% capture grid_container_code %}
<div class="grid container bc-dark">
  <div class="col-12">
    <p class="bc-primary c-light ta-center">.grid.container .col-12</p>
  </div>
</div>
{% endcapture %}

{% capture grid_container_code_sample %}
<div class="grid container">
  <div class="col-12"></div>
</div>
{% endcapture %}

{%
  include doc-example.html
  title="Grid container"
  content=""
  code=grid_container_code
  code_sample=grid_container_code_sample
%}