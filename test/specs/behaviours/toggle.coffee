import behaviour from '../../page-objects/behaviour.coffee'



suite 'toggle', ->

  test 'style', ->
    await behaviour.open '/toggle'
    await behaviour.checkElement()