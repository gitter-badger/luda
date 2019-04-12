---
title: Form
description: Form elements are essential when you need collect data from users. Let's see the various form elements Luda offers in this chapter.
---


## Input Elements
In Luda, we don't add style classes to input elements directly, we add them to a container instead. It's more flexible to control and extend input elements styles in this way. All input elements are wrapped by a container with the `.fm` class, for different style inputs, just add style classes to the container. 


### Text Field and Text Area
Add the style class `.fm-text` to the container to create a text filed or a text area.
{% capture text_field %}
<!-- Wrap a <input> -->
<div class="fm fm-text">
  <input placeholder="Enter some text">
</div>
<!-- Wrap a <textarea> -->
<div class="fm fm-text">
  <textarea placeholder="Enter more text"></textarea>
</div>
{% endcapture %}
<div class="form-example">
  {{ text_field }}
</div>
``` html{{ text_field }}```



### Search Field
Add the class `.fm-search` to the container to create a search filed. The nested `<input>`'s attribute can be `search` or any other types support entering texts. 
{% capture search_field %}
<div class="fm fm-search">
  <input type="search" placeholder="Search anything...">
</div>
{% endcapture %}
<div class="form-example">
  {{ search_field }}
</div>
``` html{{ search_field }}```



### Select Field
Add the class `.fm-select` to the container to create a select field. A `<select>` element should be wrapped in the container. For default selected options, set their `selected` attributes to `selected`.
{% capture select_field %}
<!-- A single select field -->
<div class="fm fm-select">
  <select placeholder="Select a word">
    <option value="hello">Hello!</option>
    <option value="goodbye">Goodbye!</option>
  </select>
</div>
<!-- A multiple select filed with a default selected option -->
<div class="fm fm-select">
  <select multiple placeholder="Select words">
    <option value="hello" selected="selected">Hello!</option>
    <option value="goodbye">Goodbye!</option>
  </select>
</div>
{% endcapture %}
<div class="form-example">
  {{ select_field }}
</div>
``` html{{ select_field }}```


#### Select Options in Javascript

``` javascript
luda.fmSelect.query('#my-fm-select').select(0)
```
Query the Javascript instance of the form select field
and select a specific option according to the passed index number.

``` javascript
luda.fmSelect.query('#my-multiple-fm-select').select([0, 1])
```
Query the Javascript instance of the multiple form select field
and select specific options according to the passed index numbers array.

### File Picker
Add the class `.fm-file` to the container to create a file picker. A `<input type="file">` element should be wrapped. You can set the value attribute of the `<input>` to show default filenames.
{% capture file_picker %}
<!-- A single file picker -->
<div class="fm fm-file">
  <input type="file" placeholder="Add a file">
</div>
<!-- An multiple files picker with a default value -->
<div class="fm fm-file">
  <input type="file" multiple value="luda.min.css" placeholder="Add files">
</div>
{% endcapture %}
<div class="form-example">
  {{ file_picker }}
</div>
``` html{{ file_picker }}```

#### Reset in Javascript

``` javascript
luda.$child('#input-in-my-fm-file').setAttribute('value', '')
```
Query the element instance of the `<input type="file"/>` in the file picker
and reset it.

### Checkbox
Add the class `.fm-check` to the container to create checkboxes. One or more `<input type="checkbox">` elements can be wrapped. 
{% capture checkboxes %}
<!-- A checkbox without label texts -->
<div class="fm fm-check">
  <input type="checkbox">
</div>
<!-- Checkboxes with label texts -->
<div class="fm fm-check">
  <label><input type="checkbox">Checkbox one in label</label>
  <label><input type="checkbox">Checkbox two in label</label>
</div>
{% endcapture %}
<div class="form-example">
  {{ checkboxes}}
</div>
``` html{{ checkboxes }}```


### Radio
Add the classes `.fm-radio` to the container to create radios. Just like creating checkboxes, one or more `<input type="radio">` elements can be wrapped.
{% capture radioes %}
<!-- A radio without label texts -->
<div class="fm fm-radio">
  <input type="radio" name="radio_example">
</div>
<!-- Radios with label texts -->
<div class="fm fm-radio">
  <label><input type="radio" name="radio_example" value="one">Radio one in label</label>
  <label><input type="radio" name="radio_example" value="two">Radio two in label</label>
