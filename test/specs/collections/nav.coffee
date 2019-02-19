import collection from '../../page-objects/collection.coffee'



suite 'nav', ->

  test 'style', ->
    await collection.open '/nav'
    await collection.checkElement()