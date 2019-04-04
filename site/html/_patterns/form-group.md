---
title: Form Group
description: Form group is designed to group form elements together and can be combined with the grid to create complex form layouts.
---

## Usage
Form group add `1rem` margin at the bottom of each wrapped form element and it's simple to use, just add the `.fm-group` to a container, then nest `<label>`s and form elements inside.

{% capture form_group %}
<form>
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
</form>
{% endcapture %}
<div class="example">
  {{ form_group }}
</div>
``` html{{ form_group }}```




## Form Groups in Grid
In the below example, we use a `.grid` container to wrap form groups add add the `.col-*` classes to the `.fm-group`s to make this form layout responsive.

{% capture form_group_in_grid %}
<form class="grid">
  <div class="fm-group col-12 col-6-m">
    <label class="fm-label">First Name</label>
    <div class="fm fm-text">
      <input type="text" placeholder="Enter your full name">
    </div>
  </div>
  <div class="fm-group col-12 col-6-m">
    <label class="fm-label">Family Name</label>
    <div class="fm fm-text">
      <input placeholder="Enter your family name">
    </div>
  </div>
  <div class="fm-group col-12 col-6-m">
    <label class="fm-label">Application File</label>
    <div class="fm fm-file">
      <input type="file" placeholder="Upload your application file">
    </div>
  </div>
  <div class="fm-group col-12 col-6-m">
    <label class="fm-label">Country</label>
    <div class="fm-dropdown dropdown-fixed dropdown-absolute-m">
      <div class="fm fm-select">
        <input placeholder="Single select form dropdown">
      </div>
      <div class="dropdown-menu">
        <div class="dropdown-items">
          <div class="btns-y">
            <div class="btn-radio btn-hollow-primary">
              <input type="radio" name="single_fm_dropdown" value="america">
              <label>America</label>
            </div>
            <div class="btn-radio btn-hollow-primary">
              <input type="radio" name="single_fm_dropdown" value="china">
              <label>China</label>
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
</form>
{% endcapture %}
<div style="margin: 1rem -1rem">
  {{ form_group_in_grid }}
</div>
``` html{{ form_group_in_grid }}```
{: .mt-small}



## Grid in Form Groups
In the below example, we wrap `.grid` containers in form groups to create another form layout. We use the `.fm-label-nowrap` class to enforce labels not break in newlines and align at the middle of form elements' vertical space, and use the `.fm-label-wrap` class for long label texts for better alignment.

{% capture grid_in_form_group %}
<form>
  <div class="fm-group">
    <div class="grid">
      <!-- The .fm-label-wrap modifier wraps a long label in two lines -->
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
      <!-- The .fm-label-nowrap enforce a label not break into newlines -->
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
      <!-- Add the .my-tiny utility class for better baseline alignment. -->
      <div class="fm fm-check col-8 col-10-m my-tiny">
        <label><input type="checkbox">Chinese</label>
        <label><input type="checkbox">English</label>
        <label><input type="checkbox">Franch</label>
        <label><input type="checkbox">Italy</label>
        <label><input type="checkbox">Japanese</label>
        <label><input type="checkbox">Spanish</label>
      </div>
    </div>
  </div>  
</form>
{% endcapture %}
<div class="example">
  {{ grid_in_form_group }}
</div>
``` html{{ grid_in_form_group }}```
