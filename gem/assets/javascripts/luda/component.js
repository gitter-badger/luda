//= require ./install
//= require ./utilities
//= require ./dom
//= require ./event
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('./install.js'), require('./utilities.js'), require('./dom.js'), require('./event.js')) :
  typeof define === 'function' && define.amd ? define(['./install.js', './utilities.js', './dom.js', './event.js'], factory) :
  (factory());
}(this, (function () { 'use strict';

  var Component;

  luda(Component = (function() {
    class Component {
      _hasDescendant(descendant) {
        if (this._children.length && descendant) {
          if (this._children.includes(descendant)) {
            return true;
          }
          return this._children.some(function(child) {
            return child._hasDescendant(descendant);
          });
        } else {
          return false;
        }
      }

      _observe() {
        this._observer = new MutationObserver(this._onMutations.bind(this));
        return this._observer.observe(this._$component, this.constructor._observerConfig);
      }

      _disconnect() {
        this._observer.disconnect();
        return this._observer = null;
      }

      static create($component) {
        var $family, componentIsElementInstance, instance, parent;
        componentIsElementInstance = $component instanceof Element;
        if (!componentIsElementInstance) {
          throw new Error(this._$COMPONENT_INVALID_ERROR);
        }
        $family = this._query$family($component);
        instance = this.query($component);
        if ($family._$parent) {
          if (parent = this.query($family._$parent)) {
            if (!instance) {
              this._instances.push(instance = this._createInstance($component));
            }
            if (instance._parent !== parent) {
              parent._children.push(instance) && (instance._parent = parent);
            }
            $family._$children.forEach(($child) => {
              return this.create($child);
            });
            return instance;
          } else {
            this.create($family._$parent);
            return this.query($component);
          }
        } else {
          if (!instance) {
            this._instances.push(instance = this._createInstance($component));
          }
          $family._$children.forEach(($child) => {
            return this.create($child);
          });
          return instance;
        }
      }

      static destroy(instance$component) {
        var attribute, instance, results, value;
        instance = this.query(instance$component);
        if (instance) {
          if (instance._observer) {
            instance._disconnect();
          }
          if (instance._destroy) {
            instance._destroy();
          }
          while (instance._children.length) {
            this.destroy(instance._children[0]);
          }
          if (instance._parent) {
            luda.except(instance, instance._parent._children);
          }
          luda.except(instance, this._instances);
          results = [];
          for (attribute in instance) {
            value = instance[attribute];
            results.push(instance[attribute] = null);
          }
          return results;
        }
      }

      static query(instance$component) {
        var instance;
        instance = null;
        if (instance$component instanceof this && this._instances.includes(instance$component)) {
          instance = instance$component;
        } else if (instance$component instanceof Element) {
          this._instances.some(function(inited) {
            if (inited._$component === instance$component) {
              instance = inited;
              return true;
            }
          });
        }
        return instance;
      }

      static _query$family($component) {
        var _$children, _$parent;
        _$parent = null;
        _$children = [];
        if (this._SELECTOR) {
          _$parent = luda.$parent(this._SELECTOR, $component);
          _$children = luda.$unnested(this._SELECTOR, $component, this._SELECTOR);
        }
        return {_$parent, _$children};
      }

      static _createInstance($component) {
        var instance;
        instance = new this();
        instance._$component = $component;
        instance._parent = null;
        instance._children = [];
        instance._observer = null;
        if (instance._constructor) {
          instance._constructor();
        }
        if (!(instance._observer && instance._onMutations && this._observerConfig)) {
          instance._observe();
        }
        return instance;
      }

      static _observe(classObj) {
        if (!Component._observer) {
          Component._observer = new MutationObserver(function(mutations) {
            return mutations.forEach(function(mutation) {
              var $addedNodes, $removedNodes;
              $removedNodes = Array.from(mutation.removedNodes);
              $addedNodes = Array.from(mutation.addedNodes);
              $removedNodes.forEach(function($node) {
                if ($node instanceof Element) {
                  return Component._Observed.forEach(function(Observed) {
                    var $destroies;
                    if ($node.matches(Observed._SELECTOR)) {
                      return Observed.destroy($node);
                    } else {
                      $destroies = luda.$children(Observed._SELECTOR, $node);
                      return $destroies.forEach(function($destroy) {
                        return Observed.destroy($destroy);
                      });
                    }
                  });
                }
              });
              return $addedNodes.forEach(function($node) {
                if ($node instanceof Element) {
                  return Component._Observed.forEach(function(Observed) {
                    var $creates;
                    if ($node.matches(Observed._SELECTOR)) {
                      return Observed.create($node);
                    } else {
                      $creates = luda.$children(Observed._SELECTOR, $node);
                      return $creates.forEach(function($create) {
                        return Observed.create($create);
                      });
                    }
                  });
                }
              });
            });
          });
          Component._observer.observe(document.documentElement, Component._observerConfig);
        }
        if (!Component._Observed.includes(classObj)) {
          return Component._Observed.push(classObj);
        }
      }

      static _install() {
        var exposed, self;
        self = this;
        if (this === Component) {
          return this;
        }
        if (!(this._SELECTOR || typeof this._SELECTOR !== 'string')) {
          throw new Error(this._COMPONENT_NO_SELECTOR_ERROR);
        }
        if (!this.hasOwnProperty('_instances')) {
          this._instances = [];
        }
        if (typeof this._init === 'function') {
          exposed = this._init();
        }
        luda.on(luda._DOC_READY, function() {
          luda.$children(self._SELECTOR).forEach(function($component) {
            return self.create($component);
          });
          return Component._observe(self);
        });
        if (exposed) {
          return exposed;
        } else {
          return this;
        }
      }

    }
    Component._SCOPE = 'Component';

    Component._COMPONENT_NO_SELECTOR_ERROR = 'Extended component must has a css selector';

    Component._$COMPONENT_INVALID_ERROR = '@param $component must be an instance of Element';

    Component._SELECTOR = '';

    Component._instances = [];

    Component._Observed = [];

    Component._observer = null;

    Component._observerConfig = {
      childList: true,
      subtree: true
    };

    return Component;

  }).call(this));

})));
