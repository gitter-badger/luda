---
title: Grid
description: With Luda grid, you can create mobile-first responsive layout fast and easily.
---


## Column Widths
Luda provides 12 columns grid by default, column width can be setted as spefic or auto expaned.
Each column has `1rem` padding on the left and right by default. Columns must be wrapped by a `.grid` container.
You can preview grid layout in below examples.

### Specfic Width Columns
The classes `.col-<n>` means this column occupies `n/12` of its `.grid` container horizontal space.
Add the classes from `.col-1` to `.col-12` to create spefic width columns of different widths.
<div class="grid grid-example">
  <div class="col-9"><p class="p6 bc-primary c-light ta-center">9/12</p></div>
  <div class="col-3"><p class="p6 bc-primary c-light ta-center">3/12</p></div>
  <div class="col-8"><p class="p6 bc-primary c-light ta-center">8/12</p></div>
  <div class="col-4"><p class="p6 bc-primary c-light ta-center">4/12</p></div>
  <div class="col-7"><p class="p6 bc-primary c-light ta-center">7/12</p></div>
  <div class="col-5"><p class="p6 bc-primary c-light ta-center">5/12</p></div>
</div>

``` html
<div class="grid">
  <div class="col-9"></div>
  <div class="col-3"></div>
  <div class="col-8"></div>
  <div class="col-4"></div>
  <div class="col-7"></div>
  <div class="col-5"></div>
</div>
```


### Responsive Column Widths
All spefic column width classes are extended by responsive postfixes. `.col-<n>-m` classes means the column width will be `n/12` of the `.grid` when screen width matches the `m` breakpoint. For large screens, the breakpoint postfix is `l`.

<div class="grid grid-example">
  <div class="col-12 col-10-m col-8-l">
    <p class="p6 bc-primary c-light ta-center">.col-12.col-10-m.col-8-l</p>
  </div>
</div>
``` html
<div class="grid">
  <!-- 12/12 for small screens, 10/12 for middle size screens and 8/12 for large screens -->
  <div class="col-12 col-10-m col-8-l"></div>
</div>
```


### Fluid Column Width
Add the class `.col-auto` to make a column width auto adjusted. The width of this column depends on the availiable horizontal space of its `.grid` container, all the left space will be occupied.

<div class="grid grid-example">
  <div class="col-4"><p class="p6 bc-primary c-light ta-center">.col-4</p></div>
  <div class="col-auto"><p class="p6 bc-primary c-light ta-center">.col-auto</p></div>
</div>
``` html
<div class="grid">
  <div class="col-4"></div>
  <!-- Occupy the left 8/12 horizontal spaces -->
  <div class="col-auto"></div>
</div>
```



## Column Offsets
Like column widths, column offsets also can be spefic or auto adjusted through offset utilities and margin utilities.

### Specfic Offsets
Add the offset utiltiy classes from `.offset-1` to `.offset-11` to control spefic offset distance.

<div class="grid grid-example">
  <div class="col-11 offset-1"><p class="p6 bc-primary c-light ta-center">.offset-1</p></div>
  <div class="col-10 offset-2"><p class="p6 bc-primary c-light ta-center">.offset-2</p></div>
  <div class="col-9 offset-3"><p class="p6 bc-primary c-light ta-center">.offset-3</p></div>
  <div class="col-8 offset-4"><p class="p6 bc-primary c-light ta-center">.offset-4</p></div>
</div>
``` html
<div class="grid">
  <div class="col-11 offset-1"></div>
  <div class="col-10 offset-2"></div>
  <div class="col-9 offset-3"></div>
  <div class="col-8 offset-4"></div>
</div>
```


### Auto Adjust Offset
Add the margin utility classes `.mx-auto`, `.mr-auto`, `.ml-auto` to set offset distance auto adjusted.

<div class="grid grid-example">
  <div class="col-10 mx-auto">
    <p class="p6 bc-primary c-light ta-center">.mx-auto</p>
  </div>
  <div class="col-10 mr-auto">
    <p class="p6 bc-primary c-light ta-center">.mr-auto</p>
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

<div class="grid grid-example">
  <div class="col-9 offset-3 offset-2-m offset-1-l">
    <p class="p6 bc-primary c-light ta-center">.offset-3.offset-2-m.offset-1-l</p>
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

