``` sass
$breakpoint-width-pxs: (s: 0, m: 768px, l: 1200px) !default
```
You can override this variable according to your need, make sure the value is a sass map. Except the key of the first pair in the sass map, all the other keys are considered as postfixes which will be added to responsive components' class names.