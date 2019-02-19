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
  @_ACTIVED_EVENT_TYPE: "#{@_SCOPE}:actived"
  @_DEACTIVED_EVENT_TYPE: "#{@_SCOPE}:deactived"

  @_observerConfig:
    childList: true
    subtree: true
 
  # public
  active: (index) ->
    if @_$panes.length
      activedIndex = @_activeIndex
      if index? \
      and index isnt @_activeIndex \
      and 0 <= index <= @_$panes.length - 1
        @_activeIndex = index
        @_active(activedIndex)

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
    @_active()

  _onMutations: (mutations) ->
    @_constructor()

  _active: (activedIndex) ->
    @_$panes.forEach ($pane, index) =>
      if index is @_activeIndex
        $pane.classList.add @constructor._PANE_ACTIVE_CSS_CLASS
        luda.dispatch($pane, @constructor._ACTIVED_EVENT_TYPE, index)
      else
        $pane.classList.remove @constructor._PANE_ACTIVE_CSS_CLASS
        if index is activedIndex
          luda.dispatch($pane, @constructor._DEACTIVED_EVENT_TYPE, index)
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
        instance.active instance._$indicators.indexOf this