---
title: Text
description: Use text utilities to control text alignment, font weight, font style and more of an element.
---

## Text Alignment
Text alignment utilities are extended with [screen width breakpoint postfixes]() for responsive control. They are named using the format `.ta-{direction}-{breakpoint}`. Let's preview their effects in the below examples.

{% capture left %}
<p class="ta-left">
  Once upon time a girl named Cinderella lived with her stepmother and two stepsisters.  Poor Cinderella had to work hard all day long so the others could rest. It was she who had to wake up each morning when it was still dark and cold to start the fire...
</p>
{% endcapture %}
<div class="example">
  {{ left }}
</div>
``` html{{ left }}```
{: .mb-medium}

{% capture right %}
<p class="ta-right">
  Once upon time a girl named Cinderella lived with her stepmother and two stepsisters.  Poor Cinderella had to work hard all day long so the others could rest. It was she who had to wake up each morning when it was still dark and cold to start the fire...
</p>
{% endcapture %}
<div class="example">
  {{ right }}
</div>
``` html{{ right }}```
{: .mb-medium}

{% capture center %}
<p class="ta-center">
  Once upon time a girl named Cinderella lived with her stepmother and two stepsisters.  Poor Cinderella had to work hard all day long so the others could rest. It was she who had to wake up each morning when it was still dark and cold to start the fire...
</p>
{% endcapture %}
<div class="example">
  {{ center }}
</div>
``` html{{ center }}```
{: .mb-medium}


{% capture justify %}
<p class="ta-justify">
  Once upon time a girl named Cinderella lived with her stepmother and two stepsisters.  Poor Cinderella had to work hard all day long so the others could rest. It was she who had to wake up each morning when it was still dark and cold to start the fire...
</p>
{% endcapture %}
<div class="example">
  {{ justify }}
</div>
``` html{{ justify }}```


## Font Weight
Font weight utility classes are named using the format `.fw-{value}`. We use meaningful value words in the class names, all the value words are listed in the below table.

<div class="table table-border my-small">
  <table>
    <thead>
      <tr><th>Word</th><th>Value</th></tr>
    </thead>
    <tbody>
      <tr><td>lightest</td><td>100</td></tr>
      <tr><td>lighter</td><td>200</td></tr>
      <tr><td>light</td><td>300</td></tr>
      <tr><td>regular</td><td>400</td></tr>
      <tr><td>medium</td><td>500</td></tr>
      <tr><td>semibold</td><td>600</td></tr>
      <tr><td>bold</td><td>700</td></tr>
      <tr><td>bolder</td><td>800</td></tr>
      <tr><td>boldest</td><td>900</td></tr>
    </tbody>
  </table>
</div>

When you use font weight utilities, make sure the value words you pick up are supported by the fonts you embeded in your projects. Otherwise, the font weight effects will not be visible.

Let's preview the effects in the below examples.


{% capture lightest %}
<p class="fw-lightest">
  Once upon time a girl named Cinderella lived with her stepmother and two stepsisters.  Poor Cinderella had to work hard all day long so the others could rest. It was she who had to wake up each morning when it was still dark and cold to start the fire...
</p>
{% endcapture %}
<div class="example">
  {{ lightest }}
</div>
``` html{{ lightest }}```
{: .mb-medium}

{% capture lighter %}
<p class="fw-lighter">
  Once upon time a girl named Cinderella lived with her stepmother and two stepsisters.  Poor Cinderella had to work hard all day long so the others could rest. It was she who had to wake up each morning when it was still dark and cold to start the fire...
</p>
{% endcapture %}
<div class="example">
  {{ lighter }}
</div>
``` html{{ lighter }}```
{: .mb-medium}


{% capture light %}
<p class="fw-light">
  Once upon time a girl named Cinderella lived with her stepmother and two stepsisters.  Poor Cinderella had to work hard all day long so the others could rest. It was she who had to wake up each morning when it was still dark and cold to start the fire...
</p>
{% endcapture %}
<div class="example">
  {{ light }}
</div>
``` html{{ light }}```
{: .mb-medium}


{% capture regular %}
<p class="fw-regular">
  Once upon time a girl named Cinderella lived with her stepmother and two stepsisters.  Poor Cinderella had to work hard all day long so the others could rest. It was she who had to wake up each morning when it was still dark and cold to start the fire...
</p>
{% endcapture %}
<div class="example">
  {{ regular }}
</div>
``` html{{ regular }}```
{: .mb-medium}



{% capture medium %}
<p class="fw-medium">
  Once upon time a girl named Cinderella lived with her stepmother and two stepsisters.  Poor Cinderella had to work hard all day long so the others could rest. It was she who had to wake up each morning when it was still dark and cold to start the fire...
</p>
{% endcapture %}
<div class="example">
  {{ medium }}
</div>
``` html{{ medium }}```
{: .mb-medium}


