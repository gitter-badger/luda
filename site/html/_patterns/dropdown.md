---
title: Dropdown
description: Dropdown description
---

{% capture absolute_dropdown_code %}
<div class="dropdown-absolute">
  <button class="btn btn-dark btn-ico-right">
    What would you like to eat?
    <i class="ico ico-down"></i>
  </button>
  <div class="dropdown-menu">
    <div class="dropdown-items">
      <button class="btn btn-dark">Apple</button>
      <button class="btn btn-dark">Orange</button>
      <button class="btn btn-dark">A very very big banana</button>
    </div>
  </div>
</div>
{% endcapture %}

{%
  include doc-example.html
  title="Absolute dropdown"
  content=""
  code=absolute_dropdown_code
%}

{% capture static_dropdown_code %}
<div class="dropdown-static">
  <button class="btn btn-text-dark btn-ico-right fw-bold">
    Where are you going?
    <i class="ico ico-down"></i>
  </button>
  <div class="dropdown-menu">
    <div class="dropdown-items">
      <button class="btn btn-text-dark">Home</button>
      <button class="btn btn-text-dark">Market</button>
      <button class="btn btn-text-dark">Company</button>
    </div>
  </div>
</div>
{% endcapture %}

{%
  include doc-example.html
  title="Static dropdown"
  content=""
  code=static_dropdown_code
%}

{%
  include doc-chapter.html
  title="Responsive dropdown"
  content=""
%}

{% capture responsive_dropdown_code %}
<div class="dropdown-fixed dropdown-absolute-m">
  <button class="btn btn-dark btn-ico-right">
    What you want?
    <i class="ico ico-down"></i>
  </button>
  <div class="dropdown-menu">
    <div class="dropdown-items">
      <button class="btn btn-light">Apple</button>
      <button class="btn btn-light">Orange</button>
      <button class="btn btn-light">Banana</button>
    </div>
  </div>
</div>
<div class="dropdown-static dropdown-absolute-m">
  <button class="btn btn-text-primary btn-ico-right">
    What you want?
    <i class="ico ico-down"></i>
  </button>
  <div class="dropdown-menu">
    <div class="dropdown-items">
      <div class="btns-y">
        <button class="btn btn-text-primary">Apple</button>
        <button class="btn btn-text-primary">Orange</button>
        <button class="btn btn-text-primary">Banana</button>
      </div>
    </div>
  </div>
</div>
{% endcapture %}

{%
  include doc-example.html
  title="Responsive dropdown usage"
  content=""
  code=responsive_dropdown_code
%}

{%
  include doc-chapter.html
  title="Dropdown position modifiers"
  content=""
%}

{% capture dropdown_align_right_code %}
<div class="dropdown-absolute dropdown-align-right">
  <button class="btn btn-hollow-primary btn-ico-right">
    What you want?
    <i class="ico ico-down"></i>
  </button>
  <div class="dropdown-menu">
    <div class="dropdown-items">
      <button class="btn btn-primary">A very very big apple</button>
      <button class="btn btn-primary">A very very big orange</button>
      <button class="btn btn-primary">A very very big banana</button>
    </div>
  </div>
</div>
{% endcapture %}

{%
  include doc-example.html
  title="Dropdown align right"
  content=""
  is_modifier=true
  code=dropdown_align_right_code
%}

{% capture dropdown_top_code %}
<div class="dropdown-absolute dropdown-top mt-small">
  <button class="btn btn-hollow-primary btn-ico-right">
    Any fruit?
    <i class="ico ico-up"></i>
  </button>
  <div class="dropdown-menu">
    <div class="dropdown-items">
      <button class="btn btn-primary">Apple</button>
      <button class="btn btn-primary">Orange</button>
      <button class="btn btn-primary">Banana</button>
    </div>
  </div>
</div>
{% endcapture %}

{%
  include doc-example.html
  title="Dropdown top"
  content=""
  is_modifier=true
  code=dropdown_top_code
%}

{% capture dropdown_left_code %}
<div class="dropdown-absolute dropdown-left f-right">
  <button class="btn btn-hollow-primary btn-ico-left">
    Any fruit?
    <i class="ico ico-left"></i>
  </button>
  <div class="dropdown-menu">
    <div class="dropdown-items">
      <button class="btn btn-primary">Apple</button>
      <button class="btn btn-primary">Orange</button>
      <button class="btn btn-primary">Banana</button>
    </div>
  </div>
