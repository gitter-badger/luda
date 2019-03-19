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

### Hint Text
Use the attribute `data-hint` to show hint text for input elements.
<div class="fm fm-text mb-small" data-hint="Your email will be a secret.">
  <input type="email" placeholder="Please enter your email">
</div>
<div class="fm fm-radio mb-small" data-hint="Your gender also will be a secret.">
  <label><input type="radio" value="male">Male</label>
  <label><input type="radio" value="female">Female</label>
</div>
``` html
<div class="fm fm-text" data-hint="Your email will be a secret.">
  <input type="email" placeholder="Please enter your email">
</div>
<div class="fm fm-radio" data-hint="Your gender also will be a secret.">
  <label><input type="radio" value="male">Male</label>
  <label><input type="radio" value="female">Female</label>
</div>
```

### Error Text
Use the attribute `data-error` to show error text for input elements.
<div class="fm fm-text mb-small" data-error="Email cannot be blank!">
  <input type="email" placeholder="Please enter your email">
</div>
<div class="fm fm-radio mb-small" data-error="Genger must be choosen!">
  <label><input type="radio" value="male">Male</label>
  <label><input type="radio" value="female">Female</label>
</div>
``` html
<div class="fm fm-text" data-error="Email cannot be blank!">
  <input type="email" placeholder="Please enter your email">
</div>
<div class="fm fm-radio" data-error="Genger must be choosen!">
  <label><input type="radio" value="male">Male</label>
  <label><input type="radio" value="female">Female</label>
</div>
```



## Form Label

### Usage
Add the class `.fm-label` to create a label for input elements.
{% capture form_label %}
<label class="fm-label">Fullname</label>
<div class="fm fm-text">
  <input placeholder="Please enter your fullname">
</div>
{% endcapture %}
{{ form_label }}
``` html{{ form_label }}```
{: .mt-small}


### Required{% include modifier.html %}
Add the class `.fm-label-required` to `.fm-label` to show required mark.
{% capture required_form_label %}
<label class="fm-label fm-label-required">Fullname</label>
<div class="fm fm-text">
  <input placeholder="Please enter your fullname">
</div>
{% endcapture %}
{{ required_form_label }}
``` html{{ required_form_label }}```
{: .mt-small}



## Sass Variables

### Sizes

``` sass
$form-element-inline-width-rem: 18rem !default
```
Description.
{: .mb-small}  

``` sass
$form-element-small-inline-width-rem: 14rem !default
```
Description.
{: .mb-small}  

``` sass
$form-element-large-inline-width-rem: 22rem !default
```
Description.
{: .mb-small}
``` sass
$form-element-text-helvertical-padding-em: strip-unit($space-small-rem) * 1em !default
```
Description.
{: .mb-small}

``` sass
$form-element-textfield-height-rem: 3rem !default
```
Description.
{: .mb-small}

``` sass
$form-element-small-textfield-height-rem: 2rem !default
```
Description.
{: .mb-small}

``` sass
$form-element-large-textfield-height-rem: 4rem !default
```
Description.
{: .mb-small}

``` sass
$form-element-textarea-height-rem: 9rem !default
```
Description.
{: .mb-small}

``` sass
$form-element-small-textarea-height-rem: 6rem !default
```
Description.
{: .mb-small}

``` sass
$form-element-large-textarea-height-rem: 12rem !default
```
Description.
{: .mb-small}

``` sass
$form-element-checkfield-height-em: 1.4em !default
```
Description.
{: .mb-small}

``` sass
$form-element-track-height-em: 0.4em !default
```
Description.
{: .mb-small}

``` sass
$form-element-thumb-height-em: 1.4em !default
```
Description.
{: .mb-small}

``` sass
$form-element-thumb-width-em: 1.4em !default
```
Description.




### Typography
``` sass
$form-element-typography-size-level: 5 !default
```
Description.
{: .mb-small}  

``` sass
$form-element-small-typography-size-level: 6 !default
```
Description.
{: .mb-small}  

``` sass
$form-element-large-typography-size-level: 4 !default
```
Description.



### Borders
``` sass
$form-element-border-width: 1px !default
```
Description.
{: .mb-small}

``` sass
$form-element-border-style: solid !default
```
Description.
{: .mb-small}

``` sass
$form-element-border-radius: $border-radius-main !default
```
Description.
{: .mb-small}

``` sass
$form-element-border-color: $line-color-main !default
```
Description.
{: .mb-small}

``` sass
$form-element-error-border-color: $line-color-danger !default
```
Description.
{: .mb-small}

``` sass
$form-element-focus-border-color: $line-color-primary !default
```
Description.
{: .mb-small}

