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
  @_ACTIVE_CSS_CLASS: 'toggle-active'
  @_SELECTORS: [
    "[#{@_TOGGLE_FOR_ATTRIBUTE}]"
    "[#{@_TOGGLE_ATTRIBUTE}]"
  ]

  @activate: (name$target) ->
    @_query$targets(name$target).forEach ($target) =>
      return if @_isTransitioning $target
      return if @_activatePrevented $target
      $target.classList.add @_ACTIVE_CSS_CLASS
      @_handleActivateEnd $target

  @deactivate: (name$target) ->
    @_query$targets(name$target).forEach ($target) =>
      return if @_isTransitioning $target
      return if @_deactivatePrevented $target
      $target.classList.remove @_ACTIVE_CSS_CLASS
      @_handleDeactivateEnd $target

  @toggle: (name$target) ->
    @_query$targets(name$target).forEach ($target) =>
      if $target.classList.contains @_ACTIVE_CSS_CLASS
        @deactivate($target)
      else
        @activate($target)

  @_onNodeAdded: ($node) ->
    @_handleActivateCancel $node
    @_handleDeactivateCancel $node

  @_query$targets: (name$target) ->
    if name$target instanceof Element
      [name$target]
    else
      luda.$children "[#{@_TOGGLE_TARGET_ATTRIBUTE}=#{name$target}]"

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