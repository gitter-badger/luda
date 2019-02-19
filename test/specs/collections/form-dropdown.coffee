import collection from '../../page-objects/collection.coffee'



suite 'form dropdown', ->

  test 'style', ->
    await collection.open '/form-dropdown'
    await collection.checkElement()