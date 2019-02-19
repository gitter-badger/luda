//= require ./install
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('./install.js')) :
  typeof define === 'function' && define.amd ? define(['./install.js'], factory) :
  (factory());
}(this, (function () { 'use strict';

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

})));