</div>
{% endcapture %}
<div class="form-example">
  {{ radioes }}
</div>
``` html{{ radioes }}```



### Range Slider
To create a range slider, add the `.fm-range` class to the container. Then wrap a `<input type="range">` element inside.
{% capture range_slider %}
<div class="fm fm-range">
  <input type="range">
</div>
{% endcapture %}
{{ range_slider }}
``` html{{ range_slider }}```



## Input States
The state of input elements can be controlled by adding state attributes.


### Readonly
If the value of some input element should not be changed by users, you can add the `data-readonly` attribute to itself and its `.fm` container. Let's see below examples.

{% capture readonly %}
<!-- A readonly text field -->
<div class="fm fm-text" data-readonly>
  <input data-readonly value="A readonly text field">
</div>
<!-- A readonly checkbox -->
<div class="fm fm-check" data-readonly>
  <label><input data-readonly checked type="checkbox">A readonly checkbox</label>
</div>
<!-- A readonly select field -->
<div class="fm fm-select" data-readonly>
  <select data-readonly placeholder="Select a word">
    <option selected="selected" value="hello">A readonly select with Hello selected</option>
    <option value="goodbye">Goodbye!</option>
  </select>
</div>
{% endcapture %}
<div class="form-example">
  {{ readonly }}
</div>
``` html{{ readonly }}```



### Disabled
The value of disabled input elements cannot be changed by users either, but they are different from readonly input elements. The value of a readonly input element will be submited when parent form submited, but a disabled input element's value will be ignored.

To disable an input element, add the `disabled` attribute to itself and its `.fm` container.
{% capture disabled %}
<!-- A disabled search field -->
<div class="fm fm-search" disabled>
  <input disabled value="This search field is disabled">
</div>
<!-- A disabled radio -->
<div class="fm fm-radio" disabled>
  <label><input disabled type="radio">This radio is disabled</label>
</div>
<!-- A disabled file picker -->
<div class="fm fm-file" disabled>
  <input disabled type="file" value="This file picker is disabled">
</div>
{% endcapture %}
<div class="form-example">
  {{ disabled }}
</div>
``` html{{ disabled }}```



## Input Element Modifiers
The size of input elements can be changed by adding size modifier classes.

### Small{% include modifier.html %}
If you want a smaller input element, add the `.fm-small` class to its `.fm` container.
{% capture small %}
<!-- A small checkbox with label texts -->
<div class="fm fm-check fm-small">
  <label><input type="checkbox">A small form checkbox</label>
</div>
<!-- A small range slider -->
<div class="fm fm-range fm-small">
  <input type="range">
</div>
<!-- A small search field -->
<div class="fm fm-search fm-small">
  <input placeholder="A small form search">
</div>
<!-- A small textarea -->
<div class="fm fm-text fm-small">
  <textarea placeholder="A small from textarea"></textarea>
</div>
{% endcapture %}
<div class="form-example">
  {{ small }}
</div>
``` html{{ small }}```



### Large{% include modifier.html %}
The size of an input element can be larger by adding the `.fm-large` class.
{% capture large %}
<!-- A large radio -->
<div class="fm fm-radio fm-large">
  <label><input type="radio">A large form radio</label>
</div>
<!-- A large file picker -->
<div class="fm fm-file fm-large">
  <input type="file" placeholder="A large form file">
</div>
<!-- A large text filed -->
<div class="fm fm-text fm-large">
  <input placeholder="A large form text">
</div>
<!-- A large select field -->
<div class="fm fm-select fm-large">
  <select multiple placeholder="A large multiple select">
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
{% endcapture %}
<div class="form-example">
  {{ large }}
</div>
``` html{{ large }}```



### Inline{% include modifier.html %}
Luda form elements occupy entire space in the horizontal by default, you can add the class `.fm-inline` to change this behavior.
{% capture inline %}
<!-- An inline search field -->
<div class="fm fm-search fm-inline">
  <input placeholder="An inline form search">
</div>
<!-- An inline file picker -->
<div class="fm fm-file fm-inline">
  <input type="file" placeholder="An inline form file">
</div>
<!-- An inline checkbox -->
<div class="fm fm-check fm-inline">
  <label><input type="checkbox">An inline checbox</label>
