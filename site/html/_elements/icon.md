---
title: Icon
description: Icons have become inseparable part of visual interfaces for their power to create effective visual communication. In Luda, you can use CSS icons, font icons, svg icons and more.
---


## A Caution for Including Thirdparty Icon Libraries
If you want to include thridparty icon libraries, make sure the librarys' CSS files are included before Luda's CSS file. So the icon styles will be consistent.



## Built-in CSS Icons
Luda includes some most widely used icons by default, they're written in pure CSS and super easy to use, just add the `.ico.ico-*` classes to an inline element.

Of course, you can include thirdparty CSS icon libraries, but remember to add the libraries' icon classes as well.

All built-in CSS icons are listed in below gallery.

<p class="example my-none">
  <span class="mr-small mb-small ws-nowrap d-inline-block va-top ta-center" style="width:8em">
    <i class="ico ico-left"></i><br>
    .ico.ico-left
  </span>
  <span class="mr-small mb-small ws-nowrap d-inline-block va-top ta-center" style="width:8em">
    <i class="ico ico-right"></i><br>
    .ico.ico-right
  </span>
  <span class="mr-small mb-small ws-nowrap d-inline-block va-top ta-center" style="width:8em">
    <i class="ico ico-up"></i><br>
    .ico.ico-up
  </span>
  <span class="mr-small mb-small ws-nowrap d-inline-block va-top ta-center" style="width:8em">
    <i class="ico ico-down"></i><br>
    .ico.ico-down
  </span>
  <span class="mr-small mb-small ws-nowrap d-inline-block va-top ta-center" style="width:8em">
    <i class="ico ico-plus"></i><br>
    .ico.ico-plus
  </span>
  <span class="mr-small mb-small ws-nowrap d-inline-block va-top ta-center" style="width:8em">
    <i class="ico ico-cross"></i><br>
    .ico.ico-cross
  </span>
  <span class="mr-small mb-small ws-nowrap d-inline-block va-top ta-center" style="width:8em">
    <i class="ico ico-menu"></i><br>
    .ico.ico-menu
  </span>
  <span class="mr-small mb-small ws-nowrap d-inline-block va-top ta-center" style="width:8em">
    <i class="ico ico-search"></i><br>
    .ico.ico-search
  </span>
</p>

``` html
<i class="ico ico-left"></i>
<i class="ico ico-right"></i>
<i class="ico ico-up"></i>
<i class="ico ico-down"></i>
<i class="ico ico-plus"></i>
<i class="ico ico-cross"></i>
<i class="ico ico-menu"></i>
<i class="ico ico-search"></i>
```


## Font Icons
If you want to use icon fonts, you need include them by yourself, Luda doesn't provide any built-in icon fonts.

There's no big difference to use font icons than CSS icons in Luda, just add the `.ico` class and your font icon classes to the elements. Let's use a material font icon for example.

<p class="example mt-none">
  <span class="ws-nowrap d-inline-block va-top ta-center" style="width:8em">
    <i class="ico material-icons">backspace</i><br>
  .ico.material-icons
  </span>
</p>

``` html
<!-- Add the .ico class and material icon font class .material-icons to show a material icon -->
<i class="ico material-icons">backspace</i>
```


## Svg Icons and Icon Sprites
For svg icons and icon sprites, just add the `.ico` class to the elements like `<svg>` or other elements for showing icons.

If the thirdparty icon library included in your project need extra classes, don't forget to add them too.

