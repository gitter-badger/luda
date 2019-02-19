import behaviour from '../../page-objects/behaviour.coffee'



suite 'focus', ->

  test 'style', ->
    await behaviour.open '/focus'
    await behaviour.checkElement()