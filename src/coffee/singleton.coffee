import './install.coffee'
import './utilities.coffee'


  
luda class Singleton

  @_SCOPE: 'Singleton'
  
  @_SELECTOR_INVALID_ERROR: '@param selector must be a css selector string'
  @_SELECTORS: []

  @_Observed: []
  @_observer: null
  @_observerConfig:
    childList: true
    subtree: true

  @_selector: ''

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
    luda.on luda._DOC_READY, -> Singleton._observe(self)
    if exposed then exposed else this