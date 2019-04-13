import '../install.coffee'
import '../dom.coffee'
import '../event.coffee'
import '../singleton.coffee'



luda class extends luda.Singleton

  @_SCOPE: 'toggle'
  @_TOGGLE_TARGET_ATTRIBUTE: 'data-toggle-target'
  @_TOGGLE_ATTRIBUTE: 'data-toggle'
  @_TOGGLE_FOR_ATTRIBUTE: 'data-toggle-for'
  @_TOGGLE_DISABLED_ATTRIBUTE: 'data-toggle-disabled'
  @_TRANSITING_ATTRIBUTE: 'data-toggle-transiting'
  @_ACTIVE_CSS_CLASS: 'toggle-active'
  @_SELECTORS: [
    "[#{@_TOGGLE_FOR_ATTRIBUTE}]"
    "[#{@_TOGGLE_ATTRIBUTE}]"
  ]
  @_ACTIVATE_EVENT_TYPE: "#{@_SCOPE}:activate"
  @_ACTIVATED_EVENT_TYPE: "#{@_SCOPE}:activated"
  @_DEACTIVATE_EVENT_TYPE: "#{@_SCOPE}:deactivate"
  @_DEACTIVATED_EVENT_TYPE: "#{@_SCOPE}:deactivated"

  @activate: (name$target) ->
    @_query$targets(name$target).forEach ($target) =>
      return if @_transiting $target
      return if luda.dispatch($target, @_ACTIVATE_EVENT_TYPE).defaultPrevented
      @_setTransitingAttribute $target
      $target.classList.add @_ACTIVE_CSS_CLASS
      activateDuration = luda.getTransitionDuration $target
      luda.dispatch $target, @_ACTIVATED_EVENT_TYPE, null, activateDuration
      @_removeTransitingAttribute $target, activateDuration

  @deactivate: (name$target) ->
    @_query$targets(name$target).forEach ($target) =>
      return if @_transiting $target
      return if luda.dispatch($target, @_DEACTIVATE_EVENT_TYPE).defaultPrevented
      @_setTransitingAttribute $target
      $target.classList.remove @_ACTIVE_CSS_CLASS
      deactivateDuration = luda.getTransitionDuration $target
      luda.dispatch $target, @_DEACTIVATED_EVENT_TYPE, null, deactivateDuration
      @_removeTransitingAttribute $target, deactivateDuration

  @toggle: (name$target) ->
    @_query$targets(name$target).forEach ($target) =>
      if $target.classList.contains @_ACTIVE_CSS_CLASS
        @deactivate($target)
      else
        @activate($target)

  @_onNodeAdded: ($node) -> @_removeTransitingAttribute $node

  @_query$targets: (name$target) ->
    if name$target instanceof Element
      [name$target]
    else
      luda.$children "[#{@_TOGGLE_TARGET_ATTRIBUTE}=#{name$target}]"

  @_transiting: ($target) ->
    $target.hasAttribute @_TRANSITING_ATTRIBUTE

  @_setTransitingAttribute: ($target) ->
    $target.setAttribute @_TRANSITING_ATTRIBUTE, ''

  @_removeTransitingAttribute: ($target, delayMilliseconds) ->
    if typeof delayMilliseconds is 'number'
      setTimeout =>
        $target.removeAttribute @_TRANSITING_ATTRIBUTE
      , delayMilliseconds
    else
      console.log 'removing'
      $target.removeAttribute @_TRANSITING_ATTRIBUTE

  @_init: ->
    self = this
    luda.on 'click', @_selector, (e) ->
      toggleChecked = false
      luda.eventPath(e).some ($path) ->
        if $path instanceof Element
          if $path.hasAttribute(self._TOGGLE_ATTRIBUTE) \
          or $path.hasAttribute(self._TOGGLE_FOR_ATTRIBUTE)
            if toggleName = $path.getAttribute self._TOGGLE_FOR_ATTRIBUTE
              self.toggle toggleName
              toggleChecked = true
            if $path.hasAttribute self._TOGGLE_ATTRIBUTE
              if $path.hasAttribute self._TOGGLE_TARGET_ATTRIBUTE
                $toggle = $path
              else
                $toggle = luda.$parent \
                "[#{self._TOGGLE_TARGET_ATTRIBUTE}]", $path
              if $toggle
                self.toggle $toggle
                toggleChecked = true
          else if $path.hasAttribute self._TOGGLE_DISABLED_ATTRIBUTE
            toggleChecked = true