import collection from '../../page-objects/collection.coffee'



suite 'avatar', ->

  test 'style', ->
    await collection.open '/avatar'
    await collection.checkElement()