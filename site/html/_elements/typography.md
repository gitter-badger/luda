---
title: Typography
description: Learn how to use headings, paragraphs and more kind of typography in Luda.
---

## Headings

### Heading Global Styles
Heading tags from `h1` to `h6` are global styled, see below examples.
{% capture headings %}
<h1>Heading h1</h1>
<h2>Heading h2</h2>
<h3>Heading h3</h3>
<h4>Heading h4</h4>
<h5>Heading h5</h5>
<h6>Heading h6</h6>
{% endcapture %}
{{ headings }}
``` html{{ headings }}```
{: .mt-small}

### Heading Classes
You can also use heading classes from `.h1` to `.h6` to create heading like text.
{% capture heading_classes %}
<span class="h1">Heading class .h1</span>
<span class="h2">Heading class .h2</span>
<span class="h3">Heading class .h3</span>
<span class="h4">Heading class .h4</span>
<span class="h5">Heading class .h5</span>
<span class="h6">Heading class .h6</span>
{% endcapture %}
{{ heading_classes }}
``` html{{ heading_classes }}```
{: .mt-small}


## Paragraph

### Paragraph Global style
The `p` tag is global styled, see below example.

{% capture paragraph %}
<p>
  Once upon time a girl named Cinderella lived with her stepmother and two stepsisters.  Poor Cinderella had to work hard all day long so the others could rest. It was she who had to wake up each morning when it was still dark and cold to start the fire.  It was she who cooked the meals. It was she who kept the fire going. The poor girl could not stay clean, from all the ashes and cinders by the fire.
</p>
<p>
  One day, big news came to town.  The King and Queen were going to have a ball!  It was time for the Prince to find a bride. All of the young ladies in the land were invited to come.  They were wild with joy! They would wear their most beautiful gown and fix their hair extra nice. Maybe the prince would like them!
</p>
{% endcapture %}
{{ paragraph }}
``` html{{ paragraph }}```


### Paragraph Classes
Just like heading classes, you can use `.p1` to `p6` to create paragraph like text.

{% capture paragraph_classes %}
<span class="p1">Paragraph class .p1</span>
<span class="p2">Paragraph class .p2</span>
<span class="p3">Paragraph class .p3</span>
<span class="p4">Paragraph class .p4</span>
<span class="p5">Paragraph class .p5</span>
<span class="p6">Paragraph class .p6</span>
{% endcapture %}
{{ paragraph_classes }}
``` html{{ paragraph_classes }}```
{: .mt-small}


## Inline Modifier{% include modifier.html %}
Sometimes texts with different font size need be nested, to ensure baseline alignment, the `.typo-inline` modifier is created. See below example.

{% capture inline %}
<p class="baseline">
  Here are
  <span class="p2 typo-inline">some nested inline texts</span>.
</p>
{% endcapture %}
{{ inline }}
``` html{{ inline }}```



## Code

### Inline Code
The `code` tag, `samp` tag and `kbd` tag are global styled.
{% capture inline_code %}
<p>
  See how inline code looks
  <code>code</code>,
  <code>samp</code>,
  <code>kbd</code>
</p>
{% endcapture %}
{{ inline_code }}
``` html{{ inline_code }}```

### Code Block
To create a code block, add the class `.code` to a `pre` tag and nest `code` tag inside.
{% capture code_block %}
<pre class="code">
<code>
  class DocumentationController
    private
    def _set_items
      @generals = @@generals
      @behaviours = @@behaviours
      @elements = @@elements
      @collections = @@collections
      @utilities = @@utilities
    end
  end
</code>
</pre>
{% endcapture %}
{{ code_block }}
``` html{{ code_block }}```
{: .mt-small}




## Quote

### Inline Quote
The `q` tag and the `cite` tag are global styled. See below example.

{% capture inline_quote %}
<p>
  Avian carriers can provide high delay, low throughput,
  <q>This is because of the 3Dether space available to the carriers</q>,
  in contrast to the 1D ether used by
  <cite>IEEE802.3</cite>.
</p>
{% endcapture %}
{{ inline_quote }}
``` html{{ inline_quote }}```


