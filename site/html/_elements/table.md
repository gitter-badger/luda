---
title: Table
description: Table should be used for showing data in rows and columns.
---



## Striped Table
The default style of table is striped in Luda, this makes the rows easy to read, a scrollbar will show if the width of the table content is too much. To create a striped table, add the class `.table` to a block element like `<div>`, then wrap a `<table>` element inside.

<div class="table my-small">
  <table>
    <thead>
      <tr>
        <th>Company</th>
        <th>Founded</th>
        <th>Founders</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Google</td>
        <td>September 4, 1998</td>
        <td>Larry Page, Sergey Brin</td>
        <td>Menlo Park, California, United States</td>
      </tr>
      <tr>
        <td>Facebook</td>
        <td>February 2004</td>
        <td>Mark Zuckerberg, Eduardo Saverin...</td>
        <td>Cambridge, Massachusetts, United States</td>
      </tr>
      <tr>
        <td>GitHub</td>
        <td>2008</td>
        <td>Tom Preston-Werner</td>
        <td>San Francisco, California, United States</td>
      </tr>
      <tr>
        <td>Airbnb</td>
        <td>August 2008</td>
        <td>Brian Chesky, Joe Gebbia, Nathan Blecharczyk</td>
        <td>San Francisco, California</td>
      </tr>
    </tbody>
  </table>
</div>
``` html
<div class="table">
  <table>
    <thead>
      <tr><th></th><th></th><th></th><th></th></tr>
    </thead>
    <tbody>
      <tr><td></td><td></td><td></td><td></td></tr>
      <tr><td></td><td></td><td></td><td></td></tr>
    </tbody>
  </table>
</div>
```


## Borders

If you want to add surrounding borders and row deviders to a table, replace the container's `.table` class with the `.table-border` class.

<div class="table-border my-small">
  <table>
    <thead>
      <tr>
        <th>Company</th>
        <th>Founded</th>
        <th>Founders</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Google</td>
        <td>September 4, 1998</td>
        <td>Larry Page, Sergey Brin</td>
        <td>Menlo Park, California, United States</td>
      </tr>
      <tr>
        <td>Facebook</td>
        <td>February 2004</td>
        <td>Mark Zuckerberg, Eduardo Saverin...</td>
        <td>Cambridge, Massachusetts, United States</td>
      </tr>
      <tr>
        <td>GitHub</td>
        <td>2008</td>
        <td>Tom Preston-Werner</td>
        <td>San Francisco, California, United States</td>
      </tr>
      <tr>
        <td>Airbnb</td>
        <td>August 2008</td>
        <td>Brian Chesky, Joe Gebbia, Nathan Blecharczyk</td>
        <td>San Francisco, California</td>
      </tr>
    </tbody>
  </table>
</div>

``` html
<div class="table-border">
  <table>
    <thead>
      <tr><th></th><th></th><th></th><th></th></tr>
    </thead>
    <tbody>
      <tr><td></td><td></td><td></td><td></td></tr>
      <tr><td></td><td></td><td></td><td></td></tr>
    </tbody>
  </table>
</div>
```

## Style Modifiers

### No Wrap{% include modifier.html %}

A `.table` container with the class `.table-nowrap` will prevent table cell content breaking in newlines. Let's see the below example.

<div class="table table-nowrap my-small">
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Company</th>
        <th>Founded</th>
        <th>Founders</th>
        <th>Address</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><div class="fm fm-check"><input type="checkbox"></div></td>
        <td>Google</td>
        <td>September 4, 1998</td>
        <td>Larry Page, Sergey Brin</td>
        <td>Menlo Park, California, United States</td>
        <td><button class="btn btn-small btn-primary">Mark</button></td>
      </tr>
      <tr>
        <td><div class="fm fm-check"><input type="checkbox"></div></td>
        <td>Facebook</td>
        <td>February 2004</td>
        <td>Mark Zuckerberg, Eduardo Saverin, Dustin Moskovitz, Chris Hughes, Andrew McCollum</td>
        <td>Cambridge, Massachusetts, United States</td>
        <td><button class="btn btn-small btn-primary">Mark</button></td>
      </tr>
      <tr>
        <td><div class="fm fm-check"><input type="checkbox"></div></td>
        <td>GitHub</td>
        <td>2008</td>
        <td>Tom Preston-Werner</td>
        <td>San Francisco, California, United States</td>
        <td><button class="btn btn-small btn-primary">Mark</button></td>
      </tr>
      <tr>
        <td><div class="fm fm-check"><input type="checkbox"></div></td>
        <td>Airbnb</td>
        <td>August 2008</td>
        <td>Brian Chesky, Joe Gebbia, Nathan Blecharczyk</td>
        <td>San Francisco, California</td>
        <td><button class="btn btn-small btn-primary">Mark</button></td>
      </tr>
    </tbody>
  </table>
