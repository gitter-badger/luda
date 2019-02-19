/*! 
   * Luda 0.1.6 | https://luda.dev
   * Copyright 2018 oatw | https://oatw.blog
   * MIT license | http://opensource.org/licenses/MIT
   */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  var ENV;

  ENV = (function() {
    if (typeof document !== 'undefined') {
      if (typeof window !== 'undefined') {
        return window;
      }
      if (typeof global !== 'undefined') {
        return global;
      }
    }
    throw new Error('Unsupported runtime environment.');
  })();

  if (typeof ENV.luda !== 'function') {
    ENV.luda = function(installer) {
      var installed, name, property;
      if (!installer) {
        throw new Error('Installer cannot be detected.');
      }
      if (!['object', 'function'].includes(typeof installer)) {
        throw new Error('Installer must be object, array or function.');
      }
      if (installer.hasOwnProperty('_SCOPE')) {
        if (typeof installer._SCOPE !== 'string') {
          throw new Error('_SCOPE must be string');
        }
        return ENV.luda._install(installer._SCOPE, installer);
      }
      if (installer instanceof Array || typeof installer === 'function') {
        throw new Error('Unscoped installer must be object.');
      }
      installed = {};
      for (name in installer) {
        property = installer[name];
        installed[name] = ENV.luda._install(name, property);
      }
      return installed;
    };
    ENV.luda._install = function(namespace, installer) {
      var installedInstaller, installedName, ref;
      if (ENV.luda[namespace]) {
        console.warn(`Namespace ${namespace} is ocupied, sikp installation.`);
        return ENV.luda[namespace];
      }
      ref = ENV.luda;
      for (installedName in ref) {
        installedInstaller = ref[installedName];
        if (installer === installedInstaller) {
          console.warn(`Installer is installed with name ${installedName}, skip installation.`);
          return ENV.luda[installedName];
        }
      }
      if (installer._install) {
        if (typeof installer._install === 'function') {
          return ENV.luda[namespace] = installer._install();
        }
        return ENV.luda[namespace] = installer._install;
      }
      return ENV.luda[namespace] = installer;
    };
  }

  luda({
    KEY_LEFT: 37,
    KEY_UP: 38,
    KEY_RIGHT: 39,
    KEY_DOWN: 40,
    KEY_TAB: 9,
    KEY_ESC: 27,
    KEY_ENTER: 13
  });

  luda({
    $child: function(selector, $ancestor) {
      if (!$ancestor) {
        $ancestor = document;
      }
      return $ancestor.querySelector(selector);
    },
    $children: function(selector, $ancestor) {
      var $descendant, descendants;
      if (!$ancestor) {
        $ancestor = document;
      }
      $descendant = this.$child(selector, $ancestor);
      if ($descendant) {
        return descendants = Array.from($ancestor.querySelectorAll(selector));
      } else {
        return descendants = [];
      }
    },
    $unnested: function(selector, $ancestor, ancestorSelector) {
      var descendants;
      descendants = this.$children(selector, $ancestor);
      return descendants.filter(($descendant) => {
        if (this.$parent(ancestorSelector, $descendant) === $ancestor) {
          return $descendant;
        }
      });
    },
    $parent: function(selector, $descendant) {
      var $ancestor;
      $ancestor = $descendant.parentNode;
      if ($ancestor) {
        if ($ancestor.matches && $ancestor.matches(selector)) {
          return $ancestor;
        } else {
          return this.$parent(selector, $ancestor);
        }
      }
    },
    $parents: function(selector, $descendant, _ancestors) {
      var $ancestor;
      $ancestor = this.$parent(selector, $descendant);
      if (!_ancestors) {
        _ancestors = [];
      }
      if ($ancestor) {
        _ancestors.push($ancestor);
        return this.$parents(selector, $ancestor, _ancestors);
      } else {
        return _ancestors;
      }
    },
    $after: function($node, $target) {
      var $parent;
      $parent = $target.parentNode;
      if ($parent.lastChild === $target) {
        return $parent.appendChild($node);
      } else {
        return $parent.insertBefore($node, $target.nextSibling);
      }
    },
    $prepend: function($node, $target) {
      if ($target.firstChild) {
        return $target.insertBefore($node, $target.firstChild);
      } else {
        return $target.appendChild($node);
      }
    },
    reflow: function($element) {
      return $element.offsetHeight;
    }
  });

  var splice = [].splice;

  luda({
    _SWIPE_DISTANCE: 10,
    _EVENT_TYPE_PREFIX: 'luda',
    _SWIPE_LEFT: 'swipeleft',
    _SWIPE_RIGHT: 'swiperight',
    _SWIPE_UP: 'swipeup',
    _SWIPE_DOWN: 'swipedown',
    _SWIPE_LEFT_OR_UP: 'swipeleft or swipeup',
    _SWIPE_RIGHT_OR_DOWN: 'swiperight or swipedown',
    _DOC_READY: 'docready',
    _FORM_RESET: 'reset',
    eventPath: function(event) {
      var path;
      if (event.composedPath) {
        return path = event.composedPath();
      } else if (event.path) {
        return path = event.path;
      } else {
        return path = [event.target].concat(luda.$parents('*', event.target));
      }
    },
    on: function(event, ...selector) {
      var handler, ref;
      ref = selector, [...selector] = ref, [handler] = splice.call(selector, -1);
      switch (event) {
        case this._DOC_READY:
          return this._onDocReady(handler);
        case this._FORM_RESET:
          return this._onReset(selector[0], handler);
        case this._SWIPE_LEFT:
        case this._SWIPE_RIGHT:
        case this._SWIPE_UP:
        case this._SWIPE_DOWN:
        case this._SWIPE_LEFT_OR_UP:
        case this._SWIPE_RIGHT_OR_DOWN:
          return this._onSwipe(event, selector[0], handler);
        default:
          return this._on(event, selector[0], handler);
      }
    },
    onOpposite: function(event, selector, handler) {
      var _self;
      _self = this;
      return document.addEventListener(event, function(e) {
        var trigger;
        trigger = _self.eventPath(e).every(function($element) {
          return !$element.matches || !$element.matches(selector);
        });
        if (trigger) {
          return handler(e);
        }
      });
    },
    dispatch: function($target, type, detail, options = {}) {
      var evt;
      if (typeof options.bubbles !== 'boolean') {
        options.bubbles = true;
      }
      if (typeof options.cancelable !== 'boolean') {
        options.cancelable = true;
      }
      if (typeof options.composed !== 'boolean') {
        options.composed = true;
      }
      evt = new Event(`${this._EVENT_TYPE_PREFIX}:${type}`, options);
      evt.detail = detail;
      $target.dispatchEvent(evt);
      return evt;
    },
    _onDocReady: function(handler) {
      if (document.readyState === 'loading') {
        return document.addEventListener('DOMContentLoaded', handler);
      } else {
        return handler();
      }
    },
    _onReset: function(selector, handler) {
      return document.addEventListener('reset', function(e) {
        if (selector != null) {
          return luda.$children(selector, e.target).forEach(function($element) {
            return handler.bind($element)(e);
          });
        } else {
          return handler(e);
        }
      });
    },
    _onSwipe: function(event, selector, handler) {
      var $touchStartElement, _self, touchStartE, touchStartX, touchStartY, watch;
      _self = this;
      watch = false;
      $touchStartElement = document;
      touchStartE = null;
      touchStartX = 0;
      touchStartY = 0;
      document.addEventListener('touchstart', function(e) {
        if (e.touches.length === 1) {
          touchStartX = e.touches[0].screenX;
          touchStartY = e.touches[0].screenY;
          if (selector != null) {
            return _self.eventPath(e).some(function($element) {
              if ($element.matches && $element.matches(selector)) {
                $touchStartElement = $element;
                touchStartE = e;
                watch = true;
                return true;
              }
            });
          } else {
            return watch = true;
          }
        }
      });
      return document.addEventListener('touchmove', function(e) {
        var eventX, eventXOrY, eventY, touchDistanceX, touchDistanceY;
        if (watch && e.touches.length === 1) {
          touchDistanceX = e.touches[0].screenX - touchStartX;
          touchDistanceY = e.touches[0].screenY - touchStartY;
          eventX = void 0;
          eventY = void 0;
          eventXOrY = void 0;
          if (Math.abs(touchDistanceX) >= _self._SWIPE_DISTANCE) {
            if (touchDistanceX > 0) {
              eventX = _self._SWIPE_RIGHT;
            } else {
              eventX = _self._SWIPE_LEFT;
            }
          }
          if (Math.abs(touchDistanceY) >= _self._SWIPE_DISTANCE) {
            if (touchDistanceY > 0) {
              eventY = _self._SWIPE_DOWN;
            } else {
              eventY = _self._SWIPE_UP;
            }
          }
          if (eventX === _self._SWIPE_LEFT || eventY === _self._SWIPE_UP) {
            eventXOrY = _self._SWIPE_LEFT_OR_UP;
          }
          if (eventX === _self._SWIPE_RIGHT || eventY === _self._SWIPE_DOWN) {
            eventXOrY = _self._SWIPE_RIGHT_OR_DOWN;
          }
          if (((eventX != null) && eventX === event) || ((eventY != null) && eventY === event) || eventXOrY === event) {
            if (selector != null) {
              return _self.eventPath(e).some(function($element) {
                if ($element === $touchStartElement) {
                  watch = false;
                  handler.bind($element)(touchStartE, e);
                  return true;
                }
              });
            } else {
              watch = false;
              return handler(touchStartE, e);
            }
          }
        }
      });
    },
    _on: function(event, selector, handler) {
      var _self;
      if (selector === window) {
        return window.addEventListener(event, function(e) {
          return handler(e);
        });
      } else {
        _self = this;
        return document.addEventListener(event, function(e) {
          if (selector != null) {
            return _self.eventPath(e).some(function($element) {
              if ($element.matches && $element.matches(selector)) {
                handler.bind($element)(e);
                return true;
              }
            });
          } else {
            return handler(e);
          }
        });
      }
    }
  });

  luda({
    except: function(element, arr) {
      if (arr.includes(element)) {
        return arr.splice(arr.indexOf(element), 1);
      }
    }
  });

  var Singleton;

  luda(Singleton = (function() {
    class Singleton {
      static active() {
        return this._actived = true;
      }

      static deactive() {
        return this._actived = false;
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

    Singleton._actived = true;

    return Singleton;

  }).call(this));

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

  luda((function() {
    var _Class;

    _Class = class extends luda.Singleton {
      static _removeFocusClassExcept($exception) {
        return Array.from(this._$focus).forEach(($focus) => {
          if ($focus !== $exception) {
            return $focus.classList.remove(this._CSS_CLASS);
          }
        });
      }

      static _addFocusClassExceptHtmlAndBody($target) {
        if ($target !== document.body && $target !== document.documentElement) {
          return $target.classList.add(this._CSS_CLASS);
        }
      }

      static _changeFocusStateOnKeyEvent(e) {
        if (this._actived) {
          this._removeFocusClassExcept(e.target);
          return this._addFocusClassExceptHtmlAndBody(e.target);
        }
      }

      static _changeFocusStateOnMouseDownEvent(e) {
        var target;
        if (this._actived) {
          if (e.target.matches(this._PARENT_FOCUS_CHILDREN_SELECTOR)) {
            target = luda.$parent(this._PARENT_FOCUS_SELECTOR, e.target);
          } else {
            target = e.target;
          }
          if (target.matches(this._selector)) {
            this._removeFocusClassExcept(target);
            return this._addFocusClassExceptHtmlAndBody(target);
          } else {
            return this._removeFocusClassExcept();
          }
        }
      }

      static _setElementPrototype() {
        var blur, focus, self;
        focus = HTMLElement.prototype.focus;
        blur = HTMLElement.prototype.blur;
        self = this;
        HTMLElement.prototype.focus = function() {
          focus.apply(this, arguments);
          if (self._actived && document.activeElement === this) {
            self._removeFocusClassExcept(this);
            return self._addFocusClassExceptHtmlAndBody(this);
          }
        };
        return HTMLElement.prototype.blur = function() {
          blur.apply(this, arguments);
          if (self._actived) {
            return this.classList.remove(self._CSS_CLASS);
          }
        };
      }

      static _init() {
        this._setElementPrototype();
        luda.on('keydown', this._changeFocusStateOnKeyEvent.bind(this));
        luda.on('keyup', this._changeFocusStateOnKeyEvent.bind(this));
        luda.on('mousedown', this._changeFocusStateOnMouseDownEvent.bind(this));
        luda.on('touchstart', this._TOUCHSTART_FOCUS_SELECTOR, this._changeFocusStateOnMouseDownEvent.bind(this));
        return luda.on('focusin', this._changeFocusStateOnMouseDownEvent.bind(this));
      }

    };

    _Class._SCOPE = 'focus';

    _Class._CSS_CLASS = 'focus';

    // mouse focusable selectors
    _Class._SELECTORS = ['select', 'textarea', ':not(.btn-check):not(.btn-radio):not(.btn-file) > input:not([type=button]):not([type=submit]):not([type=reset])'];

    _Class._TOUCHSTART_FOCUS_SELECTOR = 'input[type=range]';

    _Class._PARENT_FOCUS_SELECTOR = 'select[multiple]';

    _Class._PARENT_FOCUS_CHILDREN_SELECTOR = `${_Class._PARENT_FOCUS_SELECTOR} *`;

    _Class._$focus = document.getElementsByClassName(_Class._CSS_CLASS);

    return _Class;

  }).call(this));

  luda((function() {
    var _Class;

    _Class = class extends luda.Singleton {
      static _querySameName$radios($radio) {
        var $inputs, selector;
        if ($radio.name) {
          selector = `${this._selector}[name=${$radio.name}]`;
        } else {
          selector = this._selector;
        }
        $inputs = luda.$children(selector);
        return $inputs.filter(function($input) {
          return $input.tabIndex >= 0;
        });
      }

      static _query$prev$next($radio) {
        var $next, $prev, $sameNameRadios, radioIndex;
        $sameNameRadios = this._querySameName$radios($radio);
        radioIndex = $sameNameRadios.indexOf($radio);
        $prev = $sameNameRadios[radioIndex - 1];
        $next = $sameNameRadios[radioIndex + 1];
        return {$prev, $next};
      }

      static _init() {
        var self;
        self = this;
        return luda.on('keydown', function(e) {
          var $next, $prev;
          if (self._actived && e.keyCode === luda.KEY_TAB && e.target.nodeName.toUpperCase() === 'INPUT' && e.target.type === 'radio') {
            if (e.shiftKey) {
              if ($prev = self._query$prev$next(e.target).$prev) {
                e.preventDefault();
                return $prev.focus();
              }
            } else {
              if ($next = self._query$prev$next(e.target).$next) {
                e.preventDefault();
                return $next.focus();
              }
            }
          }
        });
      }

    };

    _Class._SCOPE = 'radioTab';

    _Class._SELECTORS = ['input[type=radio]:not([disabled])'];

    return _Class;

  }).call(this));

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

  luda((function() {
    var _Class;

    _Class = class extends luda.Component {
      select(indexOrIndexArray) {
        var selectedIndexes;
        if (this._$select.multiple) {
          if (this._$multipleSelectPlaceholder) {
            selectedIndexes = indexOrIndexArray;
          } else {
            selectedIndexes = indexOrIndexArray.map(function(index) {
              return index + 1;
            });
          }
          Array.from(this._$select.options).forEach(function($option, index) {
            return $option.selected = selectedIndexes.includes(index);
          });
          return this._markSelectedOption();
        } else {
          this._$select.selectedIndex = selectedIndex;
          this._setSingleSelectSimulatorValue();
          return this._markSelectedOption();
        }
      }

      _getConfig() {
        var _$defaultSelectedOptions, _$multipleSelectPlaceholder, _$select, _$singleSelectSimulator, _defaultSelectedOptionMarked;
        _$select = luda.$child(this.constructor._SELECT_SELECTOR, this._$component);
        _$singleSelectSimulator = luda.$child(this.constructor._SINGLE_SELECT_SIMULATOR_SELECTOR, this._$component);
        _$multipleSelectPlaceholder = luda.$child(`.${this.constructor._MULTIPLE_SELECT_PLACEHOLDER_CSS_CLASS}`, this._$component);
        _$defaultSelectedOptions = luda.$children(`[${this.constructor._DEFAULT_SELECTED_OPTION_ATTRIBUTE}]`, this._$component);
        _defaultSelectedOptionMarked = this._$component.hasAttribute(this.constructor._INITED_ATTRIBUTE);
        return {_$select, _$singleSelectSimulator, _$multipleSelectPlaceholder, _$defaultSelectedOptions, _defaultSelectedOptionMarked};
      }

      _constructor() {
        ({_$select: this._$select, _$singleSelectSimulator: this._$singleSelectSimulator, _$multipleSelectPlaceholder: this._$multipleSelectPlaceholder, _$defaultSelectedOptions: this._$defaultSelectedOptions, _defaultSelectedOptionMarked: this._defaultSelectedOptionMarked} = this._getConfig());
        if (this._$select) {
          if (this._$select.multiple) {
            return this._initMultipleSelect();
          } else {
            return this._initSingleSelect();
          }
        }
      }

      _onMutations() {
        return this._constructor();
      }

      _markSelectedOption() {
        if (this._observer) {
          this._disconnect();
        }
        Array.from(this._$select.options).forEach(function($option) {
          if ($option.selected) {
            return $option.setAttribute('selected', 'selected');
          } else {
            return $option.removeAttribute('selected');
          }
        });
        if (!this._observer) {
          return this._observe();
        }
      }

      _markDefaultSelectedOption() {
        this._$component.setAttribute(this.constructor._INITED_ATTRIBUTE, '');
        return Array.from(this._$select.options).forEach(($option) => {
          if ($option.selected) {
            return $option.setAttribute(this.constructor._DEFAULT_SELECTED_OPTION_ATTRIBUTE, '');
          }
        });
      }

      _setSingleSelectedDefaultSelectedOption() {
        var hasSelected;
        hasSelected = Array.from(this._$select.options).some(function($option) {
          return $option.getAttribute('selected') === 'selected';
        });
        if (!hasSelected) {
          return this._$select.selectedIndex = -1;
        }
      }

      _insertSingleSelectSimulator() {
        this._$singleSelectSimulator = document.createElement('input');
        this._$singleSelectSimulator.tabIndex = -1;
        return luda.$after(this._$singleSelectSimulator, this._$select);
      }

      _setSingleSelectPlaceholderValue() {
        return this._$singleSelectSimulator.placeholder = this._$select.getAttribute(this.constructor._PLACEHOLDER_ATTRIBUTE);
      }

      _setSingleSelectSimulatorValue() {
        var $selectedOption;
        if ($selectedOption = this._$select.options[this._$select.selectedIndex]) {
          return this._$singleSelectSimulator.value = $selectedOption.innerText;
        } else {
          return this._$singleSelectSimulator.value = '';
        }
      }

      _initSingleSelect() {
        if (!this._$singleSelectSimulator) {
          this._insertSingleSelectSimulator();
        }
        if (this._$select.hasAttribute(this.constructor._PLACEHOLDER_ATTRIBUTE)) {
          this._setSingleSelectedDefaultSelectedOption();
          this._setSingleSelectPlaceholderValue();
        }
        if (!this._defaultSelectedOptionMarked) {
          this._markDefaultSelectedOption();
        }
        this._setSingleSelectSimulatorValue();
        return this._markSelectedOption();
      }

      _insertMultipleSelectBlankOption() {
        this._$multipleSelectPlaceholder = document.createElement('option');
        this._$multipleSelectPlaceholder.className = this.constructor._MULTIPLE_SELECT_PLACEHOLDER_CSS_CLASS;
        this._$multipleSelectPlaceholder.disabled = true;
        return luda.$prepend(this._$multipleSelectPlaceholder, this._$select);
      }

      _setMultipleSelectPlaceholderValue() {
        return this._$multipleSelectPlaceholder.innerText = this._$select.getAttribute(this.constructor._PLACEHOLDER_ATTRIBUTE);
      }

      _initMultipleSelect() {
        if (!this._$multipleSelectPlaceholder) {
          if (this._$select.hasAttribute(this.constructor._PLACEHOLDER_ATTRIBUTE)) {
            this._insertMultipleSelectBlankOption();
            this._setMultipleSelectPlaceholderValue();
          }
        }
        if (!this._defaultSelectedOptionMarked) {
          return this._markDefaultSelectedOption();
        }
      }

      _reset() {
        if (this._$select) {
          Array.from(this._$select.options).forEach(($option) => {
            return $option.selected = this._$defaultSelectedOptions.includes($option);
          });
          if (!this._$select.multiple) {
            this._setSingleSelectSimulatorValue();
          }
          return this._markSelectedOption();
        }
      }

      static _init() {
        var self;
        self = this;
        luda.on('change', `${this._SELECTOR} ${this._SELECT_SELECTOR}`, function(e) {
          var instance;
          instance = self.query(luda.$parent(self._SELECTOR, this));
          if (!this.multiple) {
            instance._setSingleSelectSimulatorValue();
          }
          return instance._markSelectedOption();
        });
        return luda.on(luda._FORM_RESET, this._SELECTOR, function(e) {
          return setTimeout(() => {
            return self.query(this)._reset();
          });
        });
      }

    };

    _Class._SCOPE = 'fmSelect';

    _Class._SELECTOR = '.fm-select';

    _Class._SELECT_SELECTOR = 'select';

    _Class._SINGLE_SELECT_SIMULATOR_SELECTOR = 'input';

    _Class._PLACEHOLDER_ATTRIBUTE = 'placeholder';

    _Class._MULTIPLE_SELECT_PLACEHOLDER_CSS_CLASS = 'fm-select-multiple-placeholder';

    _Class._DEFAULT_SELECTED_OPTION_ATTRIBUTE = 'data-fm-select-default-selected';

    _Class._INITED_ATTRIBUTE = 'data-fm-select-inited';

    _Class._observerConfig = {
      childList: true,
      attributes: true,
      subtree: true,
      attributeFilter: ['selected']
    };

    return _Class;

  }).call(this));

  luda((function() {
    var _Class;

    _Class = class extends luda.Component {
      
      // public
      active(index) {
        var action, activedIndex;
        if (this._$items.length && !this._transiting) {
          activedIndex = this._activeIndex;
          if ((index != null) && index !== this._activeIndex && (0 <= index && index <= this._$items.length - 1)) {
            this._transiting = true;
            this._activeIndex = index;
            action = index < activedIndex ? '_slidePrev' : '_slideNext';
            return this[action](this._$items[activedIndex], activedIndex);
          }
        }
      }

      next() {
        var activedIndex, index;
        if (this._$items.length && !this._transiting) {
          activedIndex = this._activeIndex;
          index = activedIndex + 1;
          if (index > this._$items.length - 1) {
            if (!this._wrap) {
              return;
            }
            index = 0;
          }
          this._transiting = true;
          this._activeIndex = index;
          this._slideNext(this._$items[activedIndex], activedIndex);
          this._playTimeStamp = Date.now();
          return this._pausedRemainTime = this._interval;
        }
      }

      prev() {
        var activedIndex, index;
        if (this._$items.length && !this._transiting) {
          activedIndex = this._activeIndex;
          index = activedIndex - 1;
          if (index < 0) {
            if (!this._wrap) {
              return;
            }
            index = this._$items.length - 1;
          }
          this._transiting = true;
          this._activeIndex = index;
          this._slidePrev(this._$items[activedIndex], activedIndex);
          this._playTimeStamp = Date.now();
          return this._pausedRemainTime = this._interval;
        }
      }

      pause() {
        if (this._intervaling != null) {
          clearInterval(this._intervaling);
          this._intervaling = null;
          return this._pausedRemainTime = this._pausedRemainTime - (Date.now() - this._playTimeStamp);
        }
      }

      play() {
        var execute;
        if (this._interval && this._$items.length > 1) {
          this._playTimeStamp = Date.now();
          this.pause();
          execute = () => {
            this.next();
            return this._intervaling = setInterval(this.next.bind(this), this._interval);
          };
          return this._intervaling = setTimeout(execute, this._pausedRemainTime);
        }
      }

      // private
      _getConfig() {
        var _$indicators, _$items, _$nextControl, _$prevControl, _activeIndex, _interval, _wrap;
        _$items = luda.$unnested(this.constructor._ITEMS_SELECTOR, this._$component, this.constructor._SELECTOR);
        _$indicators = luda.$unnested(this.constructor._INDICATORS_SELECTOR, this._$component, this.constructor._SELECTOR);
        _$prevControl = luda.$child(this.constructor._PREV_CONTROL_SELECTOR, this._$component);
        _$nextControl = luda.$child(this.constructor._NEXT_CONTROL_SELECTOR, this._$component);
        _activeIndex = _$items.indexOf(luda.$child(`.${this.constructor._ITEM_ACTIVE_CSS_CLASS}`, this._$component));
        if (_activeIndex === -1) {
          _activeIndex = this.constructor._ACTIVE_INDEX;
        }
        _interval = this._$component.getAttribute(this.constructor._INTERVAL_ATTRIBUTE);
        if (_interval === this.constructor._FALSE) {
          _interval = false;
        } else {
          _interval = Math.abs(parseInt(_interval, 10)) || this.constructor._INTERVAL;
        }
        _wrap = this._$component.getAttribute(this.constructor._WRAP_ATTRIBUTE);
        _wrap = _wrap === this.constructor._FALSE ? false : this.constructor._WRAP;
        return {_$items, _$indicators, _$prevControl, _$nextControl, _activeIndex, _interval, _wrap};
      }

      _constructor() {
        ({_$items: this._$items, _$indicators: this._$indicators, _$prevControl: this._$prevControl, _$nextControl: this._$nextControl, _activeIndex: this._activeIndex, _interval: this._interval, _wrap: this._wrap} = this._getConfig());
        this._transiting = false;
        this._intervaling = null;
        this._playTimeStamp = 0;
        this._pausedRemainTime = this._interval;
        this._layout();
        return this.play();
      }

      _onMutations(mutations) {
        ({_$items: this._$items, _$indicators: this._$indicators, _$prevControl: this._$prevControl, _$nextControl: this._$nextControl, _activeIndex: this._activeIndex, _interval: this._interval, _wrap: this._wrap} = this._getConfig());
        this._setIndicatorsState();
        this._setDirectionControlState();
        return this.play();
      }

      _destroy() {
        return this.pause();
      }

      _layout() {
        this._$items.forEach(($item, index) => {
          $item.style.transition = 'none';
          if (index > this._activeIndex) {
            $item.classList.add(this.constructor._ITEM_NEXT_CSS_CLASS);
            $item.classList.remove(this.constructor._ITEM_PREV_CSS_CLASS);
            $item.classList.remove(this.constructor._ITEM_ACTIVE_CSS_CLASS);
          } else if (index < this._activeIndex) {
            $item.classList.add(this.constructor._ITEM_PREV_CSS_CLASS);
            $item.classList.remove(this.constructor._ITEM_NEXT_CSS_CLASS);
            $item.classList.remove(this.constructor._ITEM_ACTIVE_CSS_CLASS);
          } else {
            luda.dispatch($item, this.constructor._ACTIVED_EVENT_TYPE, index);
            $item.classList.add(this.constructor._ITEM_ACTIVE_CSS_CLASS);
            $item.classList.remove(this.constructor._ITEM_NEXT_CSS_CLASS);
            $item.classList.remove(this.constructor._ITEM_PREV_CSS_CLASS);
          }
          luda.reflow($item);
          return $item.style.transition = '';
        });
        this._setIndicatorsState();
        return this._setDirectionControlState();
      }

      _slideNext($activedItem, activedIndex) {
        var $item;
        if (this._$items.length > 1) {
          $item = this._$items[this._activeIndex];
          luda.dispatch($item, this.constructor._ACTIVE_EVENT_TYPE, this._activeIndex);
          $item.style.transition = 'none';
          $item.classList.remove(this.constructor._ITEM_PREV_CSS_CLASS);
          $item.classList.add(this.constructor._ITEM_NEXT_CSS_CLASS);
          luda.reflow($item);
          $item.style.transition = '';
          $item.classList.remove(this.constructor._ITEM_NEXT_CSS_CLASS);
          $item.classList.add(this.constructor._ITEM_ACTIVE_CSS_CLASS);
          luda.dispatch($activedItem, this.constructor._DEACTIVE_EVENT_TYPE, activedIndex);
          $activedItem.classList.remove(this.constructor._ITEM_ACTIVE_CSS_CLASS);
          $activedItem.classList.add(this.constructor._ITEM_PREV_CSS_CLASS);
          this._setIndicatorsState();
          return this._setDirectionControlState();
        }
      }

      _slidePrev($activedItem, activedIndex) {
        var $item;
        if (this._$items.length > 1) {
          $item = this._$items[this._activeIndex];
          luda.dispatch($item, this.constructor._ACTIVE_EVENT_TYPE, this._activeIndex);
          $item.style.transition = 'none';
          $item.classList.remove(this.constructor._ITEM_NEXT_CSS_CLASS);
          $item.classList.add(this.constructor._ITEM_PREV_CSS_CLASS);
          luda.reflow($item);
          $item.style.transition = '';
          $item.classList.remove(this.constructor._ITEM_PREV_CSS_CLASS);
          $item.classList.add(this.constructor._ITEM_ACTIVE_CSS_CLASS);
          luda.dispatch($activedItem, this.constructor._DEACTIVE_EVENT_TYPE, activedIndex);
          $activedItem.classList.remove(this.constructor._ITEM_ACTIVE_CSS_CLASS);
          $activedItem.classList.add(this.constructor._ITEM_NEXT_CSS_CLASS);
          this._setIndicatorsState();
          return this._setDirectionControlState();
        }
      }

      _setIndicatorsState() {
        return this._$indicators.forEach(($indicator, index) => {
          return $indicator.disabled = index === this._activeIndex;
        });
      }

      _setDirectionControlState() {
        var ref, ref1, ref2, ref3;
        if (this._$items.length <= 1) {
          return (ref = this._$prevControl) != null ? ref.disabled = (ref1 = this._$nextControl) != null ? ref1.disabled = true : void 0 : void 0;
        } else {
          if ((ref2 = this._$prevControl) != null) {
            ref2.disabled = this._activeIndex === 0 && !this._wrap;
          }
          return (ref3 = this._$nextControl) != null ? ref3.disabled = this._activeIndex === this._$items.length - 1 && !this._wrap : void 0;
        }
      }

      
      // static private
      static _init() {
        var self;
        self = this;
        luda.on('transitionend', this._ITEMS_SELECTOR, function(e) {
          var index, instance;
          instance = self.query(luda.$parent(self._SELECTOR, this));
          instance._transiting = false;
          index = instance._$items.indexOf(this);
          if (this.classList.contains(self._ITEM_ACTIVE_CSS_CLASS)) {
            return luda.dispatch(this, self._ACTIVED_EVENT_TYPE, index);
          } else {
            return luda.dispatch(this, self._DEACTIVED_EVENT_TYPE, index);
          }
        });
        luda.on('click', this._INDICATORS_SELECTOR, function(e) {
          var instance;
          instance = self.query(luda.$parent(self._SELECTOR, this));
          return instance.active(instance._$indicators.indexOf(this));
        });
        luda.on('touchstart', this._SELECTOR, function(e) {
          return self.query(this).pause();
        });
        luda.on('touchend', this._SELECTOR, function(e) {
          return setTimeout(() => {
            return self.query(this).play();
          });
        });
        luda.on('mouseover', this._SELECTOR, function(e) {
          return self.query(this).pause();
        });
        luda.on('mouseout', this._SELECTOR, function(e) {
          return self.query(this).play();
        });
        luda.on(luda._SWIPE_LEFT_OR_UP, this._SELECTOR, function(startE, e) {
          return self.query(this).next();
        });
        luda.on(luda._SWIPE_RIGHT_OR_DOWN, this._SELECTOR, function(startE, e) {
          return self.query(this).prev();
        });
        luda.on('click', this._PREV_CONTROL_SELECTOR, function(e) {
          return self.query(luda.$parent(self._SELECTOR, this)).prev();
        });
        return luda.on('click', this._NEXT_CONTROL_SELECTOR, function(e) {
          return self.query(luda.$parent(self._SELECTOR, this)).next();
        });
      }

    };

    _Class._SCOPE = 'carousel';

    _Class._SELECTOR = '.carousel';

    _Class._ITEMS_SELECTOR = '.carousel-item';

    _Class._PREV_CONTROL_SELECTOR = '.carousel-prev';

    _Class._NEXT_CONTROL_SELECTOR = '.carousel-next';

    _Class._INDICATORS_SELECTOR = '.carousel-indicators .btn';

    _Class._INTERVAL_ATTRIBUTE = 'data-carousel-interval';

    _Class._WRAP_ATTRIBUTE = 'data-carousel-wrap';

    _Class._ITEM_ACTIVE_CSS_CLASS = 'carousel-item-active';

    _Class._ITEM_NEXT_CSS_CLASS = 'carousel-item-next';

    _Class._ITEM_PREV_CSS_CLASS = 'carousel-item-prev';

    _Class._ACTIVE_INDEX = 0;

    _Class._INTERVAL = 5000;

    _Class._WRAP = true;

    _Class._FALSE = 'false';

    _Class._ACTIVE_EVENT_TYPE = `${_Class._SCOPE}:active`;

    _Class._ACTIVED_EVENT_TYPE = `${_Class._SCOPE}:actived`;

    _Class._DEACTIVE_EVENT_TYPE = `${_Class._SCOPE}:deactive`;

    _Class._DEACTIVED_EVENT_TYPE = `${_Class._SCOPE}:deactived`;

    _Class._observerConfig = {
      childList: true,
      attributes: true,
      subtree: true,
      attributeFilter: [_Class._INTERVAL_ATTRIBUTE, _Class._WRAP_ATTRIBUTE]
    };

    return _Class;

  }).call(this));

  luda((function() {
    var _Class;

    _Class = class extends luda.Component {
      active() {
        var ref;
        if (!this._actived()) {
          this._$component.classList.add(this.constructor._ACTIVE_CSS_CLASS);
          this.constructor._$focused.push(document.activeElement);
          if ((ref = this._parent) != null) {
            ref.active();
          }
          return luda.dispatch(this._$component, this.constructor._ACTIVED_EVENT_TYPE);
        }
      }

      deactive(focus) {
        var ref;
        if (this._actived()) {
          this._$component.classList.remove(this.constructor._ACTIVE_CSS_CLASS);
          this._children.forEach(function(child) {
            return child.deactive();
          });
          if (focus) {
            if ((ref = this.constructor._$focused[this.constructor._$focused.length - 1]) != null) {
              ref.focus();
            }
          }
          this.constructor._$focused.splice(this.constructor._$focused.length - 1, 1);
          return luda.dispatch(this._$component, this.constructor._DEACTIVED_EVENT_TYPE);
        }
      }

      toggle(focus) {
        if (this._actived()) {
          return this.deactive(focus);
        } else {
          return this.active();
        }
      }

      prev() {
        var focusIndex;
        if (this._$items.length && this._actived()) {
          focusIndex = this._$items.indexOf(document.activeElement) - 1;
          if (focusIndex < 0) {
            focusIndex = 0;
          }
          return this._$items[focusIndex].focus();
        }
      }

      next() {
        var focusIndex;
        if (this._$items.length && this._actived()) {
          focusIndex = this._$items.indexOf(document.activeElement) + 1;
          if (focusIndex > this._$items.length - 1) {
            focusIndex = this._$items.length - 1;
          }
          return this._$items[focusIndex].focus();
        }
      }

      _getConfig() {
        var _$items, _$menu, _$noneSwitches, _$switches, _isStandalone;
        _$menu = luda.$child(this.constructor._MENU_SELECTOR, this._$component);
        _$switches = luda.$unnested(this.constructor._SWITCHES_SELECTOR, this._$component, this.constructor._SELECTOR).concat(luda.$unnested(this.constructor._SWITCHES_SELECTOR, _$menu, this.constructor._MENU_SELECTOR));
        _$noneSwitches = luda.$unnested(this.constructor._NONE_SWITCHES_SELECTOR, this._$component, this.constructor._SELECTOR).concat(luda.$unnested(this.constructor._NONE_SWITCHES_SELECTOR, _$menu, this.constructor._MENU_SELECTOR));
        _$items = luda.$unnested(this.constructor._ITEMS_SELECTOR, _$menu, this.constructor._MENU_SELECTOR);
        _isStandalone = this._$component.hasAttribute(this.constructor._STANDALONE_ATTRIBUTE);
        return {_$items, _$switches, _$noneSwitches, _isStandalone};
      }

      _constructor() {
        return ({_$items: this._$items, _$switches: this._$switches, _$noneSwitches: this._$noneSwitches, _isStandalone: this._isStandalone} = this._getConfig());
      }

      _onMutations(mutations) {
        return this._constructor();
      }

      _actived() {
        return this._$component.classList.contains(this.constructor._ACTIVE_CSS_CLASS);
      }

      _deactiveChildrenExcept(exceptions) {
        if (exceptions && !(exceptions instanceof Array)) {
          exceptions = [exceptions];
        }
        if (exceptions) {
          return this._children.forEach(function(child) {
            if (child._actived() && !exceptions.includes(child)) {
              return child.deactive();
            }
          });
        } else {
          return this._children.forEach(function(child) {
            if (child._actived()) {
              return child.deactive();
            }
          });
        }
      }

      static deactiveExcept(instances$dropdowns) {
        var exceptions;
        exceptions = [];
        if (instances$dropdowns && !(instances$dropdowns instanceof Array)) {
          instances$dropdowns = [instances$dropdowns];
        }
        if (instances$dropdowns) {
          instances$dropdowns.forEach((instance$dropdown) => {
            var exception;
            if (exception = this.query(instance$dropdown)) {
              return exceptions.push(exception);
            }
          });
        }
        if (exceptions.length) {
          return this._instances.forEach(function(instance) {
            var instanceHasntExceptionChild, instanceIsntInExceptions;
            instanceIsntInExceptions = !exceptions.includes(instance);
            instanceHasntExceptionChild = exceptions.every(function(exception) {
              return !instance._hasDescendant(exception);
            });
            if (instance._actived() && instanceIsntInExceptions && instanceHasntExceptionChild) {
              return instance.deactive();
            }
          });
        } else {
          return this._instances.forEach(function(instance) {
            if (instance._actived()) {
              return instance.deactive();
            }
          });
        }
      }

      static _standaloneInstances() {
        return this._instances.filter(function(instance) {
          if (instance._isStandalone) {
            return instance;
          }
        });
      }

      static _init() {
        var self;
        self = this;
        luda.onOpposite('click', this._SELECTOR, function(e) {
          return self.deactiveExcept(self._standaloneInstances());
        });
        luda.on('click', this._SELECTOR, function(e) {
          var focus, instance, toggleChecked;
          if (instance = self.query(this)) {
            toggleChecked = false;
            focus = !e.detail;
            self.deactiveExcept(self._standaloneInstances().concat(instance));
            instance._deactiveChildrenExcept();
            if (instance._parent) {
              instance._parent._deactiveChildrenExcept(instance);
            }
            if (instance._$switches.length || instance._$noneSwitches.length) {
              luda.eventPath(e).some(function($path) {
                if (instance._$switches.includes($path)) {
                  instance.toggle(focus);
                  return toggleChecked = true;
                } else if (instance._$noneSwitches.includes($path)) {
                  return toggleChecked = true;
                }
              });
            }
            if (!toggleChecked) {
              return instance.toggle(focus);
            }
          }
        });
        luda.onOpposite('keyup', this._SELECTOR, function(e) {
          return self.deactiveExcept();
        });
        luda.on('keyup', this._SELECTOR, function(e) {
          var instance;
          if (e.keyCode === luda.KEY_TAB && (instance = self.query(this))) {
            self.deactiveExcept(instance);
            return instance.active();
          }
        });
        luda.on('keydown', this._SELECTOR, function(e) {
          var instance, ref;
          if (e.keyCode === luda.KEY_ESC && (instance = self.query(this))) {
            e.preventDefault();
            if (instance._actived()) {
              return instance.deactive(true);
            } else {
              return (ref = instance._parent) != null ? ref.deactive(true) : void 0;
            }
          }
        });
        return luda.on('keydown', this._SELECTOR, function(e) {
          var instance, ref, ref1;
          if ([luda.KEY_LEFT, luda.KEY_UP].includes(e.keyCode) && (instance = self.query(this))) {
            e.preventDefault();
            if (instance._actived()) {
              return instance.prev();
            } else {
              return (ref = instance._parent) != null ? ref.prev() : void 0;
            }
          } else if ([luda.KEY_RIGHT, luda.KEY_DOWN].includes(e.keyCode) && (instance = self.query(this))) {
            e.preventDefault();
            if (instance._actived()) {
              return instance.next();
            } else {
              return (ref1 = instance._parent) != null ? ref1.next() : void 0;
            }
          }
        });
      }

    };

    _Class._SCOPE = 'dropdown';

    _Class._SELECTOR = '.dropdown-fixed,.dropdown-absolute, .dropdown-static,.dropdown-absolute-m';

    _Class._MENU_SELECTOR = '.dropdown-menu';

    _Class._ITEMS_SELECTOR = 'a[href]:not([disabled]),button:not([disabled]), input:not([disabled]),[tabindex]:not([disabled])';

    _Class._TOGGLE_ATTRIBUTE = 'data-dropdown-toggle';

    _Class._NONE_TOGGLE_ATTRIBUTE = 'data-dropdown-none-toggle';

    _Class._STANDALONE_ATTRIBUTE = 'data-dropdown-standalone';

    _Class._SWITCHES_SELECTOR = `[${_Class._TOGGLE_ATTRIBUTE}]`;

    _Class._NONE_SWITCHES_SELECTOR = `[${_Class._NONE_TOGGLE_ATTRIBUTE}]`;

    _Class._ACTIVE_CSS_CLASS = 'dropdown-active';

    _Class._ACTIVED_EVENT_TYPE = `${_Class._SCOPE}:actived`;

    _Class._DEACTIVED_EVENT_TYPE = `${_Class._SCOPE}:deactived`;

    _Class._observerConfig = {
      childList: true,
      attributes: true,
      subtree: true,
      attributeFilter: [_Class._TOGGLE_ATTRIBUTE, _Class._NONE_TOGGLE_ATTRIBUTE, _Class._STANDALONE_ATTRIBUTE]
    };

    _Class._$focused = [];

    return _Class;

  }).call(this));

  luda((function() {
    var _Class;

    _Class = class extends luda.Component {
      _getConfig() {
        var _$defaultValues, _$valueHolder, _$values;
        _$values = luda.$children(this.constructor._VALUE_SELECTOR, this._$component);
        _$defaultValues = luda.$children(this.constructor._DEFAULT_VALUE_SELECTOR, this._$component);
        _$valueHolder = luda.$child(this.constructor._VALUE_HOLDER_SELECTOR, this._$component);
        return {_$values, _$valueHolder, _$defaultValues};
      }

      _constructor() {
        ({_$values: this._$values, _$valueHolder: this._$valueHolder, _$defaultValues: this._$defaultValues} = this._getConfig());
        this._setValueHolderAttribute();
        return this._setValueHolderValue();
      }

      _onMutations() {
        return this._constructor();
      }

      _setValueHolderValue() {
        var values;
        values = [];
        this._$values.forEach(($value, index) => {
          var value;
          if ($value.checked) {
            if ($value.hasAttribute(this.constructor._VALUE_ATTRIBUTE)) {
              value = $value.getAttribute(this.constructor._VALUE_ATTRIBUTE);
            } else {
              value = this._$defaultValues[index].innerText;
            }
          }
          if (value && !values.includes(value)) {
            return values.push(value);
          }
        });
        if (this._$valueHolder) {
          return this._$valueHolder.value = values.join(this.constructor._VALUE_SPLITOR);
        }
      }

      _setValueHolderAttribute() {
        if (this._$valueHolder) {
          return this._$valueHolder.setAttribute('readonly', '');
        }
      }

      static _init() {
        var self;
        self = this;
        luda.enterClick._add(this._ENTER_CLICK_VALUE_HOLDER_SELECTOR);
        luda.on('change', `${this._SELECTOR} ${this._VALUE_SELECTOR}`, function(e) {
          return self.query(luda.$parent(self._SELECTOR, this))._setValueHolderValue();
        });
        luda.on(luda._FORM_RESET, this._SELECTOR, function(e) {
          return setTimeout(() => {
            return self.query(this)._setValueHolderValue();
          });
        });
        // prevent ios device pop out wired navigation pannel
        if (/iphone/i.test(navigator.userAgent) || /ipad/i.test(navigator.userAgent)) {
          return luda.on('focusin', this._ENTER_CLICK_VALUE_HOLDER_SELECTOR, function(e) {
            this.blur();
            return this.classList.add(luda.focus._CSS_CLASS);
          });
        }
      }

    };

    _Class._SCOPE = 'fmDropdown';

    _Class._SELECTOR = '.fm-dropdown';

    _Class._VALUE_SPLITOR = '   ';

    _Class._VALUE_ATTRIBUTE = 'data-fm-dropdown-value';

    _Class._VALUE_SELECTOR = '.dropdown-items .btn-radio input, .dropdown-items .btn-check input';

    _Class._DEFAULT_VALUE_SELECTOR = '.dropdown-items .btn-radio label, .dropdown-items .btn-check label';

    _Class._VALUE_HOLDER_SELECTOR = '.fm input';

    _Class._ENTER_CLICK_VALUE_HOLDER_SELECTOR = '.fm-dropdown .fm input';

    _Class._observerConfig = {
      childList: true,
      attributes: true,
      subtree: true,
      attributeFilter: ['checked', _Class._VALUE_ATTRIBUTE]
    };

    return _Class;

  }).call(this));

  luda((function() {
    var _Class;

    _Class = class extends luda.Component {
      
      // public
      active(index) {
        var activedIndex;
        if (this._$panes.length) {
          activedIndex = this._activeIndex;
          if ((index != null) && index !== this._activeIndex && (0 <= index && index <= this._$panes.length - 1)) {
            this._activeIndex = index;
            return this._active(activedIndex);
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
        return this._active();
      }

      _onMutations(mutations) {
        return this._constructor();
      }

      _active(activedIndex) {
        this._$panes.forEach(($pane, index) => {
          if (index === this._activeIndex) {
            $pane.classList.add(this.constructor._PANE_ACTIVE_CSS_CLASS);
            return luda.dispatch($pane, this.constructor._ACTIVED_EVENT_TYPE, index);
          } else {
            $pane.classList.remove(this.constructor._PANE_ACTIVE_CSS_CLASS);
            if (index === activedIndex) {
              return luda.dispatch($pane, this.constructor._DEACTIVED_EVENT_TYPE, index);
            }
          }
        });
        return this._setIndicatorsState();
      }

      _setIndicatorsState() {
        return this._$indicators.forEach(($indicator, index) => {
          if (index === this._activeIndex) {
            return $indicator.setAttribute('checked', '');
          } else {
            return $indicator.removeAttribute('checked');
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
            return instance.active(instance._$indicators.indexOf(this));
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

    _Class._ACTIVED_EVENT_TYPE = `${_Class._SCOPE}:actived`;

    _Class._DEACTIVED_EVENT_TYPE = `${_Class._SCOPE}:deactived`;

    _Class._observerConfig = {
      childList: true,
      subtree: true
    };

    return _Class;

  }).call(this));

})));
//# sourceMappingURL=luda.js.map
