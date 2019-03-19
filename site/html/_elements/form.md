---
title: Form
description: Lean how to create form elements and helpers, control states through behaviours.
---


## Input Elements



### Text Field and Text Area
Add the classes `.fm.fm-text` to create a text field or a text area.
<div class="fm fm-text">
  <input placeholder="Enter some text">
</div>
<div class="fm fm-text mt-small">
  <textarea placeholder="Enter more text"></textarea>
</div>
``` html
<div class="fm fm-text">
  <input placeholder="Enter some text">
</div>
<div class="fm fm-text">
  <textarea placeholder="Enter more text"></textarea>
</div>
```
{: .mt-small}



### Search Field
Add the classes `.fm.fm-search` to create a search field.
{% capture search_field %}
<div class="fm fm-search">
  <input type="search" placeholder="Search anything...">
</div>
{% endcapture %}
{{ search_field }}
``` html{{ search_field }}```
{: .mt-small}



### Select Field
Add the classes `.fm.fm-select` to create single select filed and multiple select field. Set the attribute `selected` value to `selected` to indicate selected values.
<div class="fm fm-select">
  <select placeholder="Select a word">
    <option value="hello">Hello!</option>
    <option value="goodbye">Goodbye!</option>
  </select>
</div>
<div class="fm fm-select mt-small">
  <select multiple placeholder="Select words">
    <option value="hello" selected="selected">Hello!</option>
    <option value="goodbye">Goodbye!</option>
  </select>
</div>
``` html
<div class="fm fm-select">
  <select placeholder="Select a word">
    <option value="hello">Hello!</option>
    <option value="goodbye">Goodbye!</option>
  </select>
</div>
<div class="fm fm-select">
  <select multiple placeholder="Select words">
    <option value="hello" selected="selected">Hello!</option>
    <option value="goodbye">Goodbye!</option>
  </select>
</div>
```
{: .mt-small}



### File Picker
Add the classes `.fm.fm-file` to create single or multiple file picker. Use the attribute `value` to show filenames.
<div class="fm fm-file">
  <input type="file" placeholder="Add a file">
</div>
<div class="fm fm-file mt-small">
  <input type="file" multiple value="luda.min.css" placeholder="Add files">
</div>
``` html
<div class="fm fm-file">
  <input type="file" placeholder="Add a file">
</div>
<div class="fm fm-file">
  <input type="file" multiple value="luda.min.css" placeholder="Add files">
</div>
```
{: .mt-small}



### Checkbox
Add the classes `.fm.fm-check` to create checkboxes.
{% capture checkboxes %}
<div class="fm fm-check">
  <input type="checkbox">
</div>
<div class="fm fm-check">
  <label><input type="checkbox">Checkbox one in label</label>
  <label><input type="checkbox">Checkbox two in label</label>
</div>
{% endcapture %}
{{ checkboxes}}
``` html{{ checkboxes }}```
{: .mt-small}



### Radio
Add the classes `.fm.fm-radio` to create radioes.
{% capture radioes %}
<div class="fm fm-radio">
  <input type="radio" name="radio_example">
</div>
<div class="fm fm-radio">
  <label><input type="radio" name="radio_example" value="one">Radio one in label</label>
  <label><input type="radio" name="radio_example" value="two">Radio two in label</label>
</div>
{% endcapture %}
{{ radioes }}
``` html{{ radioes }}```
{: .mt-small}



### Range Slider
Add the classes `.fm.fm-range` to create a range slider.
{% capture range_slider %}
<div class="fm fm-range">
  <input type="range">
</div>
{% endcapture %}
{{ range_slider }}
``` html{{ range_slider }}```
{: .mt-small}



## Input States



### Readonly
Add the attribute `data-readonly` to make a input element readonly.
<div class="fm fm-text mb-small" data-readonly>
  <input data-readonly value="A readonly text field">
</div>
<div class="fm fm-check mb-small" data-readonly>
  <label><input data-readonly checked type="checkbox">A readonly checkbox</label>
</div>
<div class="fm fm-select mb-small" data-readonly>
  <select data-readonly placeholder="Select a word">
    <option selected="selected" value="hello">A readonly select with Hello selected</option>
    <option value="goodbye">Goodbye!</option>
  </select>
</div>
``` html
<div class="fm fm-text" data-readonly>
  <input data-readonly value="A readonly text field">
</div>
<div class="fm fm-check" data-readonly>
  <label><input data-readonly checked type="checkbox">A readonly checkbox</label>
</div>
<div class="fm fm-select" data-readonly>
  <select data-readonly placeholder="Select a word">
    <option selected="selected" value="hello">A readonly select with Hello selected</option>
    <option value="goodbye">Goodbye!</option>
  </select>
</div>
```



### Disabled
Add the attribute `disabled` to make a disabled input element.
<div class="fm fm-search mb-small" disabled>
  <input disabled value="This search field is disabled">
</div>
<div class="fm fm-radio mb-small" disabled>
  <label><input disabled type="radio">This radio is disabled</label>
</div>
<div class="fm fm-file mb-small" disabled>
  <input disabled type="file" value="This file picker is disabled">
</div>
``` html
<div class="fm fm-search" disabled>
  <input disabled value="This search field is disabled">
</div>
<div class="fm fm-radio" disabled>
  <label><input disabled type="radio">This radio is disabled</label>
</div>
<div class="fm fm-file" disabled>
  <input disabled type="file" value="This file picker is disabled">
</div>
```



