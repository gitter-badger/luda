import collection from '../../page-objects/collection.coffee'



suite 'tab', ->

  test 'style', ->
    await collection.open '/tab'
    await collection.checkElement()