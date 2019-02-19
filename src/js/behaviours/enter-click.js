(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../install.js'), require('../constants.js'), require('../event.js'), require('../singleton.js')) :
  typeof define === 'function' && define.amd ? define(['../install.js', '../constants.js', '../event.js', '../singleton.js'], factory) :
  (factory());
}(this, (function () { 'use strict';

  luda((function() {
    var _Class;

    _Class = class extends luda.Singleton {
      static _init() {
        var self;
        self = this;
        return luda.on('keydown', function(e) {
          if (self._actived && e.keyCode === luda.KEY_ENTER && e.target.matches(self._selector)) {
            e.preventDefault();
            return setTimeout(function() {
              return e.target.click();
            });
          }
        });
      }

    };

    _Class._SCOPE = 'enterClick';

    _Class._SELECTORS = ['input[type=checkbox]', 'input[type=radio]', '[tabindex]'];

    return _Class;

  }).call(this));

})));