{% capture semibold %}
<p class="fw-semibold">
  Once upon time a girl named Cinderella lived with her stepmother and two stepsisters.  Poor Cinderella had to work hard all day long so the others could rest. It was she who had to wake up each morning when it was still dark and cold to start the fire...
</p>
{% endcapture %}
<div class="example">
  {{ semibold }}
</div>
``` html{{ semibold }}```
{: .mb-medium}


{% capture bold %}
<p class="fw-bold">
  Once upon time a girl named Cinderella lived with her stepmother and two stepsisters.  Poor Cinderella had to work hard all day long so the others could rest. It was she who had to wake up each morning when it was still dark and cold to start the fire...
</p>
{% endcapture %}
<div class="example">
  {{ bold }}
</div>
``` html{{ bold }}```
{: .mb-medium}



{% capture bolder %}
<p class="fw-bolder">
  Once upon time a girl named Cinderella lived with her stepmother and two stepsisters.  Poor Cinderella had to work hard all day long so the others could rest. It was she who had to wake up each morning when it was still dark and cold to start the fire...
</p>
{% endcapture %}
<div class="example">
  {{ bolder }}
</div>
``` html{{ bolder }}```
{: .mb-medium}


{% capture boldest %}
<p class="fw-boldest">
  Once upon time a girl named Cinderella lived with her stepmother and two stepsisters.  Poor Cinderella had to work hard all day long so the others could rest. It was she who had to wake up each morning when it was still dark and cold to start the fire...
</p>
{% endcapture %}
<div class="example">
  {{ boldest }}
</div>
``` html{{ boldest }}```


## Font Style
Font style utility classes are named using the format `.fs-{value}`. The value can be one of `italic` and `normal`. Let's preview the effects in the below examples.

{% capture italic %}
<p class="fs-italic">
  Once upon time a girl named Cinderella lived with her stepmother and two stepsisters.  Poor Cinderella had to work hard all day long so the others could rest. It was she who had to wake up each morning when it was still dark and cold to start the fire...
</p>
{% endcapture %}
<div class="example">
  {{ italic }}
</div>
``` html{{ italic }}```
{: .mb-medium}

{% capture normal %}
<p class="fs-normal">
  Once upon time a girl named Cinderella lived with her stepmother and two stepsisters.  Poor Cinderella had to work hard all day long so the others could rest. It was she who had to wake up each morning when it was still dark and cold to start the fire...
</p>
{% endcapture %}
<div class="example">
  {{ normal }}
</div>
``` html{{ normal }}```



## Text Transform
Text transform utility classes are named using the format `.tt-{value}`. The value can be one of `upper`, `lower` and `cap`. Let's preview the effects in the below examples.

{% capture upper %}
<p class="tt-upper">once upon time...</p>
{% endcapture %}
<div class="example">
  {{ upper }}
</div>
``` html{{ upper }}```
{: .mb-medium}

{% capture lower %}
<p class="tt-lower">ONCE UPON TIME...</p>
{% endcapture %}
<div class="example">
  {{ lower }}
</div>
``` html{{ lower }}```
{: .mb-medium}

{% capture cap %}
<p class="tt-cap">once upon time...</p>
{% endcapture %}
<div class="example">
  {{ cap }}
</div>
``` html{{ cap }}```


## Text Decoration
Text decoration utility classes are named using the format `.td-{value}`. The value can be one of `stroke`, `underline` and `none`. Let's preview the effects in the below examples.

{% capture stroke %}
<p class="td-stroke">once upon time...</p>
{% endcapture %}
<div class="example">
  {{ stroke }}
</div>
``` html{{ stroke }}```
{: .mb-medium}


{% capture underline %}
<p class="td-underline">once upon time...</p>
{% endcapture %}
<div class="example">
  {{ underline }}
</div>
``` html{{ underline }}```
{: .mb-medium}


{% capture none %}
<p class="td-none" style="text-decoration: underline">once upon time...</p>
{% endcapture %}
<div class="example">
  {{ none }}
</div>
``` html{{ none }}```



## Word Break
There're two utility classes for breaking words. The `.wb-all` class breaks a long word into newlines and the `.text-ellipsis` class cuts a long word with ellipsis into a single line. Let's preview the effects in the below examples.

{% capture break_all %}
<p class="wb-all">onceupontimeonceupontimeonceupontimeonceupontimeonceupontimeonceupontimeonceupontimeonceupontimeonceupontimeonceupontime</p>
{% endcapture %}
<div class="example">
  {{ break_all }}
</div>
``` html{{ break_all }}```
{: .mb-medium}


{% capture ellipsis %}
<p class="text-ellipsis">
  Once upon time a girl named Cinderella lived with her stepmother and two stepsisters.  Poor Cinderella had to work hard all day long so the others could rest. It was she who had to wake up each morning when it was still dark and cold to start the fire...
</p>
{% endcapture %}
<div class="example">
  {{ ellipsis }}
</div>
``` html{{ ellipsis }}```