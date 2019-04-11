---
title: Media
description: The media classes helps to control the appearances of images and videos easily.
---


## Why the Media Classes
In most cases, images and videos need more time to be loaded. To avoid browser reflow problems, we usually add the `width` and `height` attributes to them. Well, sometimes you just don't care and forget to add them.

A container with the `.media` class adds a max width rule to the wrapped element to make sure the inside element won't break out.

A light background color is also added, so visitors will know there is something not ready when an image or a video is being loaded.

The aspect radio of a wrapped media element depends on its original size and its `width` and `height` attributes, but we can change this through the `.media-content` container.

Let's go into detail through the below examples.

## Images
In the below example, the image is wrapped in a `.media` container, it will not break out of the container, even though its original size is larger than the container.
{% capture image %}
<figure class="media">
  <img src="https://cdn.stocksnap.io/img-thumbs/960w/CTCNBFUFH8.jpg" alt="img">
</figure>
{% endcapture %}
<div class="example">
  {{ image }}
</div>
``` html{{ image }}```


## Videos
Just like images, videos can also be wrapped in a `.media` container.
{% capture video %}
<div class="media">
  <video autoplay controls loop>
    <source type="video/webm" src="https://www.videvo.net/videvo_files/converted/2015_01/preview/Shimmering_Particles.mov84952.webm">
  </video>
</div>
{% endcapture %}
<div class="example">
  {{ video }}
</div>
``` html{{ video }}```



## Responsive Control

The class `.media-content` can be wrapped in the `.media` container to create a responsive media element, the element's height is 9/16 of the container's width by default.

You can use size utility classes to change the `.media` container's width responsively and change the `.media-content` container's aspect radio by changing its `padding-top` value.

### Responsive images
Here is a responsive image occupies 100% horizontal space in small screens and 66% horizontal space in middle size screens.
{% capture responsive_image %}
<figure class="media w-100 w-66-m">
  <picture class="media-content">
    <source srcset="https://cdn.stocksnap.io/img-thumbs/960w/CTCNBFUFH8.jpg" media="(min-width: 600px)">
    <img src="https://cdn.stocksnap.io/img-thumbs/960w/CTCNBFUFH8.jpg" alt="img">
  </picture>
</figure>
{% endcapture %}
<div class="example">
  {{ responsive_image }}
</div>
``` html{{ responsive_image }}```


### Responsive Videos
Like responsive images, videos can also be wrapped in the `.media-content` container.
{% capture responsive_video %}
<div class="media w-100 w-66-m">
  <div class="media-content">
    <video autoplay controls loop>
      <source type="video/webm" src="https://www.videvo.net/videvo_files/converted/2015_01/preview/Shimmering_Particles.mov84952.webm">
    </video>
  </div>
</div>
{% endcapture %}
<div class="example">
  {{ responsive_video }}
</div>
``` html{{ responsive_video }}```
{: .mt-small}


### Responsive Iframes
Videos in iframe can also be wrapped, see the below example.
{% capture responsive_iframe %}
<div class="media w-100 w-66-m">
  <div class="media-content">
    <iframe allowfullscreen allow="autoplay; encrypted-media" src="https://www.youtube.com/embed/izGwDsrQ1eQ"></iframe>
  </div>
</div>
{% endcapture %}
<div class="example">
  {{ responsive_iframe }}
</div>
``` html{{ responsive_iframe }}```
{: .mt-small}


### Aspect Radio 1by1
The class `.media-content-1by1` is built-in. You can change a responsive media elements' aspect ratio to `1:1` by replace the `.media-content` class with it.

Here is a responsive image with the aspect radio `1:1`.
{% capture one_by_one_image %}
<figure class="media w-100 w-66-m">
  <picture class="media-content-1by1">
    <source srcset="https://cdn.stocksnap.io/img-thumbs/960w/CTCNBFUFH8.jpg" media="(min-width: 600px)">
    <img src="https://cdn.stocksnap.io/img-thumbs/960w/CTCNBFUFH8.jpg" alt="img">
  </picture>
</figure>
{% endcapture %}
<div class="example">
  {{ one_by_one_image }}
</div>
``` html{{ one_by_one_image }}```

Here is a responsive video with the aspect ratio `1:1`.
{: .mt-small}
{% capture one_by_one_video %}
<div class="media w-100 w-66-m">
  <div class="media-content-1by1">
    <video autoplay controls loop>
      <source type="video/webm" src="https://www.videvo.net/videvo_files/converted/2015_01/preview/Shimmering_Particles.mov84952.webm">
    </video>
  </div>
</div>
{% endcapture %}
<div class="example">
  {{ one_by_one_video }}
</div>
``` html{{ one_by_one_video }}```
{: .mt-small}



## Style Modifiers

### Media Contained{% include modifier.html %}
A wrapped media element will cover the whole space of its container by default, but if the aspect radio of the element is different than the its container, some content area will be invisible. You can change this by adding the `.media-contain` class to the `.media` container, so the whole content will be visible.

In the below example, we set spefic with and height values to the image against its original aspect ratio, but use the `.media-contain` class to show the whole image content area.

{% capture contain_image %}
<figure class="media media-contain">
  <img width="300" height="300" src="https://cdn.stocksnap.io/img-thumbs/960w/CTCNBFUFH8.jpg" alt="img">
</figure>
{% endcapture %}
<div class="example">
  {{ contain_image }}
</div>
``` html{{ contain_image }}```

In the below example, we use the `.media-content-1by1` class to change the container's aspect radio, but use the `.media-contain` class to show the whole video content area.
{: .mt-small}
{% capture contain_video %}
<div class="media media-contain w-100 w-50-m">
  <div class="media-content-1by1">
    <video autoplay controls loop>
      <source type="video/webm" src="https://www.videvo.net/videvo_files/converted/2015_01/preview/Shimmering_Particles.mov84952.webm">
    </video>
  </div>
</div>
{% endcapture %}
<div class="example">
  {{ contain_video }}
</div>
``` html{{ contain_video }}```




## Sass Variables
{: .mb-small}

``` sass
$media-background-color: $background-color-muted !default
```
{: .mb-small}

``` sass
$media-border-radius: $border-radius-main !default
```
{: .mb-small}

``` sass
$media-content-aspect-ratio: 16 / 9 !default
```