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
  @_ACTIVATED_EVENT_TYPE: "#{@_SCOPE}:activated"
  @_DEACTIVATED_EVENT_TYPE: "#{@_SCOPE}:deactivated"

  @_observerConfig:
    childList: true
    subtree: true
 
  # public
  activate: (index) ->
    if @_$panes.length
      activatedIndex = @_activeIndex
      if index? \
      and index isnt @_activeIndex \
      and 0 <= index <= @_$panes.length - 1
        @_activeIndex = index
        @_active(activatedIndex)

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
    @_activate()

  _onMutations: (mutations) ->
    @_constructor()

  _activate: (activatedIndex) ->
    @_$panes.forEach ($pane, index) =>
      if index is @_activeIndex
        $pane.classList.add @constructor._PANE_ACTIVE_CSS_CLASS
        luda.dispatch($pane, @constructor._ACTIVATED_EVENT_TYPE, index)
      else
        $pane.classList.remove @constructor._PANE_ACTIVE_CSS_CLASS
        if index is activatedIndex
          luda.dispatch($pane, @constructor._DEACTIVATED_EVENT_TYPE, index)
    @_setIndicatorsState()

  _setIndicatorsState: ->
    @_$indicators.forEach ($indicator, index) =>
      if index is @_activeIndex
        $indicator.setAttribute 'checked', ''
      else
        $indicator.removeAttribute 'checked'

  # static private
  @_init: ->
    self = this
    luda.on 'change', @_INDICATOR_SELECTOR, (e) ->
      if this.checked
        instance = self.query luda.$parent self._SELECTOR, this
        instance.activate instance._$indicators.indexOf this