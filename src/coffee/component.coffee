import './install.coffee'
import './utilities.coffee'
import './dom.coffee'
import './event.coffee'




luda class Component

  @_SCOPE: 'Component'
  
  @_COMPONENT_NO_SELECTOR_ERROR: 'Extended component must has a css selector'
  @_$COMPONENT_INVALID_ERROR: '@param $component must be an instance of Element'
  @_SELECTOR: ''
  @_instances: []

  @_Observed: []
  @_observer: null
  @_observerConfig:
    childList: true
    subtree: true

  _hasDescendant: (descendant) ->
    if @_children.length and descendant
      return true if @_children.includes descendant
      return @_children.some (child) -> child._hasDescendant descendant
    else
      return false

  _observe: ->
    @_observer = new MutationObserver @_onMutations.bind this
    @_observer.observe @_$component, @constructor._observerConfig

  _disconnect: ->
    @_observer.disconnect()
    @_observer = null

  @create: ($component) ->
    componentIsElementInstance = $component instanceof Element
    throw new Error @_$COMPONENT_INVALID_ERROR unless componentIsElementInstance
    $family = @_query$family $component
    instance = @query $component
    if $family._$parent
      if parent = @query $family._$parent
        @_instances.push instance = @_createInstance $component unless instance
        if instance._parent isnt parent
          parent._children.push(instance) and (instance._parent = parent)
        $family._$children.forEach ($child) => @create $child
        return instance
      else
        @create $family._$parent
        return @query $component
    else
      @_instances.push instance = @_createInstance $component unless instance
      $family._$children.forEach ($child) => @create $child
      return instance

  @destroy: (instance$component) ->
    instance = @query instance$component
    if instance
      instance._disconnect() if instance._observer
      instance._destroy() if instance._destroy
      @destroy instance._children[0] while instance._children.length
      if instance._parent
        luda.except instance, instance._parent._children
      luda.except instance, @_instances
      for attribute, value of instance
        instance[attribute] = null
        
  @query: (instance$component) ->
    instance = null
    if instance$component instanceof this \
    and @_instances.includes instance$component
      instance = instance$component
    else if instance$component instanceof Element
      @_instances.some (inited) ->
        if inited._$component is instance$component
          instance = inited
          return true
    return instance

  @_query$family: ($component) ->
    _$parent = null
    _$children = []
    if @_SELECTOR
      _$parent = luda.$parent @_SELECTOR, $component
      _$children = luda.$unnested @_SELECTOR, $component, @_SELECTOR
    {_$parent, _$children}

  @_createInstance: ($component) ->
    instance = new this()
    instance._$component = $component
    instance._parent = null
    instance._children = []
    instance._observer = null
    instance._constructor() if instance._constructor
    unless instance._observer and instance._onMutations and @_observerConfig
      instance._observe()
    instance

  @_observe: (classObj) ->
    unless Component._observer
      Component._observer = new MutationObserver (mutations) ->
        mutations.forEach (mutation) ->
          $removedNodes = Array.from mutation.removedNodes
          $addedNodes = Array.from mutation.addedNodes
          $removedNodes.forEach ($node) ->
            if $node instanceof Element
              Component._Observed.forEach (Observed) ->
                if $node.matches Observed._SELECTOR
                  Observed.destroy $node
                else
                  $destroies = luda.$children Observed._SELECTOR, $node
                  $destroies.forEach ($destroy) -> Observed.destroy $destroy
          $addedNodes.forEach ($node) ->
            if $node instanceof Element
              Component._Observed.forEach (Observed) ->
                if $node.matches Observed._SELECTOR
                  Observed.create $node
                else
                  $creates = luda.$children Observed._SELECTOR, $node
                  $creates.forEach ($create) -> Observed.create $create
      Component._observer.observe document.documentElement, \
      Component._observerConfig
    unless Component._Observed.includes classObj
      Component._Observed.push classObj

  @_install: ->
    self = this
    return this if this is Component
    unless @_SELECTOR or typeof @_SELECTOR isnt 'string'
      throw new Error @_COMPONENT_NO_SELECTOR_ERROR
    @_instances = [] unless @hasOwnProperty '_instances'
    exposed = @_init() if typeof @_init is 'function'
    luda.on luda._DOC_READY, ->
      luda.$children(self._SELECTOR).forEach ($component) ->
        self.create $component
      Component._observe(self)
    if exposed then exposed else this