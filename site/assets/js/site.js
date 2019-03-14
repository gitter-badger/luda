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

  var appendAnchors, clipboard, docAsideScrollTop, initClipboard, initCode, insertSubNav, renderCode;

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

  insertSubNav = function() {
    var $titles, navItems, selectors;
    selectors = '#doc-container h2[id],#doc-container h3[id],#doc-container h4[id]';
    $titles = luda.$children(selectors);
    navItems = '';
    if ($titles.length) {
      $titles.forEach(function($title) {
        var link;
        link = `<a href='#${$title.id}' data-turbolinks='false' class='doc-sub-nav-item td-none'>${$title.innerText.replace(/^#/, '').replace(/modifier$/i, '')}</a>`;
        switch ($title.tagName.toLowerCase()) {
          case 'h2':
            return navItems += `<p class='mt-small py-none text-ellipsis'>${link}</p>`;
          case 'h3':
            return navItems += `<p class='p6 pl-small py-none text-ellipsis'>${link}</p>`;
          default:
            return navItems += `<p class='p6 pl-medium py-none text-ellipsis'>${link}</p>`;
        }
      });
      return luda.$child('#doc-sub-nav .nav-items').innerHTML = navItems;
    }
  };

  luda.on('docready', insertSubNav);

  luda.on('turbolinks:render', insertSubNav);

  appendAnchors = function() {
    var $titles, selectors;
    selectors = '#doc-container h2[id]:not(.rendered),#doc-container h3[id]:not(.rendered),#doc-container h4[id]:not(.rendered),#doc-container h5[id]:not(.rendered),#doc-container h6[id]:not(.rendered)';
    $titles = luda.$children(selectors);
    if ($titles.length) {
      return $titles.forEach(function($title) {
        var link;
        $title.classList.add('rendered');
        $title.classList.add('rel');
        link = `<a href='#${$title.id}' data-turbolinks='false' class='doc-anchor abs td-none c-primary'>#</a>`;
        return $title.insertAdjacentHTML('afterBegin', link);
      });
    }
  };

  luda.on('docready', appendAnchors);

  luda.on('turbolinks:render', appendAnchors);

})));
//# sourceMappingURL=site.js.map
