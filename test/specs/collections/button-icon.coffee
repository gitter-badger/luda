import collection from '../../page-objects/collection.coffee'



suite 'button icon', ->

  test 'style', ->
    await collection.open '/button-icon'
    await collection.checkElement()