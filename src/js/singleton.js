(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('./install.js'), require('./utilities.js')) :
  typeof define === 'function' && define.amd ? define(['./install.js', './utilities.js'], factory) :
  (factory());
}(this, (function () { 'use strict';

  var Singleton;

  luda(Singleton = (function() {
    class Singleton {
      static _addActivatingAndDeactivatingProperties() {
        this._ACTIVATE_EVENT_TYPE = `${this._SCOPE}:activate`;
        this._ACTIVATED_EVENT_TYPE = `${this._SCOPE}:activated`;
        this._DEACTIVATE_EVENT_TYPE = `${this._SCOPE}:deactivate`;
        this._DEACTIVATED_EVENT_TYPE = `${this._SCOPE}:deactivated`;
        this._ACTIVATING_MARK_ATTRIBUTE = `data-${this._SCOPE}-activating`;
        return this._DEACTIVATING_MARK_ATTRIBUTE = `data-${this._SCOPE}-deactivating`;
      }

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

      static _activatePrevented($ele, detail) {
        var activateEvent;
        activateEvent = luda.dispatch($ele, this._ACTIVATE_EVENT_TYPE, detail);
        return activateEvent.defaultPrevented;
      }

      static _deactivatePrevented($ele, detail) {
        var deactivateEvent;
        deactivateEvent = luda.dispatch($ele, this._DEACTIVATE_EVENT_TYPE, detail);
        return deactivateEvent.defaultPrevented;
      }

      static _handleActivateEnd($ele, detail) {
        var activateDuration;
        this._setActivatingMark($ele, detail);
        activateDuration = luda.getTransitionDuration($ele);
        luda.dispatch($ele, this._ACTIVATED_EVENT_TYPE, detail, activateDuration);
        setTimeout(() => {
          if ($ele) {
            return this._removeActivatingMark($ele);
          }
        }, activateDuration);
        return activateDuration;
      }

      static _handleDeactivateEnd($ele, detail) {
        var deactivateDuration;
        this._setDeactivatingMark($ele, detail);
        deactivateDuration = luda.getTransitionDuration($ele);
        luda.dispatch($ele, this._DEACTIVATED_EVENT_TYPE, detail, deactivateDuration);
        setTimeout(() => {
          if ($ele) {
            return this._removeDeactivatingMark($ele);
          }
        }, deactivateDuration);
        return deactivateDuration;
      }

      static _handleActivateCancel($ele, detail) {
        if (this._isActivating($ele)) {
          luda.dispatch($ele, this._ACTIVATED_EVENT_TYPE, detail);
          return this._removeActivatingMark($ele);
        }
      }

      static _handleDeactivateCancel($ele, detail) {
        if (this._isDeactivating($ele)) {
          luda.dispatch($ele, this._DEACTIVATED_EVENT_TYPE, detail);
          return this._removeDeactivatingMark($ele);
        }
      }

      static _isActivating($ele) {
        return $ele.hasAttribute(this._ACTIVATING_MARK_ATTRIBUTE);
      }

      static _isDeactivating($ele) {
        return $ele.hasAttribute(this._DEACTIVATING_MARK_ATTRIBUTE);
      }

      static _isTransitioning($ele) {
        return this._isActivating($ele) || this._isDeactivating($ele);
      }

      static _getActivatingMark($ele) {
        return $ele.getAttribute(this._ACTIVATING_MARK_ATTRIBUTE);
      }

      static _getDeactivatingMark($ele) {
        return $ele.getAttribute(this._DEACTIVATING_MARK_ATTRIBUTE);
      }

      static _removeActivatingMark($ele) {
        return $ele.removeAttribute(this._ACTIVATING_MARK_ATTRIBUTE);
      }

      static _removeDeactivatingMark($ele) {
        return $ele.removeAttribute(this._DEACTIVATING_MARK_ATTRIBUTE);
      }

      static _setActivatingMark($ele, value) {
        return $ele.setAttribute(this._ACTIVATING_MARK_ATTRIBUTE, value);
      }

      static _setDeactivatingMark($ele, value) {
        return $ele.setAttribute(this._DEACTIVATING_MARK_ATTRIBUTE, value);
      }

      static _observe(classObj) {
        if (!Singleton._observer) {
          Singleton._observer = new MutationObserver(function(mutations) {
            return mutations.forEach(function(mutation) {
              var $addedNodes, $removedNodes;
              $removedNodes = Array.from(mutation.removedNodes);
              $addedNodes = Array.from(mutation.addedNodes);
              $removedNodes.forEach(function($node) {
                if ($node instanceof Element) {
                  return Singleton._Observed.forEach(function(Observed) {
                    var $destroies;
                    if ($node.matches(Observed._selector)) {
                      if (Observed._onNodeRemoved) {
                        return Observed._onNodeRemoved($node);
                      }
                    } else {
                      $destroies = luda.$children(Observed._selector, $node);
                      return $destroies.forEach(function($destroy) {
                        if (Observed._onNodeRemoved) {
                          return Observed._onNodeRemoved($destroy);
                        }
                      });
                    }
                  });
                }
              });
              return $addedNodes.forEach(function($node) {
                if ($node instanceof Element) {
                  return Singleton._Observed.forEach(function(Observed) {
                    var $creates;
                    if ($node.matches(Observed._selector)) {
                      if (Observed._onNodeAdded) {
                        return Observed._onNodeAdded($node);
                      }
                    } else {
                      $creates = luda.$children(Observed._selector, $node);
                      return $creates.forEach(function($create) {
                        if (Observed._onNodeAdded) {
                          return Observed._onNodeAdded($create);
                        }
                      });
                    }
                  });
                }
              });
            });
          });
          Singleton._observer.observe(document.documentElement, Singleton._observerConfig);
        }
        if (classObj._onNodeAdded || classObj._onNodeRemoved && classObj._selector) {
          if (!Singleton._Observed.includes(classObj)) {
            return Singleton._Observed.push(classObj);
          }
        }
      }

      static _install() {
        var exposed, self;
        self = this;
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
        this._addActivatingAndDeactivatingProperties();
        luda.on(luda._DOC_READY, function() {
          return Singleton._observe(self);
        });
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

    Singleton._ACTIVATE_EVENT_TYPE = `${Singleton._SCOPE}:activate`;

    Singleton._ACTIVATED_EVENT_TYPE = `${Singleton._SCOPE}:activated`;

    Singleton._DEACTIVATE_EVENT_TYPE = `${Singleton._SCOPE}:deactivate`;

    Singleton._DEACTIVATED_EVENT_TYPE = `${Singleton._SCOPE}:deactivated`;

    Singleton._Observed = [];

    Singleton._observer = null;

    Singleton._observerConfig = {
      childList: true,
      subtree: true
    };

    Singleton._selector = '';

    return Singleton;

  }).call(this));

})));
