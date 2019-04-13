import '../install.coffee'
import '../dom.coffee'
import '../event.coffee'
import '../component.coffee'



luda class extends luda.Component

  @_SCOPE: 'tab'

  @_SELECTOR: '.tab'
  @_PANE_SELECTOR: '.tab-pane'
  @_INDICATOR_SELECTOR: '.tab-indicators .btn-radio input[type=radio]'
  @_PANE_ACTIVE_CSS_CLASS: 'tab-pane-active'
  @_ACTIVE_INDEX: 0
  @_ACTIVATE_EVENT_TYPE: "#{@_SCOPE}:activate"
  @_ACTIVATED_EVENT_TYPE: "#{@_SCOPE}:activated"
  @_DEACTIVATE_EVENT_TYPE: "#{@_SCOPE}:deactivate"
  @_DEACTIVATED_EVENT_TYPE: "#{@_SCOPE}:deactivated"

  @_observerConfig:
    childList: true
    subtree: true
 
  # public
  activate: (index) ->
    if @_$panes.length and not @_transiting
      activatedIndex = @_activeIndex

      if index? \
      and index isnt @_activeIndex \
      and 0 <= index <= @_$panes.length - 1

        activateEvent = luda.dispatch(@_$panes[index], \
        @constructor._ACTIVATE_EVENT_TYPE, index)

        deactivateEvent = luda.dispatch(@_$panes[activatedIndex], \
        @constructor._DEACTIVATE_EVENT_TYPE, activatedIndex)

        return @_setIndicatorsState() if activateEvent.defaultPrevented
        return @_setIndicatorsState() if deactivateEvent.defaultPrevented

        @_transiting = true
        @_activeIndex = index
        @_activate(activatedIndex)


  # private
  _getConfig: ->
    _$panes = luda.$unnested \
    @constructor._PANE_SELECTOR, @_$component, @constructor._SELECTOR
    _$indicators = luda.$unnested \
    @constructor._INDICATOR_SELECTOR, @_$component, @constructor._SELECTOR
    _activeIndex = @constructor._ACTIVE_INDEX
    _$indicators.some ($indicator, index) ->
      if $indicator.checked
        _activeIndex = index
        true
    {_$panes, _$indicators, _activeIndex}

  _constructor: ->
    {
      @_$panes,
      @_$indicators,
      @_activeIndex
    } = @_getConfig()
    @_transiting = false
    @_activate()

  _onMutations: (mutations) ->
    @_constructor()

  _activate: (activatedIndex) ->
    $pane = @_$panes[@_activeIndex]
    $activatedPane = @_$panes[activatedIndex]

    $pane.classList.add @constructor._PANE_ACTIVE_CSS_CLASS
    if $activatedPane
      $activatedPane.classList.remove @constructor._PANE_ACTIVE_CSS_CLASS

    activateDuration = luda.getTransitionDuration $pane
    luda.dispatch($pane, \
    @constructor._ACTIVATED_EVENT_TYPE, @_activeIndex, \
    activateDuration)

    if $activatedPane
      deactivateDuration = luda.getTransitionDuration $activatedPane
      luda.dispatch($activatedPane, \
      @constructor._DEACTIVATED_EVENT_TYPE, activatedIndex, \
      deactivateDuration)
      setTimeout =>
        @_transiting = false
      , Math.max(activateDuration, deactivateDuration)
    else
      setTimeout =>
        @_transiting = false
      , activateDuration

    @_setIndicatorsState()


  _setIndicatorsState: ->
    @_$indicators.forEach ($indicator, index) =>
      if index is @_activeIndex
        $indicator.setAttribute 'checked', ''
        $indicator.checked = true
      else
        $indicator.removeAttribute 'checked'
        $indicator.checked = false

  # static private
  @_init: ->
    self = this
    luda.on 'change', @_INDICATOR_SELECTOR, (e) ->
      if this.checked
        instance = self.query luda.$parent self._SELECTOR, this
        instance.activate instance._$indicators.indexOf this