``` sass
$form-element-track-border-radius: $border-radius-main !default
```
Description.
{: .mb-small}

``` sass
$form-element-thumb-border-radius: 100% !default
```
Description.
{: .mb-small}

``` sass
$form-element-thumb-border-color: transparent !default
```
Description.
{: .mb-small}

``` sass
$form-element-error-thumb-border-color: $form-element-error-border-color !default
```
Description.
{: .mb-small}

``` sass
$form-element-focus-thumb-border-color: null !default
```
Description.



### Colors
``` sass
$form-element-color: $color-main !default
```
Description.
{: .mb-small}  

``` sass
$form-element-error-color: null !default
```
Description.
{: .mb-small}  

``` sass
$form-element-focus-color: null !default
```
Description.
{: .mb-small}

``` sass
$form-element-placeholder-color: $color-muted !default
```
Description.
{: .mb-small}

``` sass
$form-element-error-placeholder-color: null !default
```
Description.
{: .mb-small}

``` sass
$form-element-focus-placeholder-color: null !default
```
Description.



### Backgrounds
``` sass
$form-element-background: $background-main !default
```
Description.
{: .mb-small}  

``` sass
$form-element-focus-background: null !default
```
Description.
{: .mb-small}  

``` sass
$form-element-error-background: null !default
```
Description.
{: .mb-small}

``` sass
$form-element-track-background: darken($background-muted, 4%) !default !default
```
Description.
{: .mb-small}

``` sass
$form-element-focus-track-background: null !default
```
Description.
{: .mb-small}

``` sass
$form-element-error-track-background: null !default
```
Description.
{: .mb-small}

``` sass
$form-element-thumb-background: $form-element-track-background !default
```
Description.
{: .mb-small}

``` sass
$form-element-error-thumb-background: null !default
```
Description.
{: .mb-small}

``` sass
$form-element-focus-thumb-background: $background-color-primary !default
```
Description.



### Shadows
``` sass
$form-element-box-shadow: null !default
```
Description.
{: .mb-small}

``` sass
$form-element-focus-box-shadow: null !default
```
Description.
{: .mb-small}

``` sass
$form-element-error-box-shadow: null !default
```
Description.



### Icons
``` sass
$form-element-icon-size-em: 1.286em !default
```
Description.
{: .mb-small}

``` sass
$form-element-icon-color: $form-element-border-color !default
```
Description.
{: .mb-small}

``` sass
$form-element-error-icon-color: $form-element-error-border-color !default
```
Description.
{: .mb-small}

``` sass
$form-element-focus-icon-color: $form-element-focus-border-color !default
```
Description.
{: .mb-small}
``` sass
$form-element-search-icon: '<svg viewBox="..."><path fill="#fill"...</svg>' !default
```
Description.
{: .mb-small}

``` sass    
$form-element-select-icon: '<svg viewBox="..."><path fill="#fill"...</svg>' !default
```
Description.
{: .mb-small}

``` sass    
$form-element-add-icon: '<svg viewBox="..."><path fill="#fill"...</svg>' !default
```
Description.
{: .mb-small}

``` sass    
$form-element-checked-icon: '<svg viewBox="..."><path fill="#fill"...</svg>' !default
```
Description.
{: .mb-small}

``` sass
$form-element-checked-icon-color: $form-element-color !default
```
Description.
{: .mb-small}

``` sass
$form-element-error-checked-icon-color: null !default
```
Description.
{: .mb-small}

``` sass
$form-element-focus-checked-icon-color: null !default
```
Description.



### Helper
``` sass
$form-element-helper-typography-size-level: 6 !default
```
Description.
{: .mb-small}

``` sass
$form-element-small-helper-typography-size-level: null !default
```
Description.
{: .mb-small}

``` sass
$form-element-large-helper-typography-size-level: 5 !default
```
Description.
{: .mb-small}

``` sass
$form-element-hint-message-color: $color-muted !default
```
Description.
{: .mb-small}

``` sass
$form-element-error-message-color: $color-danger !default
```
Description.




### Label
``` sass
$form-label-typography-size-level: 5 !default
```
Description.
{: .mb-small}

``` sass
$form-label-small-typography-size-level: 6 !default
```
Description.
{: .mb-small}

``` sass
$form-label-large-typography-size-level: 4 !default
```
Description.
{: .mb-small}

``` sass
$form-label-color: $color-emphasis !default
```
Description.
{: .mb-small}

``` sass
$form-label-required-content: " | Required" !default
```
Description.
{: .mb-small}

``` sass
$form-label-required-color: $color-danger !default
```
Description.