</div>
{% endcapture %}
<div class="form-example">
  {{ inline }}
</div>
``` html{{ inline }}```



## Input Helper Texts
Luda offers form hint and error text helper attributes, additional information can be showed conveniently by adding these attributes.

### Hint Texts
Add the `data-hint` attribute to the `.fm` container to show some hint texts. The value of this attribute will be showed at the bottom of the container.
{% capture hint %}
<!-- Show some hint texts for a text field -->
<div class="fm fm-text" data-hint="Your email will be a secret.">
  <input type="email" placeholder="Please enter your email">
</div>
<!-- Show some hint texts for radios -->
<div class="fm fm-radio" data-hint="Your gender also will be a secret.">
  <label><input type="radio" value="male">Male</label>
  <label><input type="radio" value="female">Female</label>
</div>
{% endcapture %}
<div class="form-example">
  {{ hint }}
</div>
``` html{{ hint }}```


### Error Text
To show the error state and error texts of a input element, just add the `data-error` attribute to its `.fm` container. The value of the `data-error` attribute will be showed as the error information.

If you add the `data-error` attribute and the `data-hint` attribute to a `.fm` container at the same time, only the error texts will be showed.
{: .c-danger}

{% capture error %}
<!-- Show error texts for a text field -->
<div class="fm fm-text" data-error="Email cannot be blank!">
  <input type="email" placeholder="Please enter your email">
</div>
<!-- Show error texts for radios -->
<div class="fm fm-radio" data-error="Genger must be choosen!">
  <label><input type="radio" value="male">Male</label>
  <label><input type="radio" value="female">Female</label>
</div>
{% endcapture %}
<div class="form-example">
  {{ error }}
</div>
``` html{{ error }}```



## Form Label
A form label is used to indicate what kind of information should used fill in an input element, it's super easy to create.

### Usage
Just add the `.fm-label` class to a `<label>` element.
{% capture form_label %}
<label class="fm-label">Fullname</label>
<div class="fm fm-text">
  <input placeholder="Please enter your fullname">
</div>
{% endcapture %}
<div class="form-example mt-none">
  {{ form_label }}
</div>
``` html{{ form_label }}```

### Form Label Modifiers
You can change the size and show "Required" texts by adding label modifier classes.

#### Required{% include modifier.html %}
Add the class `.fm-label-required` to show "Required" text.
{% capture required_form_label %}
<label class="fm-label fm-label-required">Fullname</label>
<div class="fm fm-text">
  <input placeholder="Please enter your fullname">
</div>
{% endcapture %}
<div class="form-example mt-none">
  {{ required_form_label }}
</div>
``` html{{ required_form_label }}```


#### Small{% include modifier.html %}
Add the `.fm-label-small` class to make a form label smaller.
{% capture small_form_label %}
<label class="fm-label fm-label-small">Fullname</label>
<div class="fm fm-text fm-small">
  <input placeholder="Please enter your fullname">
</div>
{% endcapture %}
<div class="form-example mt-none">
  {{ small_form_label }}
</div>
``` html{{ small_form_label }}```


#### Large{% include modifier.html %}
Add the `.fm-label-large` class to to make a form label larger.
{% capture large_form_label %}
<label class="fm-label fm-label-large">Fullname</label>
<div class="fm fm-text fm-large">
  <input placeholder="Please enter your fullname">
</div>
{% endcapture %}
<div class="form-example mt-none">
  {{ large_form_label }}
</div>
``` html{{ large_form_label }}```




## Sass Variables

### Sizes

``` sass
$form-element-inline-width-rem: 18rem !default
```

``` sass
$form-element-small-inline-width-rem: 14rem !default
```

``` sass
$form-element-large-inline-width-rem: 22rem !default
```

``` sass
$form-element-horizontal-padding-em: strip-unit($spacing-small-rem) * 1em !default
```

``` sass
$form-element-height-rem: 3rem !default
```

``` sass
$form-element-small-height-rem: 2rem !default
```

``` sass
$form-element-large-height-rem: 4rem !default
```

``` sass
$form-element-multiple-rows-height-rem: 9rem !default
```
Set the height of multiple select field and textarea.

``` sass
$form-element-multiple-rows-small-height-rem: 6rem !default
```

``` sass
$form-element-multiple-rows-large-height-rem: 12rem !default
```