<div class="grid grid-example jc-center">
  <div class="col-10">
    <p class="p6 bc-primary c-light ta-center">Center</p>
  </div>
</div>
``` html
<div class="grid jc-center"></div>
```

#### Align to Horizontal End
Add the class `.jc-end` to `.grid` to align columns to horizontal end.

<div class="grid grid-example jc-end">
  <div class="col-10">
    <p class="p6 bc-primary c-light ta-center">End</p>
  </div>
</div>
``` html
<div class="grid jc-end"></div>
```

#### Align Around Horizontal
Add the class `.jc-around` to `.grid` to align columns around horizontal.

<div class="grid grid-example jc-around">
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

<div class="grid grid-example jc-between">
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

<div class="grid grid-example ai-center" style="height: 8rem">
  <div class="col-12">
    <p class="p6 bc-primary c-light ta-center">Center</p>
  </div>
</div>
``` html
<div class="grid ai-center"></div>
```
{: .mb-small}

Add the class `.as-center` to align a single column in vertical center.

<div class="grid grid-example" style="height: 8rem">
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

<div class="grid grid-example ai-end" style="height: 8rem">
  <div class="col-12">
    <p class="p6 bc-primary c-light ta-center">Center</p>
  </div>
</div>
``` html
<div class="grid ai-end"></div>
```
{: .mb-small}

Add the class `.as-end` to align a single column to vertical end.

<div class="grid grid-example" style="height: 8rem">
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


### Responsive Align Control

The flex utilities and margin utilities are extantded with responsive prefixers, see below example.

<div class="grid grid-example jc-center jc-end-m jc-start-l">
  <div class="col-10">
    <p class="p6 bc-primary c-light ta-center">.jc-center.jc-end-m.jc-start-l</p>
  </div>
</div>

``` html
<div class="grid jc-center jc-end-m jc-start-l"></div>
```

<div class="grid grid-example ai-center ai-end-m ai-start-l mt-small" style="height: 8rem">
  <div class="col-10">
    <p class="p6 bc-primary c-light ta-center">.ai-center.ai-end-m.ai-start-l</p>
  </div>
</div>

``` html
<div class="grid ai-center ai-end-m ai-start-l"></div>
```


## Column Order

### Usage
The order utilities classes from `.od-1` to `.od-6` are used to backward column orders and from `.on-1` to `.on-6` are used to forward column orders. The `on` is short for negative order.  

<div class="grid grid-example">
  <div class="col-6 od-6">
    <p class="p6 bc-danger c-light ta-center">.od-6</p>
  </div>
  <div class="col-6 od-5">
    <p class="p6 bc-danger c-light ta-center">.od-5</p>
  </div>
  <div class="col-6 od-4">
    <p class="p6 bc-danger c-light ta-center">.od-4</p>
  </div>
  <div class="col-6 od-3">
    <p class="p6 bc-danger c-light ta-center">.od-3</p>
  </div>
  <div class="col-6 od-2">
    <p class="p6 bc-danger c-light ta-center">.od-2</p>
  </div>
  <div class="col-6 od-1">
    <p class="p6 bc-danger c-light ta-center">.od-1</p>
  </div>
  <div class="col-6 on-1">
    <p class="p6 bc-primary c-light ta-center">.on-1</p>
  </div>
  <div class="col-6 on-2">
    <p class="p6 bc-primary c-light ta-center">.on-2</p>
  </div>
  <div class="col-6 on-3">
    <p class="p6 bc-primary c-light ta-center">.on-3</p>
  </div>
  <div class="col-6 on-4">
    <p class="p6 bc-primary c-light ta-center">.on-4</p>
  </div>
  <div class="col-6 on-5">
    <p class="p6 bc-primary c-light ta-center">.on-5</p>
  </div>
  <div class="col-6 on-6">
    <p class="p6 bc-primary c-light ta-center">.on-6</p>
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


### Responsive Column Order
Order utilities are extended with breakpoints prefixers, see how to control column order responsively.

