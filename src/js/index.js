(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('./behaviours/enter-click.js'), require('./behaviours/focus.js'), require('./behaviours/radio-tab.js'), require('./behaviours/readonly.js'), require('./behaviours/toggle.js'), require('./elements/form-file.js'), require('./elements/form-select.js'), require('./collections/carousel.js'), require('./collections/dropdown.js'), require('./collections/form-dropdown.js'), require('./collections/tab.js')) :
	typeof define === 'function' && define.amd ? define(['./behaviours/enter-click.js', './behaviours/focus.js', './behaviours/radio-tab.js', './behaviours/readonly.js', './behaviours/toggle.js', './elements/form-file.js', './elements/form-select.js', './collections/carousel.js', './collections/dropdown.js', './collections/form-dropdown.js', './collections/tab.js'], factory) :
	(factory());
}(this, (function () { 'use strict';



})));
