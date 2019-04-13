import './install.coffee'
import './utilities.coffee'


  
luda class Singleton

  @_SCOPE: 'Singleton'
  
  @_SELECTOR_INVALID_ERROR: '@param selector must be a css selector string'
  @_SELECTORS: []

  @_ACTIVATE_EVENT_TYPE: "#{@_SCOPE}:activate"
  @_ACTIVATED_EVENT_TYPE: "#{@_SCOPE}:activated"
  @_DEACTIVATE_EVENT_TYPE: "#{@_SCOPE}:deactivate"
  @_DEACTIVATED_EVENT_TYPE: "#{@_SCOPE}:deactivated"

  @_Observed: []
  @_observer: null
  @_observerConfig:
    childList: true
    subtree: true

  @_selector: ''

  @_addActivatingAndDeactivatingProperties: ->
    @_ACTIVATE_EVENT_TYPE = "#{@_SCOPE}:activate"
    @_ACTIVATED_EVENT_TYPE = "#{@_SCOPE}:activated"
    @_DEACTIVATE_EVENT_TYPE = "#{@_SCOPE}:deactivate"
    @_DEACTIVATED_EVENT_TYPE = "#{@_SCOPE}:deactivated"
    @_ACTIVATING_MARK_ATTRIBUTE = "data-#{@_SCOPE}-activating"
    @_DEACTIVATING_MARK_ATTRIBUTE = "data-#{@_SCOPE}-deactivating"

  @_add: (selector) ->
    throw new Error @_SELECTOR_INVALID_ERROR if typeof selector isnt 'string'
    @_SELECTORS.push selector unless @_SELECTORS.includes selector
    @_mergeSelectors()

  @_remove: (selector) ->
    throw new Error @_SELECTOR_INVALID_ERROR if typeof selector isnt 'string'
    luda.except selector, @_SELECTORS
    @_mergeSelectors()

  @_mergeSelectors: ->
    @_selector = @_SELECTORS.join ','

  @_activatePrevented: ($ele, detail) ->
    activateEvent = luda.dispatch $ele, @_ACTIVATE_EVENT_TYPE, detail
    activateEvent.defaultPrevented

  @_deactivatePrevented: ($ele, detail) ->
    deactivateEvent = luda.dispatch $ele, @_DEACTIVATE_EVENT_TYPE, detail
    deactivateEvent.defaultPrevented

  @_handleActivateEnd: ($ele, detail) ->
    @_setActivatingMark $ele, detail
    activateDuration = luda.getTransitionDuration $ele
    luda.dispatch $ele, @_ACTIVATED_EVENT_TYPE, detail, activateDuration
    setTimeout =>
      @_removeActivatingMark $ele if $ele
    , activateDuration
    activateDuration

  @_handleDeactivateEnd: ($ele, detail) ->
    @_setDeactivatingMark $ele, detail
    deactivateDuration = luda.getTransitionDuration $ele
    luda.dispatch $ele, @_DEACTIVATED_EVENT_TYPE, detail, deactivateDuration
    setTimeout =>
      @_removeDeactivatingMark $ele if $ele
    , deactivateDuration
    deactivateDuration

  @_handleActivateCancel: ($ele, detail) ->
    if @_isActivating $ele
      luda.dispatch $ele, @_ACTIVATED_EVENT_TYPE, detail
      @_removeActivatingMark $ele

  @_handleDeactivateCancel: ($ele, detail) ->
    if @_isDeactivating $ele
      luda.dispatch $ele, @_DEACTIVATED_EVENT_TYPE, detail
      @_removeDeactivatingMark $ele

  @_isActivating: ($ele) ->
    $ele.hasAttribute @_ACTIVATING_MARK_ATTRIBUTE

  @_isDeactivating: ($ele) ->
    $ele.hasAttribute @_DEACTIVATING_MARK_ATTRIBUTE

  @_isTransitioning: ($ele) ->
    @_isActivating($ele) or @_isDeactivating($ele)

  @_getActivatingMark: ($ele) ->
    $ele.getAttribute @_ACTIVATING_MARK_ATTRIBUTE

  @_getDeactivatingMark: ($ele) ->
    $ele.getAttribute @_DEACTIVATING_MARK_ATTRIBUTE

  @_removeActivatingMark: ($ele) ->
    $ele.removeAttribute @_ACTIVATING_MARK_ATTRIBUTE

  @_removeDeactivatingMark: ($ele) ->
    $ele.removeAttribute @_DEACTIVATING_MARK_ATTRIBUTE

  @_setActivatingMark: ($ele, value) ->
    $ele.setAttribute @_ACTIVATING_MARK_ATTRIBUTE, value

  @_setDeactivatingMark: ($ele, value) ->
    $ele.setAttribute @_DEACTIVATING_MARK_ATTRIBUTE, value

  @_observe: (classObj) ->
    unless Singleton._observer
      Singleton._observer = new MutationObserver (mutations) ->
        mutations.forEach (mutation) ->
          $removedNodes = Array.from mutation.removedNodes
          $addedNodes = Array.from mutation.addedNodes
          $removedNodes.forEach ($node) ->
            if $node instanceof Element
              Singleton._Observed.forEach (Observed) ->
                if $node.matches Observed._selector
                  Observed._onNodeRemoved($node) if Observed._onNodeRemoved
                else
                  $destroies = luda.$children Observed._selector, $node
                  $destroies.forEach ($destroy) ->
                    Observed._onNodeRemoved($destroy) if Observed._onNodeRemoved
          $addedNodes.forEach ($node) ->
            if $node instanceof Element
              Singleton._Observed.forEach (Observed) ->
                if $node.matches Observed._selector
                  Observed._onNodeAdded($node) if Observed._onNodeAdded
                else
                  $creates = luda.$children Observed._selector, $node
                  $creates.forEach ($create) ->
                    Observed._onNodeAdded($create) if Observed._onNodeAdded
      Singleton._observer.observe document.documentElement, \
      Singleton._observerConfig
    if classObj._onNodeAdded or classObj._onNodeRemoved and classObj._selector
      unless Singleton._Observed.includes classObj
        Singleton._Observed.push classObj

  @_install: ->
    self = this
    return this if this is Singleton
    @_SELECTORS = [] unless @hasOwnProperty '_SELECTORS'
    @_mergeSelectors()
    exposed = @_init() if typeof @_init is 'function'
    @_addActivatingAndDeactivatingProperties()
    luda.on luda._DOC_READY, -> Singleton._observe(self)
    if exposed then exposed else this