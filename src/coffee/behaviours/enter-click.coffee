import '../install.coffee'
import '../constants.coffee'
import '../event.coffee'
import '../singleton.coffee'


luda class extends luda.Singleton

  @_SCOPE: 'enterClick'

  @_SELECTORS: [
    'input[type=checkbox]'
    'input[type=radio]'
    '[tabindex]'
  ]

  @_init: ->
    self = this
    luda.on 'keydown', (e) ->
      if self._actived \
      and e.keyCode is luda.KEY_ENTER \
      and e.target.matches self._selector
        e.preventDefault()
        setTimeout(-> e.target.click())