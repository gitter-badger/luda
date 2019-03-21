---
title: Media
description: Use media to show images, videos and more.
---



## Image

Wrap `img` tag in `.media` container to show an image.
{% capture image %}
<figure class="media">
  <img src="https://cdn.stocksnap.io/img-thumbs/960w/CTCNBFUFH8.jpg" alt="img">
</figure>
{% endcapture %}
{{ image }}
``` html{{ image }}```
{: .mt-small}


## Video
Wrap `video` tag in `.media` to show a video.
{% capture video %}
<div class="media">
  <video autoplay controls loop>
    <source type="video/webm" src="https://www.videvo.net/videvo_files/converted/2015_01/preview/Shimmering_Particles.mov84952.webm">
  </video>
</div>
{% endcapture %}
{{ video }}
``` html{{ video }}```
{: .mt-small}



## Responsive

Use size utilities and the class `.media-content` to control responsive media. The default ratio of `.media-content` is `16:9`.

### Responsive image
{: .mb-small}
{% capture responsive_image %}
<figure class="media w-100 w-66-m">
  <picture class="media-content">
    <source srcset="https://cdn.stocksnap.io/img-thumbs/960w/CTCNBFUFH8.jpg" media="(min-width: 600px)">
    <img src="https://cdn.stocksnap.io/img-thumbs/960w/CTCNBFUFH8.jpg" alt="img">
  </picture>
</figure>
{% endcapture %}
{{ responsive_image }}
``` html{{ responsive_image }}```
{: .mt-small}


### Responsive Video
{: .mb-small}
{% capture responsive_video %}
<div class="media w-100 w-66-m">
  <div class="media-content">
    <video autoplay controls loop>
      <source type="video/webm" src="https://www.videvo.net/videvo_files/converted/2015_01/preview/Shimmering_Particles.mov84952.webm">
    </video>
  </div>
</div>
{% endcapture %}
{{ responsive_video }}
``` html{{ responsive_video }}```
{: .mt-small}


### Responsive Video in Iframe
{: .mb-small}
{% capture responsive_iframe %}
<div class="media w-100 w-66-m">
  <div class="media-content">
    <iframe allowfullscreen allow="autoplay; encrypted-media" src="https://www.youtube.com/embed/izGwDsrQ1eQ"></iframe>
  </div>
</div>
{% endcapture %}
{{ responsive_iframe }}
``` html{{ responsive_iframe }}```
{: .mt-small}


### Radio 1by1
You can change responsive video ratio to `1:1` by resplace the class `.media-content` with `.media-content-1by-1`.

Responsive image with radio `1:1`.
{% capture one_by_one_image %}
<figure class="media w-100 w-66-m">
  <picture class="media-content-1by1">
    <source srcset="https://cdn.stocksnap.io/img-thumbs/960w/CTCNBFUFH8.jpg" media="(min-width: 600px)">
    <img src="https://cdn.stocksnap.io/img-thumbs/960w/CTCNBFUFH8.jpg" alt="img">
  </picture>
</figure>
{% endcapture %}
{{ one_by_one_image }}
``` html{{ one_by_one_image }}```
{: .my-small}

Responsive video with ratio `1:1`.
{% capture one_by_one_video %}
<div class="media w-100 w-66-m">
  <div class="media-content-1by1">
    <video autoplay controls loop>
      <source type="video/webm" src="https://www.videvo.net/videvo_files/converted/2015_01/preview/Shimmering_Particles.mov84952.webm">
    </video>
  </div>
</div>
{% endcapture %}
{{ one_by_one_video }}
``` html{{ one_by_one_video }}```
{: .mt-small}



## Style Modifiers

### Media Contain{% include modifier.html %}
Add the class `.media-contain` to `.media` to change media contain mode.

Spefic image with and height against the original image ratio, but use `.media-contain` to enforce whole image shows.
{% capture contain_image %}
<figure class="media media-contain">
  <img width="300" height="300" src="https://cdn.stocksnap.io/img-thumbs/960w/CTCNBFUFH8.jpg" alt="img">
</figure>
{% endcapture %}
{{ contain_image }}
``` html{{ contain_image }}```
{: .my-small}

Spefic video ratio `1:1` against its original ratio, but use `.media-contain` to enforece whole video shows.
{% capture contain_video %}
<div class="media media-contain w-100 w-50-m">
  <div class="media-content-1by1">
    <video autoplay controls loop>
      <source type="video/webm" src="https://www.videvo.net/videvo_files/converted/2015_01/preview/Shimmering_Particles.mov84952.webm">
    </video>
  </div>
</div>
{% endcapture %}
{{ contain_video }}
``` html{{ contain_video }}```
{: .mt-small}




## Sass Variables

``` sass
$media-background-color: $background-muted !default
```
Description.
{: .mb-small}

``` sass
$media-border-radius: $border-radius-main !default
```
Description.
{: .mb-small}

``` sass
$media-content-aspect-ratio: 16 / 9 !default
```
Description.