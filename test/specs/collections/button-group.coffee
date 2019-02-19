import collection from '../../page-objects/collection.coffee'



suite 'button group', ->

  test 'style', ->
    await collection.open '/button-group'
    await collection.checkDocument()