<p class="example mt-none">
  <span class="ws-nowrap d-inline-block va-top ta-center">
    <svg class="ico" viewBox="0 0 31.49733935396907 50"><g transform="translate(1.30719096416063e-7 0) scale(0.5482756289742787)"><g><path d="M56.417 47.893c-.048-.462-.697-1.339-1.71-2.38a2.221 2.221 0 0 0-.672-.666c-3.085-2.926-8.494-6.677-12.122-6.677-5.275 0-11.113 1.214-13.185 1.214-2.072 0-8.949-1.984-9.891-1.795-.941.189-5.651 1.241-5.651 1.241l.378-5.636h7.63s3.862-1.762 0-4.21c-3.862-2.451-6.032-5.922-8.009-5.356-1.977.565.944-3.948.944-3.948s5.464-2.117 6.217-3.341c.752-1.224-3.674 1.581-5.369 1.392-1.695-.189-.471-2.178-.471-2.178s4.991-6.976 11.397-6.693c6.405.283-1.507-1.039-2.072-1.039-.565 0 1.224-2.824 3.202-3.201s-.564-1.984-4.144 1.597c-3.58 3.579-3.297 4.24-5.275 4.051-1.978-.189.66-4.239 1.884-5.086 1.224-.848.47-1.463-.188-1.25-.659.213-3.296 3.888-3.767 6.336-.472 2.448-2.356 4.239-2.356 4.239l-.687.565-.537.674-.471-.551h-.47s-1.224 4.13-2.544 4.694c-1.319.565-2.261-1.985-2.261-1.985s.378-1.041 2.261-3.112c1.884-2.072 3.296-4.288 3.296-4.288l-.283-.966-.941 1.024-3.58 3.572s-3.484 1.975-1.601-1.792c1.883-3.769 2.354-6.405 4.427-7.535 2.072-1.13 5.181-3.3 5.181-3.3L14.882.47l-1.035.754s-3.016 2.448-2.921 1.601c.096-.848.283-2.354.283-2.354L10.267 0l-.094 1.037-.189 1.601s-3.58 5.086-4.145 5.463c-.565.377-1.028-1.884-1.028-1.884s-1.043-1.129-1.043.66c0 1.79.754 2.166.754 2.166s-2.167 10.36 2.92 14.129c.015.012.027.024.042.035-.631.196-3.191 1.43-4.752 8.82C.941 40.505 0 44.178 0 44.178l1.46 3.485s2.237 7.065 3.932 7.536c1.696.471.837 7.817.837 7.817l.559 2.826-.026 5.747.632 7.632-.32 2.118-.304 5.469-.836 4.387H8.76s.399-1.751.399-2.692.421-1.853.421-1.853l1.057-14.121v-8.38l.945-.663 1.037 9.42.52.565-.447 13.752.104.378s-1.311 2.265-1.123 2.545c.188.281 2.075.85 2.923 0 .848-.85.496-1.98.496-1.98l-.186-.754.731-15.354V65.28l1.271-4.901s.07-1.318 2.236-1.318c2.165 0 11.056-1.413 13.317-2.543 2.26-1.13 2.89-1.037 2.89-1.037s2.199 0 2.952 2.261c.752 2.261 6.895 7.346 7.648 8.006.752.66 5.942 3.391 1.703 12.151s-1.595 5.559-3.668 8.29c-2.073 2.731-1.884 3.014-1.602 3.391.283.376 2.168.188 2.638.188.473 0 1.132-1.602 1.132-2.261s1.413-.377 1.602-1.13c.188-.753.228-3.014.228-3.014l.653-1.601v3.864l-.064.846s-2.811 4.198-1.586 4.124c1.223-.074 3.305.001 3.305.001s1.182-2.052.806-3.56.682-.848.682-.848l.769-9.326s1.513-6.406 2.833-8.007c1.319-1.6-1.88-3.297-2.068-3.673-.189-.376-4.804-6.31 0-13.846.094-.148.178-.287.264-.428l.146.008 1.958 5.109s1.766.386 1.766-1.968-.844-4.375-1.031-6.165zM7.659 23.354l-.029.049v-.075c.011.008.018.017.029.026z"></path></g></g></svg><br>
    svg icon
  </span>
</p>

``` html
<svg class="ico" viewBox="...">...</svg>
```


## Sass Variables

``` sass
$icon-size-em: 1.15em !default
```
Icon width and height size. Value should be number.
{: .mb-small}

``` sass
$icon-stroke-width: 2px !default
```
Line width for css icons. Value should be number.