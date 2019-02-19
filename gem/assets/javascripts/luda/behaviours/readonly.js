//= require ../install
//= require ../component
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../install.js'), require('../component.js')) :
  typeof define === 'function' && define.amd ? define(['../install.js', '../component.js'], factory) :
  (factory());
}(this, (function () { 'use strict';

  luda((function() {
    var _Class;

    _Class = class extends luda.Component {
      _getConfig() {
        var _isReadonly, _originalTabIndex, readonly;
        readonly = this._$component.getAttribute(this.constructor._READONLY_ATTRIBUTE);
        _isReadonly = readonly !== this.constructor._READONLY_FALSE_VALUE;
        _originalTabIndex = this._$component.tabIndex;
        return {_isReadonly, _originalTabIndex};
      }

      _constructor() {
        ({_isReadonly: this._isReadonly, _originalTabIndex: this._originalTabIndex} = this._getConfig());
        return this._setTabIndex();
      }

      _onMutations() {
        return this._constructor();
      }

      _setTabIndex() {
        if (this._isReadonly) {
          return this._$component.tabIndex = -1;
        } else {
          return this._$component.tabIndex = this._originalTabIndex;
        }
      }

    };

    _Class._SCOPE = 'readonly';

    _Class._READONLY_ATTRIBUTE = 'data-readonly';

    _Class._READONLY_FALSE_VALUE = 'false';

    _Class._SELECTOR = `[${_Class._READONLY_ATTRIBUTE}]`;

    _Class._observerConfig = {
      attributes: true,
      attributeFilter: [_Class._READONLY_ATTRIBUTE]
    };

    return _Class;

  }).call(this));

})));
