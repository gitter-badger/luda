//= require ../install
//= require ../dom
//= require ../event
//= require ../component
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../install.js'), require('../dom.js'), require('../event.js'), require('../component.js')) :
  typeof define === 'function' && define.amd ? define(['../install.js', '../dom.js', '../event.js', '../component.js'], factory) :
  (factory());
}(this, (function () { 'use strict';

  luda((function() {
    var _Class;

    _Class = class extends luda.Component {
      _getConfig() {
        var _$file, _$simulator;
        _$file = luda.$child(this.constructor._FILE_SELECTOR, this._$component);
        _$simulator = luda.$child(this.constructor._SIMULATOR_SELECTOR, this._$component);
        return {_$file, _$simulator};
      }

      _constructor() {
        ({_$file: this._$file, _$simulator: this._$simulator} = this._getConfig());
        return this._init();
      }

      _onMutations() {
        return this._constructor();
      }

      _insertSimulator() {
        this._$simulator = document.createElement('input');
        this._$simulator.tabIndex = -1;
        return luda.$after(this._$simulator, this._$file);
      }

      _setPlaceholderValue() {
        return this._$simulator.placeholder = this._$file.getAttribute(this.constructor._PLACEHOLDER_ATTRIBUTE);
      }

      _setSimulatorValue() {
        var values;
        values = [];
        Array.from(this._$file.files).map(function(file) {
          return values.push(file.name);
        });
        if (values.length) {
          return this._$simulator.value = values.join(this.constructor._VALUE_SPLITOR);
        } else if (this._$file.hasAttribute(this.constructor._VALUE_ATTRIBUTE)) {
          return this._$simulator.value = this._$file.getAttribute(this.constructor._VALUE_ATTRIBUTE);
        }
      }

      _init() {
        if (this._$file) {
          if (!this._$simulator) {
            this._insertSimulator();
          }
          if (this._$file.hasAttribute(this.constructor._PLACEHOLDER_ATTRIBUTE)) {
            this._setPlaceholderValue();
          }
          return this._setSimulatorValue();
        }
      }

      static _init() {
        var self;
        self = this;
        luda.on('change', `${this._SELECTOR} ${this._FILE_SELECTOR}`, function(e) {
          return self.query(luda.$parent(self._SELECTOR, this))._setSimulatorValue();
        });
        return luda.on(luda._FORM_RESET, this._SELECTOR, function(e) {
          return setTimeout(() => {
            return self.query(this)._setSimulatorValue();
          });
        });
      }

    };

    _Class._SCOPE = 'fmFile';

    _Class._VALUE_SPLITOR = '   ';

    _Class._SELECTOR = '.fm-file';

    _Class._FILE_SELECTOR = 'input[type=file]';

    _Class._SIMULATOR_SELECTOR = 'input:not([type=file])';

    _Class._PLACEHOLDER_ATTRIBUTE = 'placeholder';

    _Class._VALUE_ATTRIBUTE = 'value';

    _Class._observerConfig = {
      childList: true,
      subtree: true
    };

    return _Class;

  }).call(this));

})));
