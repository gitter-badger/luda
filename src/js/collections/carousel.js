(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../install.js'), require('../dom.js'), require('../event.js'), require('../component.js')) :
  typeof define === 'function' && define.amd ? define(['../install.js', '../dom.js', '../event.js', '../component.js'], factory) :
  (factory());
}(this, (function () { 'use strict';

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

})));