### Blockquote
To create a blockquote, add the class `.quote` to `blockquote` tag, and nest paragraphs and footer.
{% capture blockquote %}
<blockquote class="quote" cite="https://tools.ietf.org/html/rfc1149">
  <p>
    Avian carriers can provide high delay, low throughput, and low altitude service.  The
    connection topology is limited to a single point-to-point path for each carrier, used with
    standard carriers, but many carriers can be used without significant interference with each other,
    outside of early spring.  This is because of the 3D ether space available to the carriers, in contrast
    to the 1D ether used by IEEE802.3.  The carriers have an intrinsic collision avoidance system, which
    increases availability.
  </p>
  <footer class="p5">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
{% endcapture %}
{{ blockquote }}
``` html{{ blockquote }}```


## Link

### Link Global Style
The `a` tag is global styled.
<p><a href="#" data-turbolinks="false">This is a link.</a></p>
``` html
<a href="#">This is a link.</a>
```

### Light Link
For using in dark background, add the class `.link-light` to change link color.
<p class="bc-dark"><a class="link-light" href="#" data-turbolinks="false">This is a light link.</a></p>
``` html
<a class="link-light" href="#">This is a light link.</a>
```
{: .mt-small}

## List

### Unordered List
{% capture ul %}
<ul>
  <li>Unordered list item one</li>
  <li>Unordered list item two</li>
  <li>Unordered list item three</li>
</ul>
{% endcapture %}
{{ ul }}
``` html{{ ul }}```
{: .mt-small}


### Ordered List
{% capture ol %}
<ol>
  <li>Ordered list item one</li>
  <li>Ordered list item two</li>
  <li>Ordered list item three</li>
</ol>
{% endcapture %}
{{ ol }}
``` html{{ ol }}```
{: .mt-small}

### Definition List
{% capture dl %}
<dl>
  <dt>Titled one</dt>
  <dd>Definition list item one</dd>
  <dt>Titled two</dt>
  <dd>Definition list item two</dd>
  <dt>Titled three</dt>
  <dd>Definition list item three</dd>
</dl>
{% endcapture %}
{{ dl }}
``` html{{ dl }}```
{: .mt-small}




## Others

<p class="mb-small">
  <b>Bold</b>&nbsp;&nbsp;
  <strong>Strong</strong>&nbsp;&nbsp;
  <ins>Inserted</ins>&nbsp;&nbsp;
  <u>Underline</u>&nbsp;&nbsp;
  <em>Emphasis</em>&nbsp;&nbsp;
  <i>Italic</i>&nbsp;&nbsp;
  <del>Delete</del>&nbsp;&nbsp;
  <s>Stroke</s>&nbsp;&nbsp;  
  <span>Text <sub>Sub</sub></span>&nbsp;&nbsp;
  <span>Text <sup>Sup</sup></span>&nbsp;&nbsp;
  <abbr title="abbr">abbr</abbr>&nbsp;&nbsp;
  <mark>Mark</mark>&nbsp;&nbsp;
</p>
``` html
<p>
  <b>Bold</b>
  <strong>Strong</strong>
  <ins>Inserted</ins>
  <u>Underline</u>
  <em>Emphasis</em>
  <i>Italic</i>
  <del>Delete</del>
  <s>Stroke</s>  
  <span>Text <sub>Sub</sub></span>
  <span>Text <sup>Sup</sup></span>
  <abbr title="abbr">abbr</abbr>
  <mark>Mark</mark>
</p>
```



## Sass Mixins

``` sass
+font-face($family: null, $style: normal, $weight: 400, $locals: null, $urls: null, $unicodes: null)
```
This mixin is used to import web fonts. `$locals`, `$urls` and `$unicodes` should be list.




## Sass Variables

### Global
``` sass
$typography-size-scale-ratio: constant-get(scale-ratios, minor-third) !default
```
Description.
{: .mb-small}

``` sass
$typography-main-size-px: 14px !default
```
Description.
{: .mb-small}

``` sass
$typography-main-size-level: 5 !default
```
Description.
{: .mb-small}

``` sass
$typography-main-line-height-ratio: 26 / 14 !default
```
Description.


### Paragraph

