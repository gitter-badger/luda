(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../install.js'), require('../dom.js'), require('../event.js'), require('../component.js')) :
  typeof define === 'function' && define.amd ? define(['../install.js', '../dom.js', '../event.js', '../component.js'], factory) :
  (factory());
}(this, (function () { 'use strict';

  luda((function() {
    var _Class;

    _Class = class extends luda.Component {
      
      // public
      activate(index) {
        var activateEvent, activatedIndex, deactivateEvent;
        if (this._$panes.length && !this._transiting) {
          activatedIndex = this._activeIndex;
          if ((index != null) && index !== this._activeIndex && (0 <= index && index <= this._$panes.length - 1)) {
            activateEvent = luda.dispatch(this._$panes[index], this.constructor._ACTIVATE_EVENT_TYPE, index);
            deactivateEvent = luda.dispatch(this._$panes[activatedIndex], this.constructor._DEACTIVATE_EVENT_TYPE, activatedIndex);
            if (activateEvent.defaultPrevented) {
              return this._setIndicatorsState();
            }
            if (deactivateEvent.defaultPrevented) {
              return this._setIndicatorsState();
            }
            this._transiting = true;
            this._activeIndex = index;
            return this._activate(activatedIndex);
          }
        }
      }

      // private
      _getConfig() {
        var _$indicators, _$panes, _activeIndex;
        _$panes = luda.$unnested(this.constructor._PANE_SELECTOR, this._$component, this.constructor._SELECTOR);
        _$indicators = luda.$unnested(this.constructor._INDICATOR_SELECTOR, this._$component, this.constructor._SELECTOR);
        _activeIndex = this.constructor._ACTIVE_INDEX;
        _$indicators.some(function($indicator, index) {
          if ($indicator.checked) {
            _activeIndex = index;
            return true;
          }
        });
        return {_$panes, _$indicators, _activeIndex};
      }

      _constructor() {
        ({_$panes: this._$panes, _$indicators: this._$indicators, _activeIndex: this._activeIndex} = this._getConfig());
        this._transiting = false;
        return this._activate();
      }

      _onMutations(mutations) {
        return this._constructor();
      }

      _activate(activatedIndex) {
        var $activatedPane, $pane, activateDuration, deactivateDuration;
        $pane = this._$panes[this._activeIndex];
        $activatedPane = this._$panes[activatedIndex];
        $pane.classList.add(this.constructor._PANE_ACTIVE_CSS_CLASS);
        if ($activatedPane) {
          $activatedPane.classList.remove(this.constructor._PANE_ACTIVE_CSS_CLASS);
        }
        activateDuration = luda.getTransitionDuration($pane);
        luda.dispatch($pane, this.constructor._ACTIVATED_EVENT_TYPE, this._activeIndex, activateDuration);
        if ($activatedPane) {
          deactivateDuration = luda.getTransitionDuration($activatedPane);
          luda.dispatch($activatedPane, this.constructor._DEACTIVATED_EVENT_TYPE, activatedIndex, deactivateDuration);
          setTimeout(() => {
            return this._transiting = false;
          }, Math.max(activateDuration, deactivateDuration));
        } else {
          setTimeout(() => {
            return this._transiting = false;
          }, activateDuration);
        }
        return this._setIndicatorsState();
      }

      _setIndicatorsState() {
        return this._$indicators.forEach(($indicator, index) => {
          if (index === this._activeIndex) {
            $indicator.setAttribute('checked', '');
            return $indicator.checked = true;
          } else {
            $indicator.removeAttribute('checked');
            return $indicator.checked = false;
          }
        });
      }

      // static private
      static _init() {
        var self;
        self = this;
        return luda.on('change', this._INDICATOR_SELECTOR, function(e) {
          var instance;
          if (this.checked) {
            instance = self.query(luda.$parent(self._SELECTOR, this));
            return instance.activate(instance._$indicators.indexOf(this));
          }
        });
      }

    };

    _Class._SCOPE = 'tab';

    _Class._SELECTOR = '.tab';

    _Class._PANE_SELECTOR = '.tab-pane';

    _Class._INDICATOR_SELECTOR = '.tab-indicators .btn-radio input[type=radio]';

    _Class._PANE_ACTIVE_CSS_CLASS = 'tab-pane-active';

    _Class._ACTIVE_INDEX = 0;

    _Class._ACTIVATE_EVENT_TYPE = `${_Class._SCOPE}:activate`;

    _Class._ACTIVATED_EVENT_TYPE = `${_Class._SCOPE}:activated`;

    _Class._DEACTIVATE_EVENT_TYPE = `${_Class._SCOPE}:deactivate`;

    _Class._DEACTIVATED_EVENT_TYPE = `${_Class._SCOPE}:deactivated`;

    _Class._observerConfig = {
      childList: true,
      subtree: true
    };

    return _Class;

  }).call(this));

})));