``` sass
$form-element-checkfield-size-em: 1.4em !default
```
Set the width and the height of checkboxes and radios.

``` sass
$form-element-track-height-em: 0.4em !default
```

``` sass
$form-element-thumb-height-em: 1.4em !default
```

``` sass
$form-element-thumb-width-em: 1.4em !default
```



### Typography
``` sass
$form-element-typography-size-level: 5 !default
```

``` sass
$form-element-small-typography-size-level: 6 !default
```

``` sass
$form-element-large-typography-size-level: 4 !default
```


### Borders
``` sass
$form-element-border-width: $line-width-main !default
```

``` sass
$form-element-border-style: solid !default
```

``` sass
$form-element-border-radius: $border-radius-main !default
```

``` sass
$form-element-border-color: $line-color-main !default
```

``` sass
$form-element-border-color-on-error: $line-color-danger !default
```

``` sass
$form-element-border-color-on-focus: $line-color-primary !default
```

``` sass
$form-element-track-border-radius: $border-radius-main !default
```

``` sass
$form-element-thumb-border-radius: 100% !default
```

``` sass
$form-element-thumb-border-color: transparent !default
```

``` sass
$form-element-thumb-border-color-on-error: $form-element-border-color-on-error !default
```

``` sass
$form-element-thumb-border-color-on-focus: null !default
```


### Colors
``` sass
$form-element-color: $color-main !default
```

``` sass
$form-element-color-on-error: null !default
```

``` sass
$form-element-color-on-focus: null !default
```

``` sass
$form-placeholder-color: $color-muted !default
```

``` sass
$form-placeholder-color-on-error: null !default
```

``` sass
$form-placeholder-color-on-focus: null !default
```


### Backgrounds
``` sass
$form-element-background: $background-color-main !default
```

``` sass
$form-element-background-on-focus: null !default
```

``` sass
$form-element-background-on-error: null !default
```

``` sass
$form-element-track-background: darken($background-color-muted, 4%) !default !default
```

``` sass
$form-element-track-background-on-focus: null !default
```

``` sass
$form-element-track-background-on-error: null !default
```

``` sass
$form-element-thumb-background: $form-element-track-background !default
```

``` sass
$form-element-thumb-background-on-error: null !default
```

``` sass
$form-element-thumb-background-on-focus: $background-color-primary !default
```


### Shadows
``` sass
$form-element-box-shadow: null !default
```

``` sass
$form-element-box-shadow-on-focus: null !default
```

``` sass
$form-element-box-shadow-on-error: null !default
```


### Icons
``` sass
$form-element-icon-size-em: 1.286em !default
```

``` sass
$form-element-icon-color: $form-element-border-color !default
```

``` sass
$form-element-icon-color-on-error: $form-element-border-color-on-error !default
```

``` sass
$form-element-icon-color-on-focus: $form-element-border-color-on-focus !default
```

``` sass
$form-element-search-icon: '<svg viewBox="..."><path fill="#fill"...</svg>' !default
```

``` sass    
$form-element-select-icon: '<svg viewBox="..."><path fill="#fill"...</svg>' !default
```

``` sass    
$form-element-add-icon: '<svg viewBox="..."><path fill="#fill"...</svg>' !default
```

``` sass    
$form-element-checked-icon: '<svg viewBox="..."><path fill="#fill"...</svg>' !default
```

``` sass
$form-element-checked-icon-color: $form-element-color !default
```

``` sass
$form-element-checked-icon-color-on-error: null !default
```

``` sass
$form-element-checked-icon-color-on-focus: null !default
```


### Helper

``` sass
$form-helper-typography-size-level: 6 !default
```

``` sass
$form-helper-small-typography-size-level: null !default
```

``` sass
$form-helper-large-typography-size-level: 5 !default
```

``` sass
$form-hint-color: $color-muted !default
```

``` sass
$form-error-color: $color-danger !default
```




### Label
``` sass
$form-label-typography-size-level: 5 !default
```

``` sass
$form-label-small-typography-size-level: 6 !default
```

``` sass
$form-label-large-typography-size-level: 4 !default
```

``` sass
$form-label-color: $color-emphasis !default
```

``` sass
$form-label-required-content: " | Required" !default
```

``` sass
$form-label-required-color: $color-danger !default
```