</div>
{% endcapture %}

{%
  include doc-example.html
  title="Dropdown left"
  content=""
  is_modifier=true
  code=dropdown_left_code
%}

{% capture dropdown_right_code %}
<div class="dropdown-absolute dropdown-right">
  <button class="btn btn-hollow-primary btn-ico-right">
    Any fruit?
    <i class="ico ico-right"></i>
  </button>
  <div class="dropdown-menu">
    <div class="dropdown-items">
      <button class="btn btn-primary">Apple</button>
      <button class="btn btn-primary">Orange</button>
      <button class="btn btn-primary">Banana</button>
    </div>
  </div>
</div>
{% endcapture %}

{%
  include doc-example.html
  title="Dropdown right"
  content=""
  is_modifier=true
  code=dropdown_right_code
%}

{%
  include doc-chapter.html
  title="Nested dropdown"
  content=""
%}

{% capture nested_absolute_dropdown %}
<div class="dropdown-absolute">
  <button class="btn btn-hollow-primary">Any thing to eat?</button>
  <div class="dropdown-menu">
    <div class="dropdown-items of-visible">
      <div class="dropdown-absolute dropdown-right">
        <button class="btn btn-primary btn-ico-right">Fruit<i class="ico ico-right"></i></button>
        <div class="dropdown-menu">
          <div class="dropdown-items">
            <button class="btn btn-dark">Apple</button>
            <button class="btn btn-dark">Orange</button>
            <button class="btn btn-dark">Banana</button>
          </div>
        </div>
      </div>
      <div class="dropdown-absolute dropdown-right">
        <button class="btn btn-primary btn-ico-right">Meat<i class="ico ico-right"></i></button>
        <div class="dropdown-menu">
          <div class="dropdown-items">
            <button class="btn btn-dark">Chicken</button>
            <button class="btn btn-dark">Pig</button>
            <button class="btn btn-dark">Duck</button>
          </div>
        </div>
      </div>
      <button class="btn btn-primary">No, Thanks.</button>
    </div>
  </div>
</div>
{% endcapture %}

{%
  include doc-example.html
  title="Nested absolute dropdown"
  content=""
  code=nested_absolute_dropdown
%}

{% capture nested_static_dropdown %}
<div class="dropdown-static dropdown-active">
  <button class="btn btn-text-dark">Any thing to eat?</button>
  <div class="dropdown-menu">
    <div class="dropdown-items of-visible">
      <div class="dropdown-static dropdown-active">
        <button class="btn btn-text-dark btn-ico-right">Fruit<i class="ico ico-down"></i></button>
        <div class="dropdown-menu">
          <div class="dropdown-items">
            <button class="btn btn-text-dark">Apple</button>
            <button class="btn btn-text-dark">Orange</button>
            <button class="btn btn-text-dark">Banana</button>
          </div>
        </div>
      </div>
      <div class="dropdown-static">
        <button class="btn btn-text-dark btn-ico-right">Meat<i class="ico ico-down"></i></button>
        <div class="dropdown-menu">
          <div class="dropdown-items">
            <button class="btn btn-text-dark">Chicken</button>
            <button class="btn btn-text-dark">Pig</button>
            <button class="btn btn-text-dark">Duck</button>
          </div>
        </div>
      </div>
      <button class="btn btn-text-dark">No, Thanks.</button>
    </div>
  </div>
</div>
{% endcapture %}

{%
  include doc-example.html
  title="Nested static dropdown"
  content=""
  code=nested_static_dropdown
%}

{%
  include doc-chapter.html
  title="Standalone dropdown"
  content=""
%}

{% capture standalone_dropdown_code %}
<div class="dropdown-absolute" data-dropdown-standalone>
  <button class="btn btn-primary">Any fruit?</button>
  <div class="dropdown-menu">
    <div class="dropdown-items">
      <button class="btn btn-primary">Apple</button>
      <button class="btn btn-primary">Orange</button>
      <button class="btn btn-primary">Banana</button>
    </div>
  </div>
</div>
{% endcapture %}

{%
  include doc-example.html
  title="Standalone dropdown usage"
  content=""
  code=standalone_dropdown_code
%}