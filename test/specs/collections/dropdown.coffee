import collection from '../../page-objects/collection.coffee'



suite 'dropdown', ->

  test 'style', ->
    await collection.open '/dropdown'
    await collection.checkElement()