</div>

``` html
<div class="table table-nowrap">
  <table>
    <thead>
      <tr><th></th><th></th><th></th><th></th></tr>
    </thead>
    <tbody>
      <tr><td></td><td></td><td></td><td></td></tr>
      <tr><td></td><td></td><td></td><td></td></tr>
    </tbody>
  </table>
</div>
```

### Stripless{% include modifier.html %}
If you don't want a striped table, you can add the `.table-stripless` class to the `.table` container to remove the stripes of table rows.

<div class="table-border table-stripless my-small">
  <table>
    <thead>
      <tr>
        <th>Company</th>
        <th>Founded</th>
        <th>Founders</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Google</td>
        <td>September 4, 1998</td>
        <td>Larry Page, Sergey Brin</td>
        <td>Menlo Park, California, United States</td>
      </tr>
      <tr>
        <td>Facebook</td>
        <td>February 2004</td>
        <td>Mark Zuckerberg, Eduardo Saverin...</td>
        <td>Cambridge, Massachusetts, United States</td>
      </tr>
      <tr>
        <td>GitHub</td>
        <td>2008</td>
        <td>Tom Preston-Werner</td>
        <td>San Francisco, California, United States</td>
      </tr>
      <tr>
        <td>Airbnb</td>
        <td>August 2008</td>
        <td>Brian Chesky, Joe Gebbia, Nathan Blecharczyk</td>
        <td>San Francisco, California</td>
      </tr>
    </tbody>
  </table>
</div>

``` html
<div class="table-border table-stripless">
  <table>
    <thead>
      <tr><th></th><th></th><th></th><th></th></tr>
    </thead>
    <tbody>
      <tr><td></td><td></td><td></td><td></td></tr>
      <tr><td></td><td></td><td></td><td></td></tr>
    </tbody>
  </table>
</div>
```


### Hover{% include modifier.html %}
The `.table-hover` class enhances hovered table row styles, a highlight background color will show. Hover the rows in the below example to preview.

<div class="table table-hover my-small">
  <table>
    <thead>
      <tr>
        <th>Company</th>
        <th>Founded</th>
        <th>Founders</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Google</td>
        <td>September 4, 1998</td>
        <td>Larry Page, Sergey Brin</td>
        <td>Menlo Park, California, United States</td>
      </tr>
      <tr>
        <td>Facebook</td>
        <td>February 2004</td>
        <td>Mark Zuckerberg, Eduardo Saverin...</td>
        <td>Cambridge, Massachusetts, United States</td>
      </tr>
      <tr>
        <td>GitHub</td>
        <td>2008</td>
        <td>Tom Preston-Werner</td>
        <td>San Francisco, California, United States</td>
      </tr>
      <tr>
        <td>Airbnb</td>
        <td>August 2008</td>
        <td>Brian Chesky, Joe Gebbia, Nathan Blecharczyk</td>
        <td>San Francisco, California</td>
      </tr>
    </tbody>
  </table>
</div>

``` html
<div class="table table-hover">
  <table>
    <thead>
      <tr><th></th><th></th><th></th><th></th></tr>
    </thead>
    <tbody>
      <tr><td></td><td></td><td></td><td></td></tr>
      <tr><td></td><td></td><td></td><td></td></tr>
    </tbody>
  </table>
</div>
```



## Sass Variables

### Striped
``` sass
$table-head-background: $background-muted !default
```
Table head background.
{: .mb-small}

``` sass
$table-row-even-background: $background-muted !default
```
Even row background.
{: .mb-small}

``` sass
$table-row-odd-background: $background-main !default
```
Odd row background.
{: .mb-small}


### Borders
``` sass
$table-border-style: solid !default
```
Border table border style.
{: .mb-small}

``` sass
$table-border-width: 1px !default
```
Border table border width.
{: .mb-small}

``` sass
$table-border-color: $line-color-main !default
```
Border table border color.
{: .mb-small}

``` sass
$table-border-radius: null !default
```
Border table border radius.


### Hover
``` sass
$table-row-hover-background: $background-emphasis !default
```
Row background when hovered.
{: .mb-small}
``` sass
$table-row-hover-color: null !default
```
Row color when hovered.

### Others
``` sass
$table-cell-padding-rem: $space-small-rem !default
```
Table cell paddings.
{: .mb-small}

``` sass
$table-head-color: $color-emphasis !default
```
Table head font color.
{: .mb-small}

``` sass
$table-body-color: $color-main !default
```
Table body font color.