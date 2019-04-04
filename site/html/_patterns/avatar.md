---
title: Avatar
description: Avatar can be used to show user photo and information.
---


## Vertical Avatar
To create a vertical avatar, add the class `.avatar-y` to a container, then wrap a photo and texts like the below example. 

{% capture avatar_y %}
<div class="avatar-y">
  <figure class="media">
    <img src="https://m.media-amazon.com/images/M/MV5BMTc5NjA5OTk4Ml5BMl5BanBnXkFtZTYwNzkyNzYz._V1_UX214_CR0,0,214,317_AL_.jpg">
  </figure>
  <div class="avatar-info">
    <p class="avatar-name">Sophie Marceau</p>
    <p class="avatar-description">2018/01/02 12:00</p>    
  </div>
</div>
{% endcapture %}
<div class="example">
  {{ avatar_y }}
</div>
``` html{{ avatar_y }}```


## Horizontal Avatar
If a horizontal avatar is prefered, replace the class `.avatar-y` with the class `.avatar-x`.

{% capture avatar_x %}
<div class="avatar-x">
  <figure class="media">
    <img src="https://m.media-amazon.com/images/M/MV5BMTc5NjA5OTk4Ml5BMl5BanBnXkFtZTYwNzkyNzYz._V1_UX214_CR0,0,214,317_AL_.jpg">
  </figure>
  <div class="avatar-info">
    <p class="avatar-name">Sophie Marceau</p>
    <p class="avatar-description">2018/01/02 12:00</p>    
  </div>
</div>
{% endcapture %}
<div class="example">
  {{ avatar_x }}
</div>
``` html{{ avatar_x }}```
{: .mt-small}



## Style Mofifiers

### Small{% include modifier.html %}
The class `.avatar-small` makes avatars smaller.

{% capture avatar_small %}
<div class="avatar-y avatar-small">
  <figure class="media">
    <img src="https://m.media-amazon.com/images/M/MV5BMTc5NjA5OTk4Ml5BMl5BanBnXkFtZTYwNzkyNzYz._V1_UX214_CR0,0,214,317_AL_.jpg">
  </figure>
  <div class="avatar-info">
    <p class="avatar-name">Sophie Marceau</p>
    <p class="avatar-description">2018/01/02 12:00</p>    
  </div>
</div>
<div class="avatar-x avatar-small">
  <figure class="media">
    <img src="https://m.media-amazon.com/images/M/MV5BMTc5NjA5OTk4Ml5BMl5BanBnXkFtZTYwNzkyNzYz._V1_UX214_CR0,0,214,317_AL_.jpg">
  </figure>
  <div class="avatar-info">
    <p class="avatar-name">Sophie Marceau</p>
    <p class="avatar-description">2018/01/02 12:00</p>    
  </div>
</div>
{% endcapture %}
<div class="example">
  {{ avatar_small }}
</div>
``` html{{ avatar_small }}```


### Large{% include modifier.html %}
Oppsite, the class `.avatar-lager` makes avatars larger.

{% capture avatar_large %}
<div class="avatar-y avatar-large">
  <figure class="media">
    <img src="https://m.media-amazon.com/images/M/MV5BMTc5NjA5OTk4Ml5BMl5BanBnXkFtZTYwNzkyNzYz._V1_UX214_CR0,0,214,317_AL_.jpg">
  </figure>
  <div class="avatar-info">
    <p class="avatar-name">Sophie Marceau</p>
    <p class="avatar-description">2018/01/02 12:00</p>    
  </div>
</div>
<div class="avatar-x avatar-large">
  <figure class="media">
    <img src="https://m.media-amazon.com/images/M/MV5BMTc5NjA5OTk4Ml5BMl5BanBnXkFtZTYwNzkyNzYz._V1_UX214_CR0,0,214,317_AL_.jpg">
  </figure>
  <div class="avatar-info">
    <p class="avatar-name">Sophie Marceau</p>
    <p class="avatar-description">2018/01/02 12:00</p>    
  </div>
</div>
{% endcapture %}
<div class="example">
  {{ avatar_large }}
</div>
``` html{{ avatar_large }}```



## Sass Variables

### Sizes
``` sass
  $avatar-image-size-rem: 3rem !default
```
Description.
{: .mb-small}

``` sass
  $avatar-large-image-size-rem: 6rem !default
```
Description.
{: .mb-small}

``` sass
  $avatar-small-image-size-rem: 2rem !default
```
Description.
{: .mb-small}

``` sass
  $avatar-info-height-rem: 3rem !default
```
Description.
{: .mb-small}

``` sass
  $avatar-info-padding-top-rem: 0.3rem !default
```
Description.
{: .mb-small}

``` sass
  $avatar-info-padding-left-rem: 0.5rem !default
```
Description.
{: .mb-small}

``` sass
  $avatar-large-info-height-rem: 4rem !default
```
Description.
{: .mb-small}

``` sass
  $avatar-large-info-padding-top-rem: 0.6rem !default
```
Description.
{: .mb-small}

``` sass
  $avatar-large-info-padding-left-rem: 1rem !default
```
Description.
{: .mb-small}

``` sass
  $avatar-small-info-height-rem: null !default
```
Description.
{: .mb-small}

``` sass
  $avatar-small-info-padding-top-rem: null !default
```
Description.
{: .mb-small}

``` sass
  $avatar-small-info-padding-left-rem: null !default
```
Description.


### Typography

``` sass
  $avatar-name-typography-size-level: 5 !default
```
Description.
{: .mb-small}

``` sass
  $avatar-large-name-typography-size-level: 4 !default
```
Description.
{: .mb-small}

``` sass
  $avatar-small-name-typography-size-level: 6 !default
```
Description.
{: .mb-small}

``` sass
  $avatar-description-typography-size-level: 6 !default
```
Description.
{: .mb-small}

``` sass
  $avatar-large-description-typography-size-level: 5 !default
```
Description.
{: .mb-small}

``` sass
  $avatar-small-description-typography-size-level: null !default
```
Description.


### Others

``` sass
  $avatar-image-border-radius: 100% !default
```
Description.
{: .mb-small}

``` sass
  $avatar-default-image-background-size: 50% auto !default
```
Description.
{: .mb-small}

``` sass
  $avatar-default-image: svg-icon('<svg viewBox="..."><path fill="#fill" d="..."/></svg>', $line-color-muted) !default
```
Description.
{: .mb-small}

``` sass
  $avatar-background-color: $background-color-muted !default
```
Description.
{: .mb-small}

``` sass
  $avatar-name-color: $color-muted !default
```
Description.
{: .mb-small}

``` sass
  $avatar-description-color: $avatar-name-color !default
```
  Description.