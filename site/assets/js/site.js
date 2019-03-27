/*! 
   * Luda 0.1.11 | https://luda.dev
   * Copyright 2018 oatw | https://oatw.blog
   * MIT license | http://opensource.org/licenses/MIT
   */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  (function() {
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
      var $titles, items, selectors;
      selectors = '#doc-container h2[id],#doc-container h3[id],#doc-container h4[id]';
      $titles = luda.$children(selectors);
      items = '';
      if ($titles.length) {
        $titles.forEach(function($title) {
          var link;
          link = `<a href='#${$title.id}' data-turbolinks='false' class='doc-sub-nav-item td-none'>${$title.innerText.replace(/^#/, '').replace(/modifier$/i, '')}</a>`;
          switch ($title.tagName.toLowerCase()) {
            case 'h2':
              return items += `<p class='mt-small py-none text-ellipsis'>${link}</p>`;
            case 'h3':
              return items += `<p class='p6 pl-small py-none text-ellipsis'>${link}</p>`;
            default:
              return items += `<p class='p6 pl-medium py-none text-ellipsis'>${link}</p>`;
          }
        });
        return luda.$child('#doc-sub-nav .nav-items').innerHTML = items;
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
    return luda.on('turbolinks:render', appendAnchors);
  })();

  (function() {
    var CHANGING_CLASS, THEME_ID, THEME_NAME_ATTRIBUTE, TRIGGER_SELECTOR, isChanging, loadTheme, theme;
    THEME_ID = 'luda-theme';
    CHANGING_CLASS = 'changing-theme';
    TRIGGER_SELECTOR = '.change-theme';
    THEME_NAME_ATTRIBUTE = 'data-theme';
    isChanging = false;
    theme = 'default';
    loadTheme = function(callback) {
      var $theme, oldTheme, themeHref;
      $theme = luda.$child(`#${THEME_ID}`);
      themeHref = $theme.getAttribute('href');
      oldTheme = themeHref.match(/luda-(.*)\.min\.css/)[1];
      themeHref = themeHref.replace(oldTheme, theme);
      $theme.href = themeHref;
      return $theme.onload = callback;
    };
    return luda.on('click', TRIGGER_SELECTOR, function(e) {
      var newTheme;
      newTheme = this.getAttribute(THEME_NAME_ATTRIBUTE);
      if (!(isChanging || newTheme === theme)) {
        isChanging = true;
        theme = newTheme;
        document.body.classList.add(CHANGING_CLASS);
        return setTimeout(function() {
          return loadTheme(function() {
            document.body.classList.remove(CHANGING_CLASS);
            return setTimeout(function() {
              return isChanging = false;
            }, 500);
          });
        }, 500);
      }
    });
  })();

  // luda.on 'turbolinks:before-render', (e) ->
  // window.newBody = e.data.newBody
  // console.log e.data.newBody.parentNode
  // themeHref = luda.$child("##{THEME_ID}").getAttribute 'href'
  // $theme = e.data.newBody.querySelector("##{THEME_ID}")
  // $theme.href = themeHref

})));
//# sourceMappingURL=site.js.map
