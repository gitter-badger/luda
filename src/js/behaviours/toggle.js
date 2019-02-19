(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../install.js'), require('../dom.js'), require('../event.js'), require('../singleton.js')) :
  typeof define === 'function' && define.amd ? define(['../install.js', '../dom.js', '../event.js', '../singleton.js'], factory) :
  (factory());
}(this, (function () { 'use strict';

  luda((function() {
    var _Class;

    _Class = class extends luda.Singleton {
      static active(name$target) {
        return this._query$targets(name$target).forEach(($target) => {
          $target.classList.add(this._ACTIVE_CSS_CLASS);
          return luda.dispatch($target, this._ACTIVED_EVENT_TYPE);
        });
      }

      static deactive(name$target) {
        return this._query$targets(name$target).forEach(($target) => {
          $target.classList.remove(this._ACTIVE_CSS_CLASS);
          return luda.dispatch($target, this._DEACTIVED_EVENT_TYPE);
        });
      }

      static toggle(name$target) {
        return this._query$targets(name$target).forEach(($target) => {
          if ($target.classList.contains(this._ACTIVE_CSS_CLASS)) {
            return this.deactive($target);
          } else {
            return this.active($target);
          }
        });
      }

      static _query$targets(name$target) {
        if (name$target instanceof Element) {
          return [name$target];
        } else {
          return luda.$children(`[${this._TOGGLE_TARGET_ATTRIBUTE}=${name$target}]`);
        }
      }

      static _init() {
        var self;
        self = this;
        return luda.on('click', this._selector, function(e) {
          var toggleChecked;
          toggleChecked = false;
          return luda.eventPath(e).some(function($path) {
            var $toggle, toggleName;
            if ($path instanceof Element) {
              if ($path.hasAttribute(self._TOGGLE_ATTRIBUTE) || $path.hasAttribute(self._TOGGLE_FOR_ATTRIBUTE)) {
                if (toggleName = $path.getAttribute(self._TOGGLE_FOR_ATTRIBUTE)) {
                  self.toggle(toggleName);
                  toggleChecked = true;
                }
                if ($path.hasAttribute(self._TOGGLE_ATTRIBUTE)) {
                  if ($path.hasAttribute(self._TOGGLE_TARGET_ATTRIBUTE)) {
                    $toggle = $path;
                  } else {
                    $toggle = luda.$parent(`[${self._TOGGLE_TARGET_ATTRIBUTE}]`, $path);
                  }
                  if ($toggle) {
                    self.toggle($toggle);
                    return toggleChecked = true;
                  }
                }
              } else if ($path.hasAttribute(self._NONE_TOGGLE_ATTRIBUTE)) {
                return toggleChecked = true;
              }
            }
          });
        });
      }

    };

    _Class._SCOPE = 'toggle';

    _Class._TOGGLE_TARGET_ATTRIBUTE = 'data-toggle-target';

    _Class._TOGGLE_ATTRIBUTE = 'data-toggle';

    _Class._TOGGLE_FOR_ATTRIBUTE = 'data-toggle-for';

    _Class._NONE_TOGGLE_ATTRIBUTE = 'data-none-toggle';

    _Class._ACTIVE_CSS_CLASS = 'toggle-active';

    _Class._SELECTORS = [`[${_Class._TOGGLE_FOR_ATTRIBUTE}]`, `[${_Class._TOGGLE_ATTRIBUTE}]`];

    _Class._ACTIVED_EVENT_TYPE = `${_Class._SCOPE}:actived`;

    _Class._DEACTIVED_EVENT_TYPE = `${_Class._SCOPE}:deactived`;

    return _Class;

  }).call(this));

})));
