(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('./install.js'), require('./utilities.js')) :
  typeof define === 'function' && define.amd ? define(['./install.js', './utilities.js'], factory) :
  (factory());
}(this, (function () { 'use strict';

  var Singleton;

  luda(Singleton = (function() {
    class Singleton {
      static _add(selector) {
        if (typeof selector !== 'string') {
          throw new Error(this._SELECTOR_INVALID_ERROR);
        }
        if (!this._SELECTORS.includes(selector)) {
          this._SELECTORS.push(selector);
        }
        return this._mergeSelectors();
      }

      static _remove(selector) {
        if (typeof selector !== 'string') {
          throw new Error(this._SELECTOR_INVALID_ERROR);
        }
        luda.except(selector, this._SELECTORS);
        return this._mergeSelectors();
      }

      static _mergeSelectors() {
        return this._selector = this._SELECTORS.join(',');
      }

      static _install() {
        var exposed;
        if (this === Singleton) {
          return this;
        }
        if (!this.hasOwnProperty('_SELECTORS')) {
          this._SELECTORS = [];
        }
        this._mergeSelectors();
        if (typeof this._init === 'function') {
          exposed = this._init();
        }
        if (exposed) {
          return exposed;
        } else {
          return this;
        }
      }

    }
    Singleton._SCOPE = 'Singleton';

    Singleton._SELECTOR_INVALID_ERROR = '@param selector must be a css selector string';

    Singleton._SELECTORS = [];

    Singleton._selector = '';

    return Singleton;

  }).call(this));

})));
