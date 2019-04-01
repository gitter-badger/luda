---
title: Grid
description: With Luda grid, you can create mobile-first responsive layout fast and easily.
---


## Column Widths
Luda offers a 12 columns grid by default, column widths can be spefic or auto-adjusted. Each column has `1rem` padding in the left and right, and they must be wrapped in a container with the `.grid` class. You can preview grid layouts in the below examples.

### Specfic Column Widths
The class `.col-*` means this column occupies `*/12` of the grid's horizontal space.
Add the classes from `.col-1` to `.col-12` to create columns with specfic widths.
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
All specfic column width classes are extended with responsive postfixes. For example, the `.col-1-m` class means the column width will be `1/12` of the grid's width when screen width matches the `m` breakpoint. For large screens, the breakpoint postfix is `l`.

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


### Auto-Adjusted Column Width
The class `.col-auto` is used to make a column's width auto adjusted. The width of an auto-adjusted column depends on the availiable horizontal space of the grid, all the availiable space will be occupied.

<div class="grid grid-example">
  <div class="col-4"><p class="p6 bc-primary c-light ta-center">.col-4</p></div>
  <div class="col-auto"><p class="p6 bc-primary c-light ta-center">.col-auto</p></div>
</div>
``` html
<div class="grid">
  <div class="col-4"></div>
  <!-- Occupies the left 8/12 horizontal space -->
  <div class="col-auto"></div>
</div>
```



## Column Offsets
Like column widths, column offsets can also be specfic or auto-adjusted. Let's see how to control column offsets with offset and margin utility classes.

### Specfic Column Offsets
The specfic offset distances are from 1 column with to 11 columns width. You can add the offset utiltiy classes from `.offset-1` to `.offset-11` to control column offsets specificly.

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


### Auto-Adjusted Column Offsets
The margin utility classes `.mx-auto`, `.mr-auto` and `.ml-auto` can also be used to control column offsets. The `.mx-auto` class makes a column aligned in the horizontal center of the grid, and the `.mr-auto` and `.ml-auto` classes makes a column algined in the left or right of the grid.

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
The offset and margin utility classes are both responsive, responsive offsets can be easily controlled by adding breakpoint postfixes. Let's see the below examples.

<div class="grid grid-example">
  <div class="col-9 offset-3 offset-2-m offset-1-l">
    <p class="p6 bc-primary c-light ta-center">.offset-3.offset-2-m.offset-1-l</p>
  </div>
  <div class="col-9 ml-auto ml-none-m ml-auto-l">
    <p class="p6 bc-primary c-light ta-center">.ml-auto.ml-none-m.ml-auto-l</p>
  </div>
</div>



## Column Alignment


### Horizontal Alignment
Horizontal alignment of columns can be controlled by adding the flex utility classes `.jc-start`, `.jc-center`, `.jc-end`, `.jc-around` and `.jc-between`.


#### Align to Horizontal Center
Add the class `.jc-center` to the grid to position columns in the horizontal center.

<div class="grid grid-example jc-center">
  <div class="col-10">
    <p class="p6 bc-primary c-light ta-center">Center</p>
  </div>
</div>
``` html
<div class="grid jc-center"></div>
```

#### Align to Horizontal End
Add the class `.jc-end` to the grid to position columns in the right of horizontal.

<div class="grid grid-example jc-end">
  <div class="col-10">
    <p class="p6 bc-primary c-light ta-center">End</p>
  </div>
</div>
``` html
<div class="grid jc-end"></div>
```

#### Align With Horizontal Space Around Columns
Add the class `.jc-around` to the grid to position columns with extra horizontal space around.

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

#### Align With Horizontal Space Between Columns
Add the class `.jc-between` to the grid to position columns with extra horizontal space between each other and the grid's edges.

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



### Vertical Alignment
Vertical alignment of columns can be controlled by adding the flex utility classes `.ai-start`, `.ai-center` and `.ai-end`. You can also control spefic column vertical alignment with the classes `.as-start`, `.as-center` and `.as-end`.