``` sass
$typography-main: constant-get(typography-stacks, sans-serif) !default
```
Description.
{: .mb-small}

``` sass
$typography-main-baseline-offset-ratio: constant-get(baseline-offset-ratios, "Helvetica Neue") !default
```
Description.
{: .mb-small}

``` sass
$typography-main-color: $color-main !default
```
Description.


### Heading
``` sass
$typography-lead: null !default
```
Description.
{: .mb-small}

``` sass
$typography-lead-baseline-offset-ratio: $typography-main-baseline-offset-ratio !default
```
Description.
{: .mb-small}

``` sass
$typography-lead-color: $color-emphasis !default
```
Description.
{: .mb-small}

``` sass
$typography-lead-font-weight: 700 !default
```
Description.
{: .mb-small}


### Code
``` sass
$typography-code: constant-get(typography-stacks, code) !default
```
Description.
{: .mb-small}

``` sass
$typography-code-baseline-offset-ratio: constant-get(baseline-offset-ratios, "Courier New") !default
```
Description.
{: .mb-small}

``` sass
$typography-block-code-size-level: 6 !default
```
Description.
{: .mb-small}

``` sass
$typography-code-padding-em: 0.2em 0.4em !default
```
Description.
{: .mb-small}

``` sass
$typography-code-background: $background-muted !default
```
Description.
{: .mb-small}

``` sass
$typography-code-color: $color-main !default
```
Description.
{: .mb-small}

``` sass
$typography-code-border-radius: null !default
```
Description.
{: .mb-small}

``` sass
$typography-code-block-padding-rem: 0 $space-medium-rem !default
```
Description.


### Quote
``` sass
$typography-quote: null !default
```
Description.
{: .mb-small}

``` sass
$typography-quote-baseline-offset-ratio: $typography-main-baseline-offset-ratio !default
```
Description.
{: .mb-small}

``` sass
$typography-block-quote-size-level: 4 !default
```
Description.
{: .mb-small}

``` sass
$typography-cite-color: $color-muted !default
```
Description.
{: .mb-small}

``` sass
$typography-quote-block-padding-rem: 3 * $space-small-rem $space-large-rem $space-medium-rem !default
```
Description.
{: .mb-small}

``` sass
$typography-quote-block-p-margin-rem: 0 auto $space-small-rem !default
```
Description.
{: .mb-small}

``` sass
$typography-quote-block-cite-lead-height: 1px !default
```
Description.


### Link
``` sass
$typography-link-text-decoration: underline !default
```
Description.
{: .mb-small}

``` sass
$typography-link-hover-text-decoration: null !default
```
Description.
{: .mb-small}

``` sass
$typography-link-active-text-decoration: null !default
```
Description.
{: .mb-small}

``` sass
$typography-link-color: $color-main !default
```
Description.
{: .mb-small}

``` sass
$typography-link-hover-color: $color-emphasis !default
```
Description.
{: .mb-small}

``` sass
$typography-link-active-color: null !default
```
Description.
{: .mb-small}

``` sass
$typography-link-light-color: $color-inverse-main !default
```
Description.
{: .mb-small}

``` sass
$typography-link-light-hover-color: $color-inverse-emphasis !default
```
Description.
{: .mb-small}

``` sass
$typography-link-light-active-color: null !default
```
Description.


### List
``` sass
$typography-list-nested-padding-em: 0 0 0 strip-unit($space-medium-rem) * 1em !default
```
Description.


### Mark
``` sass
$typography-mark-padding-em: 0.2em 0.4em !default
```
Description.
{: .mb-small}

``` sass
$typography-mark-background: $background-emphasis !default
```
Description.
{: .mb-small}

``` sass
$typography-mark-color: $color-primary !default
```
Description.
{: .mb-small}

``` sass
$typography-mark-border-radius: $border-radius-main !default
```
Description.


### Others
``` sass
$typography-sub-sup-size: 100% / $typography-size-scale-ratio !default
```
Description.
{: .mb-small}

``` sass
$typography-sub-bottom-offset-em: -0.25em !default
```
Description.
{: .mb-small}

``` sass
$typography-sup-top-offset-em: -0.5em !default
```
Description.