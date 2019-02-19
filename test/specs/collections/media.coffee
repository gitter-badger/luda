import collection from '../../page-objects/collection.coffee'



suite 'media', ->

  test 'style', ->
    await collection.open '/media'
    await collection.checkElement()