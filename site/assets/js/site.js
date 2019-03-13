/*! 
   * Luda 0.1.8 | https://luda.dev
   * Copyright 2018 oatw | https://oatw.blog
   * MIT license | http://opensource.org/licenses/MIT
   */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  var clipboard, docAsideScrollTop, initClipboard, initCode, renderCode;

  docAsideScrollTop = 0;

  luda.on('turbolinks:before-visit', function(e) {
    var $container;
    $container = luda.$child('#doc-aside');
    return docAsideScrollTop = $container ? $container.scrollTop : 0;
  });

  luda.on('turbolinks:render', function(e) {
    var $container;
    $container = luda.$child('#doc-aside');
    if ($container) {
      return $container.scrollTop = docAsideScrollTop;
    }
  });

  clipboard = null;

  renderCode = function() {
    var $codes;
    $codes = luda.$children('.highlight:not(.rendered)');
    return $codes.forEach(function($code) {
      $code.classList.add('rendered');
      return $code.outerHTML = `<div class='rel'><button type='button' class='code-copy abs-r abs-t btn btn-small btn-secondary'>Copy</button>${$code.outerHTML}</div>`;
    });
  };

  initClipboard = function() {
    if (clipboard) {
      clipboard.destroy();
    }
    clipboard = new ClipboardJS('.code-copy', {
      target: function(trigger) {
        return trigger.nextElementSibling;
      }
    });
    return clipboard.on('success', function(e) {
      e.clearSelection();
      e.trigger.classList.remove('focus');
      e.trigger.innerText = 'Copied!';
      e.trigger.classList.add('btn-primary');
      e.trigger.classList.remove('btn-secondary');
      return setTimeout(function() {
        e.trigger.innerText = 'Copy';
        e.trigger.classList.add('btn-secondary');
        return e.trigger.classList.remove('btn-primary');
      }, 2000);
    });
  };

  initCode = function() {
    renderCode();
    return initClipboard();
  };

  luda.on('docready', initCode);

  luda.on('turbolinks:render', initCode);

})));
//# sourceMappingURL=site.js.map
