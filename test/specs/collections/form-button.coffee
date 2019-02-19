import collection from '../../page-objects/collection.coffee'



suite 'form button', ->

  test 'style', ->
    await collection.open '/form-button'
    await collection.checkElement()