## Input Modifiers

### Small{% include modifier.html %}
Add the class `.fm-small` to make an input element smaller.
<div class="fm fm-check fm-small mb-small">
  <label><input type="checkbox">A small form checkbox</label>
</div>
<div class="fm fm-range fm-small mb-small">
  <input type="range">
</div>
<div class="fm fm-search fm-small mb-small">
  <input placeholder="A small form search">
</div>
<div class="fm fm-text fm-small mb-small">
  <textarea placeholder="A small from textarea"></textarea>
</div>
``` html
<div class="fm fm-check fm-small">
  <label><input type="checkbox">A small form checkbox</label>
</div>
<div class="fm fm-range fm-small">
  <input type="range">
</div>
<div class="fm fm-search fm-small">
  <input placeholder="A small form search">
</div>
<div class="fm fm-text fm-small">
  <textarea placeholder="A small from textarea"></textarea>
</div>
```



### Large{% include modifier.html %}
Add the class `.fm-large` to make an input element larger.
<div class="fm fm-radio fm-large mb-small">
  <label><input type="radio">A large form radio</label>
</div>
<div class="fm fm-file fm-large mb-small">
  <input type="file" placeholder="A large form file">
</div>
<div class="fm fm-text fm-large mb-small">
  <input placeholder="A large form text">
</div>
<div class="fm fm-select fm-large mb-small">
  <select multiple placeholder="A large multiple select">
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
``` html
<div class="fm fm-radio fm-large">
  <label><input type="radio">A large form radio</label>
</div>
<div class="fm fm-file fm-large">
  <input type="file" placeholder="A large form file">
</div>
<div class="fm fm-text fm-large">
  <input placeholder="A large form text">
</div>
<div class="fm fm-select fm-large">
  <select multiple placeholder="A large multiple select">
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
```



### Inline{% include modifier.html %}
Add the class `.fm-inline` to make a input element inline.
{% capture inline_inputs %}
<div class="fm fm-check fm-inline">
  <label><input type="checkbox">An inline checbox</label>
</div>
<div class="fm fm-search fm-inline">
  <input placeholder="An inline form search">
</div>
<div class="fm fm-file fm-inline">
  <input type="file" placeholder="An inline form file">
</div>
{% endcapture %}
{{ inline_inputs }}
``` html{{ inline_inputs }}```
{: .mt-small}



## Input Helpers

{% capture hint_text_code %}
<div class="fm fm-text mb-small" data-hint="Your email will be a secret.">
  <input type="email" placeholder="Please enter your email">
</div>
<div class="fm fm-radio" data-hint="Your gender also will be a secret.">
  <label><input type="radio" name="gender" value="male">Male</label>
  <label><input type="radio" name="gender" value="female">Female</label>
</div>
{% endcapture %}

{% capture hint_text_code_sample %}
<div class="fm fm-text" data-hint="Your email will be a secret.">
  <input type="email" placeholder="Please enter your email">
</div>
<div class="fm fm-radio" data-hint="Your gender also will be a secret.">
  <label><input type="radio" name="gender" value="male">Male</label>
  <label><input type="radio" name="gender" value="female">Female</label>
</div>
{% endcapture %}

{%
  include doc-example.html
  title="Hint text"
  content="Hint text description"
  code=hint_text_code
  code_sample=hint_text_code_sample
%}

{% capture error_text_code %}
<div class="fm fm-text mb-small" data-error="Email must be entered!">
  <input type="email" placeholder="Please enter your email">
</div>
<div class="fm fm-radio" data-error="Genger must be choosed!">
  <label><input type="radio" name="errorGender" value="male">Male</label>
  <label><input type="radio" name="errorGender" value="female">Female</label>
</div>
{% endcapture %}

{% capture error_text_code_sample %}
<div class="fm fm-text" data-error="Email must be entered!">
  <input type="email" placeholder="Please enter your email">
</div>
<div class="fm fm-radio" data-error="Genger must be choosed!">
  <label><input type="radio" name="errorGender" value="male">Male</label>
  <label><input type="radio" name="errorGender" value="female">Female</label>
</div>
{% endcapture %}

{%
  include doc-example.html
  title="Error text"
  content="Error text description"
  code=error_text_code
  code_sample=error_text_code_sample
%}

{%
  include doc-chapter.html
  title="Form label"
  content="Form label description"
%}

{% capture form_label_code %}
<label class="fm-label">Name label</label>
<div class="fm fm-text">
  <input type="text" placeholder="Please enter your name">
</div>
{% endcapture %}

{%
  include doc-example.html
  title="Form label usage"
  content="Add class <code>.fm-label</code> to a label element."
  is_modifier=true
  code=form_label_code
%}

{%
  include doc-chapter.html
  title="Form label modifiers"
  content="Form label modifiers description"
%}

{% capture required_form_label_code %}
<label class="fm-label fm-label-required">Name label required</label>
<div class="fm fm-text">
  <input type="text" placeholder="Please enter your name">
</div>
{% endcapture %}

{%
  include doc-example.html
  title="Required form label"
  content="Required form label description"
  is_modifier=true
  code=required_form_label_code
%}