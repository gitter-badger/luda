``` sass
$typography-main: constant-get(typography-stacks, sans-serif) !default
```
Set the font family of body texts.
{: .mb-small}

``` sass
$typography-main-baseline-offset-ratio: constant-get(baseline-offset-ratios, "Helvetica Neue") !default
```
Set the baseline offset ratio of body texts for better baseline alignment.
{: .mb-small}

``` sass
$typography-main-size-px: 14px !default
```
Set the font size of body texts. We don't use the value of this variable to set the `font-size` property of body directly, a calculated `rem` value will be used.
{: .mb-small}

``` sass
$typography-main-line-height-ratio: 26 / 14 !default
```
Set the line height of body texts. The height of baseline is calculated through this variable and the `$typography-main-size-px` variable.
{: .mb-small}

``` sass
$typography-main-size-level: 5 !default
```
Specify the font size level of body texts. The value must be an integer between 1 and 6.
{: .mb-small}

``` sass
$typography-size-scale-ratio: constant-get(scale-ratios, minor-third) !default
```
Set the scale ratio of texts. Different level font sizes are calculated through this variable and the `$typography-main-size-level` variable.
{: .mb-small}

``` sass
$typography-main-color: $color-main !default
```
Set the color of body texts.