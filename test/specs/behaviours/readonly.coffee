import behaviour from '../../page-objects/behaviour.coffee'



suite 'readonly', ->

  test 'style', ->
    await behaviour.open '/readonly'
    await behaviour.checkElement()