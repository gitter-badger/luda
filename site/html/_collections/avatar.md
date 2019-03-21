---
title: Avatar
description: Avatar description
---

{% capture vertical_avatar_code %}
<figure class="media avatar-y">
  <div class="media-content">
    <img src="https://m.media-amazon.com/images/M/MV5BMTc5NjA5OTk4Ml5BMl5BanBnXkFtZTYwNzkyNzYz._V1_UX214_CR0,0,214,317_AL_.jpg" alt="user avatar">
  </div>
  <div class="media-description">
    <p class="avatar-name">Sophie Marceau</p>
    <p class="avatar-description">2018/01/02 12:00</p>
  </div>
</figure>
{% endcapture %}

{% capture vertical_avatar_code_sample %}
<figure class="media avatar-y">
  <div class="media-content">
    <img src="..." alt="user avatar">
  </div>
  <div class="media-description">
    <p class="avatar-name">Sophie Marceau</p>
    <p class="avatar-description">2018/01/02 12:00</p>
  </div>
</figure>
{% endcapture %}

{%
  include doc-example.html
  title="Vertical avatar"
  content=""
  code=vertical_avatar_code
  code_sample=vertical_avatar_code_sample
%}

{% capture horizontal_avatar_code %}
<figure class="media avatar-x">
  <div class="media-content">
    <img src="https://m.media-amazon.com/images/M/MV5BMTc5NjA5OTk4Ml5BMl5BanBnXkFtZTYwNzkyNzYz._V1_UX214_CR0,0,214,317_AL_.jpg" alt="user avatar">
  </div>
  <div class="media-description">
    <p class="avatar-name">Sophie Marceau</p>
    <p class="avatar-description">2018/01/02 12:00</p>
  </div>
</figure>
{% endcapture %}

{% capture horizontal_avatar_code_sample %}
<figure class="media avatar-x">
  <div class="media-content">
    <img src="..." alt="user avatar">
  </div>
  <div class="media-description">
    <p class="avatar-name">Sophie Marceau</p>
    <p class="avatar-description">2018/01/02 12:00</p>
  </div>
</figure>
{% endcapture %}

{%
  include doc-example.html
  title="Horizontal avatar"
  code=horizontal_avatar_code
  code_sample=horizontal_avatar_code_sample
%}

{%
  include doc-chapter.html
  title="Avatar modifiers"
  content=""
%}

{% capture avatar_small_code %}
<figure class="media avatar-y avatar-small">
  <div class="media-content">
    <img src="https://m.media-amazon.com/images/M/MV5BMTc5NjA5OTk4Ml5BMl5BanBnXkFtZTYwNzkyNzYz._V1_UX214_CR0,0,214,317_AL_.jpg" alt="user avatar">
  </div>
  <div class="media-description">
    <p class="avatar-name">Sophie Marceau</p>
    <p class="avatar-description">2018/01/02 12:00</p>
  </div>
</figure>
<figure class="media avatar-x avatar-small">
  <div class="media-content">
    <img src="https://m.media-amazon.com/images/M/MV5BMTc5NjA5OTk4Ml5BMl5BanBnXkFtZTYwNzkyNzYz._V1_UX214_CR0,0,214,317_AL_.jpg" alt="user avatar">
  </div>
  <div class="media-description">
    <p class="avatar-name">Sophie Marceau</p>
    <p class="avatar-description">2018/01/02 12:00</p>
  </div>
</figure>
{% endcapture %}

{% capture avatar_small_code_sample %}
<figure class="media avatar-y avatar-small">
  <div class="media-content">
    <img src="..." alt="user avatar">
  </div>
  <div class="media-description">
    <p class="avatar-name">Sophie Marceau</p>
    <p class="avatar-description">2018/01/02 12:00</p>
  </div>
</figure>
<figure class="media avatar-x avatar-small">
  <div class="media-content">
    <img src="..." alt="user avatar">
  </div>
  <div class="media-description">
    <p class="avatar-name">Sophie Marceau</p>
    <p class="avatar-description">2018/01/02 12:00</p>
  </div>
</figure>
{% endcapture %}

{%
  include doc-example.html
  title="Small avatar"
  content=""
  is_modifier=true
  code=avatar_small_code
  code_sample=avatar_small_code_sample
%}

{% capture avatar_large_code %}
<figure class="media avatar-y avatar-large">
  <div class="media-content">
    <img src="https://m.media-amazon.com/images/M/MV5BMTc5NjA5OTk4Ml5BMl5BanBnXkFtZTYwNzkyNzYz._V1_UX214_CR0,0,214,317_AL_.jpg" alt="user avatar">
  </div>
  <div class="media-description">
    <p class="avatar-name">Sophie Marceau</p>
    <p class="avatar-description">2018/01/02 12:00</p>
  </div>
</figure>
<figure class="media avatar-x avatar-large">
  <div class="media-content">
    <img src="https://m.media-amazon.com/images/M/MV5BMTc5NjA5OTk4Ml5BMl5BanBnXkFtZTYwNzkyNzYz._V1_UX214_CR0,0,214,317_AL_.jpg" alt="user avatar">
  </div>
  <div class="media-description">
    <p class="avatar-name">Sophie Marceau</p>
    <p class="avatar-description">2018/01/02 12:00</p>
  </div>
</figure>
{% endcapture %}

{% capture avatar_large_code_sample %}
<figure class="media avatar-y avatar-large">
  <div class="media-content">
    <img src="..." alt="user avatar">
  </div>
  <div class="media-description">
    <p class="avatar-name">Sophie Marceau</p>
    <p class="avatar-description">2018/01/02 12:00</p>
  </div>
</figure>
<figure class="media avatar-x avatar-large">
  <div class="media-content">
    <img src="..." alt="user avatar">
  </div>
  <div class="media-description">
    <p class="avatar-name">Sophie Marceau</p>
    <p class="avatar-description">2018/01/02 12:00</p>
  </div>
</figure>
{% endcapture %}

{%
  include doc-example.html
  title="Large avatar"
  content=""
  is_modifier=true
  code=avatar_large_code
  code_sample=avatar_large_code_sample
%}