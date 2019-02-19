import behaviour from '../../page-objects/behaviour.coffee'



suite 'disabled', ->

  test 'style', ->
    await behaviour.open '/disabled'
    await behaviour.checkElement()