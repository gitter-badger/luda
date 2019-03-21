---
title: Introduction
description: Before we start, here is a short introduction for you to better understand the principles and theories behind Luda.
order: 1
---

## Why Luda?

You can know if Luda is for you through below core principle explations.

### Luda is Lightweight

With internal components reusing and zero thirdparty dependencies, Luda is much more lightweight than many other UI frameworks, but still includes many components and keep growing.


### Luda is Modular

Luda provides modular support as deep as possible for Node.js based assets tools and Rake based assets tools. You can import what you need in Sass, Webpack, Rollup, Sprokets and many others.


### Designed for Lazy Developers

Based on mutation observer, Luda component handles lifecycle automitaclly, no more manual Javascript control.Every component handles its document flow internally, you can position it in or out of the normal document flow without any worry.

### Designed for Creative Designers

Luda provides different themes and the sass code is idempotent.All styles can be easily customized by overriding sass variables and definations. Kindly, common design concepts are also built in, like type scale, column grid, baseline grid and more.


## Component Categories
Luda components are classified into different types, you can follow this architecture to extend Luda.

### Element

Elements are basic visible units to create user interface. Each element has a specfic function, they don't rely on other elements. They can be used alone or combined together to create UI patterns. For example, `button` can exist alone or combined to create a `button group`.

### Pattern

Patterns are implementations of generally used UI design patterns. They can be combinations or extensions based on elements or other collections. For example, `form button` is a search bar like component. It's the combination of a `form text field` element and a `button` element.

### Utility

Most utilities are single css rule with important declaration, they are used to define universal pattern or fast override built in styles. For example, the utility `.rel` contains a single css rule `positon:relative !important`.

### Behavior

Behaviors are pure javascript components or functional css, they are used to control or enhance interaction actions. For example, `radio tab` enhances html radio elements, it makes radios navigatable through `tab` key.