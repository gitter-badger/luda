import '../install.coffee'
import '../component.coffee'



luda class extends luda.Component

  @_SCOPE: 'readonly'
  @_READONLY_ATTRIBUTE: 'data-readonly'
  @_READONLY_FALSE_VALUE: 'false'
  @_SELECTOR: "[#{@_READONLY_ATTRIBUTE}]"

  @_observerConfig:
    attributes: true
    attributeFilter: [@_READONLY_ATTRIBUTE]

  _getConfig: ->
    readonly = @_$component.getAttribute @constructor._READONLY_ATTRIBUTE
    _isReadonly = readonly isnt @constructor._READONLY_FALSE_VALUE
    _originalTabIndex = @_$component.tabIndex
    {_isReadonly, _originalTabIndex}
    
  _constructor: ->
    {
      @_isReadonly,
      @_originalTabIndex
    } = @_getConfig()
    @_setTabIndex()

  _onMutations: ->
    @_constructor()

  _setTabIndex: ->
    if @_isReadonly
      @_$component.tabIndex = -1
    else
      @_$component.tabIndex = @_originalTabIndex