<div class="grid grid-example">
  <div class="col-12 od-2 on-1-m od-1-l">
    <p class="p6 bc-primary c-light ta-center">.od-2.on-1-m.od-1-l</p>
  </div>
  <div class="col-12 od-1 od-2-m on-1-l">
    <p class="p6 bc-danger c-light ta-center">.od-1.od-2-m.on-1-l</p>
  </div>
  <div class="col-12 on-1 od-1-m od-2-l">
    <p class="p6 bc-light ta-center">.on-1.od-1-m.od-2-l</p>
  </div>
</div>

``` html
<div class="grid grid-example">
  <div class="col-12 od-2 on-1-m od-1-l"></div>
  <div class="col-12 od-1 od-2-m on-1-l"></div>
  <div class="col-12 on-1 od-1-m od-2-l"></div>
</div>
```


## Column Breaker
You can break columns in newline with a `hr` element.

<div class="grid grid-example">
  <div class="col-6">
    <p class="bc-primary c-light ta-center">.col-6</p>
  </div>
  <hr>
  <div class="col-6">
    <p class="bc-primary c-light ta-center">.col-6</p>
  </div>
</div>

``` html
<div class="grid">
  <div class="col-6"></div>
  <hr>
  <div class="col-6"></div>
</div>
```



## Gutterless Grid
If you don't want the horizontal padding in grid columns, you can use gutterless grid.
Just use the class `.grid-edge` instead of `.grid`.

<div class="grid-edge grid-example">
  <div class="col-auto">
    <p class="bc-primary c-light ta-center">.grid-edge .col-auto</p>
  </div>
  <div class="col-auto">
    <p class="bc-danger c-light ta-center">.grid-edge .col-auto</p>
  </div>
</div>

``` html
<div class="grid-edge"></div>
```


## Nested Grid
Grid can be nested, see below example.

<div class="grid grid-example">
  <div class="col-6">
    <p class="bc-primary c-light ta-center">.grid .col-6</p>
  </div>
  <div class="col-12">
    <div class="grid">
      <div class="col-6 m-none">
        <p class="bc-danger c-light ta-center">.grid .col-12 .grid .col-6</p>
      </div>
    </div>
  </div>
  <div class="col-10">
    <p class="bc-primary c-light ta-center">.grid .col-10</p>
  </div>  
  <div class="col-10">
    <div class="grid">
      <div class="col-6 m-none">
        <p class="bc-danger c-light ta-center">.grid .col-10 .grid .col-6</p>
      </div>
    </div>
  </div>
</div>

``` html
<div class="grid">
  <div class="col-6"></div>
  <div class="col-12">
    <div class="grid">
      <div class="col-6"></div>
    </div>
  </div>
  <div class="col-10"></div>  
  <div class="col-10">
    <div class="grid">
      <div class="col-6"></div>
    </div>
  </div>
</div>
```

<div class="grid grid-example mt-medium">
  <div class="col-12">
    <p class="bc-primary ta-center c-light">.grid .col-12</p>
  </div>
  <div class="col-12">
    <div class="grid-edge">
      <div class="col-12 m-none">
        <p class="bc-danger ta-center c-light">.grid .col-12 .grid-edge .col-12</p>
      </div>
    </div>
  </div>
</div>

``` html
<div class="grid">
  <div class="col-12"></div>
  <div class="col-12">
    <div class="grid-edge">
      <div class="col-12"></div>
    </div>
  </div>
</div>
```

<div class="grid-edge grid-example mt-medium">
  <div class="col-12">
    <p class="bc-primary ta-center c-light">.grid-edge .col-12</p>
  </div>
  <div class="col-12">
    <div class="grid">
      <div class="col-12 m-none">
        <p class="bc-danger ta-center c-light">.grid-edge .col-12 .grid .col-12</p>
      </div>
    </div>
  </div>
</div>

``` html
<div class="grid-edge">
  <div class="col-12"></div>
  <div class="col-12">
    <div class="grid">
      <div class="col-12"></div>
    </div>
  </div>
</div>
```



## Sass Variables

``` sass
$grid-columns: 12 !default
```
Column counts of grid. Value should be number.
{: .mb-small}

``` sass
$grid-gutter-width-rem: $space-medium-rem !default
```
Horizontal padding with of each grid column. Value should be number.