#### Align in Vertical Center
Add the class `.ai-center` to the grid to position columns in the vertical center.

<div class="grid grid-example ai-center" style="height: 8rem">
  <div class="col-12">
    <p class="p6 bc-primary c-light ta-center">Center</p>
  </div>
</div>
``` html
<div class="grid ai-center"></div>
```
{: .mb-small}

If you just want specfic columns to be aligned in the vertical center, you can add the class `.as-center` to these columns.

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
Add the class `.ai-end` to the grid to position columns in the bottom of the grid.

<div class="grid grid-example ai-end" style="height: 8rem">
  <div class="col-12">
    <p class="p6 bc-primary c-light ta-center">End</p>
  </div>
</div>
``` html
<div class="grid ai-end"></div>
```
{: .mb-small}

If you want specfic columns to be aligned in the bottom, just add the class `.as-end` to these columns.

<div class="grid grid-example" style="height: 8rem">
  <div class="col-auto">
    <p class="p6 bc-primary c-light ta-center">Start</p>
  </div>
  <div class="col-auto as-end">
    <p class="p6 bc-primary c-light ta-center">End</p>
  </div>
</div>
``` html
<div class="grid">
  <div class="col-auto as-end"></div>
</div>
```


### Responsive Alignment Control

The flex and margin utility classes are extended with responsive postfixes, see the below examples.

<div class="grid grid-example jc-center jc-end-m jc-start-l">
  <div class="col-10">
    <p class="p6 bc-primary c-light ta-center">.jc-center.jc-end-m.jc-start-l</p>
  </div>
</div>

``` html
<!-- Align columns in the center of horizontal for small screens, in the right for middle size screens and in the left for large screens. -->
<div class="grid jc-center jc-end-m jc-start-l"></div>
```

<div class="grid grid-example ai-center ai-end-m ai-start-l mt-small" style="height: 8rem">
  <div class="col-10">
    <p class="p6 bc-primary c-light ta-center">.ai-center.ai-end-m.ai-start-l</p>
  </div>
</div>

``` html
<!-- Align columns in the center of vertical for small screens, in the bottom for middle size screens and in the top for large screens. -->
<div class="grid ai-center ai-end-m ai-start-l"></div>
```


## Column Orders

### Usage
Grid columns are not sorted by default, they appear just as the order in html. But if you want to change the order a column appears, you need the order utility classes.

The order utility classes from `.od-1` to `.od-6` are used to move columns after unsorted columns, and from `.on-1` to `.on-6` are used to move columns before unsorted columns. The `on` is short for "negative order".

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


### Responsive Column Orders
The order utility classes are extended with breakpoint postfixes, see how to control column order responsively in the blow examples.

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
Columns will not be aligned to a new line unless the grid's horizontal space is not enough. If you need break a column in a newline by force, insert a `hr` element before the column. Let's see the below example.

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
  <!-- The left space is enough, but use a <hr> to break the column in a newline. -->
  <div class="col-6"></div>
</div>
```



## Grid Without Gutters
As metioned at the begining, there're `1rem` padding in the left and right of grid columns, but if you don't need the paddings, you can replace the container's `.grid` class by the `.grid-edge` class.

<div class="grid-edge grid-example">
  <div class="col-auto">
    <p class="bc-primary c-light ta-center">.grid-edge .col-auto</p>
  </div>
  <div class="col-auto">
    <p class="bc-danger c-light ta-center">.grid-edge .col-auto</p>
  </div>
</div>

``` html
<!-- Columns in this grid has no horizontal paddings. -->
<div class="grid-edge"></div>
```


## Nested Grid
Grid can be nested, nested grids should be wrapped in a parent grid's column. See the below examples for details.

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
    <!-- A nested grid -->
    <div class="grid">
      <div class="col-6"></div>
    </div>
  </div>
  <div class="col-10"></div>  
  <div class="col-10">
    <!-- A nother nested grid -->
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
    <!-- A nested grid hasn't column getters -->
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
    <!-- A grid has column getters nested in another grid has not column getters -->
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