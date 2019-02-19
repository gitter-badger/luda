import collection from '../../page-objects/collection.coffee'



suite 'form icon', ->

  test 'style', ->
    await collection.open '/form-icon'
    await collection.checkElement()