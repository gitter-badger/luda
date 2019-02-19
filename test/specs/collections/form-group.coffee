import collection from '../../page-objects/collection.coffee'



suite 'form group', ->

  test 'style', ->
    await collection.open '/form-group'
    await collection.checkElement()