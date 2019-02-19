import collection from '../../page-objects/collection.coffee'



suite 'alert', ->

  test 'style', ->
    await collection.open '/alert'
    await collection.checkElement()