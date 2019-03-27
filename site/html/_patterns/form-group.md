---
title: Form Group
description: Form group is used to nest form elements.
---

## Usage
Use `.fm-group` to wrap form elements.
{% capture form_group %}
<div class="fm-group">
  <label class="fm-label">Full Name</label>
  <div class="fm fm-text">
    <input type="text" placeholder="Enter your full name">
  </div>
</div>
<div class="fm-group">
  <label class="fm-label">Address</label>
  <div class="fm fm-text">
    <input type="text" placeholder="Country">
  </div>
  <div class="fm fm-text">
    <input type="text" placeholder="City">
  </div>
</div>
<div class="fm-group">
  <label class="fm-label">Hobbit</label>
  <div class="fm-dropdown dropdown-fixed dropdown-absolute-m">
    <div class="fm fm-select">
      <input placeholder="Single select form dropdown">
    </div>
    <div class="dropdown-menu">
      <div class="dropdown-items">
        <div class="btns-y">
          <div class="btn-radio btn-hollow-primary">
            <input type="radio" name="single_fm_dropdown" value="one">
            <label>Basketball</label>
          </div>
          <div class="btn-radio btn-hollow-primary">
            <input type="radio" name="single_fm_dropdown" value="two">
            <label>Football</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="fm-group">
  <label class="fm-label">Languages</label>
  <div class="fm fm-check">
    <label><input type="checkbox">Chinese</label>
    <label><input type="checkbox">English</label>
    <label><input type="checkbox">Franch</label>
    <label><input type="checkbox">Japanese</label>
    <label><input type="checkbox">Italy</label>
    <label><input type="checkbox">Spanish</label>
    </div>
</div>
{% endcapture %}
{{ form_group }}
``` html{{ form_group }}```
{: .mt-small}




## Form Group in Grid
You can use grid to position form group.
{% capture form_group_in_grid %}
<div class="grid">
  <div class="fm-group col-6">
    <label class="fm-label">First Name</label>
    <div class="fm fm-text">
      <input type="text" placeholder="Enter your full name">
    </div>
  </div>
  <div class="fm-group col-6">
    <label class="fm-label">Family Name</label>
    <div class="fm fm-text">
      <input placeholder="Enter your family name">
    </div>
  </div>
  <div class="fm-group col-12">
    <label class="fm-label">Hobbit</label>
    <div class="fm-dropdown dropdown-fixed dropdown-absolute-m">
      <div class="fm fm-select">
        <input placeholder="Single select form dropdown">
      </div>
      <div class="dropdown-menu">
        <div class="dropdown-items">
          <div class="btns-y">
            <div class="btn-radio btn-hollow-primary">
              <input type="radio" name="single_fm_dropdown" value="one">
              <label>Basketball</label>
            </div>
            <div class="btn-radio btn-hollow-primary">
              <input type="radio" name="single_fm_dropdown" value="two">
              <label>Football</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="fm-group col-12">
    <label class="fm-label">Languages</label>
    <div class="fm fm-check">
      <label><input type="checkbox">Chinese</label>
      <label><input type="checkbox">English</label>
      <label><input type="checkbox">Franch</label>
      <label><input type="checkbox">Japanese</label>
      <label><input type="checkbox">Italy</label>
      <label><input type="checkbox">Spanish</label>
    </div>
  </div>
</div>
{% endcapture %}
<div style="margin: 0 -1rem">
  {{ form_group_in_grid }}
</div>
``` html{{ form_group_in_grid }}```
{: .mt-small}



## Grid in Form Group
`.grid` can be nested in `.fm-group`.
{: .mb-small}

{% capture grid_in_form_group %}
<div class="fm-group">
  <div class="grid">
    <label class="fm-label fm-label-wrap col-auto">Full Name (Wrap This Label)</label>
    <div class="fm fm-text col-8 col-10-m">
      <input type="text" placeholder="Enter your full name">
    </div>
  </div>
</div>
<div class="fm-group">
  <div class="grid">
    <label class="fm-label fm-label-nowrap col-auto">Address</label>
    <div class="fm fm-text col-4 col-5-m">
      <input type="text" placeholder="Country">
    </div>
    <div class="fm fm-text col-4 col-5-m">
      <input type="text" placeholder="City">
    </div>
  </div>
</div>
<div class="fm-group">
  <div class="grid">
    <label class="fm-label fm-label-nowrap col-auto">Hobbit</label>
    <div class="fm-dropdown dropdown-fixed dropdown-absolute-m col-8 col-10-m">
      <div class="fm fm-select">
        <input placeholder="Single select form dropdown">
      </div>
      <div class="dropdown-menu">
        <div class="dropdown-items">
          <div class="btns-y">
            <div class="btn-radio btn-hollow-primary">
              <input type="radio" name="single_fm_dropdown" value="one">
              <label>Basketball</label>
            </div>
            <div class="btn-radio btn-hollow-primary">
              <input type="radio" name="single_fm_dropdown" value="two">
              <label>Football</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="fm-group">
  <div class="grid">
    <label class="fm-label fm-label-nowrap col-auto">Languages</label>
    <div class="fm fm-check col-8 col-10-m my-tiny">
      <label><input type="checkbox">Chinese</label>
      <label><input type="checkbox">English</label>
      <label><input type="checkbox">Franch</label>
      <label><input type="checkbox">Japanese</label>
      <label><input type="checkbox">Italy</label>
      <label><input type="checkbox">Spanish</label>
    </div>
  </div>
</div>
{% endcapture %}
{{ grid_in_form_group }}
``` html{{ grid_in_form_group }}```
{: .mt-small}