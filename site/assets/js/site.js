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

  var docAsideScrollTop;

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

})));
//# sourceMappingURL=site.js.map
