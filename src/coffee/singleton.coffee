import './install.coffee'
import './utilities.coffee'


  
luda class Singleton

  @_SCOPE: 'Singleton'
  
  @_SELECTOR_INVALID_ERROR: '@param selector must be a css selector string'
  @_SELECTORS: []

  @_selector: ''
  @_actived: true

  @active: ->
    @_actived = true

  @deactive: ->
    @_actived = false

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

  @_install: ->
    return this if this is Singleton
    @_SELECTORS = [] unless @hasOwnProperty '_SELECTORS'
    @_mergeSelectors()
    exposed = @_init() if typeof @_init is 'function'
    if exposed then exposed else this