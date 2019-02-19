import collection from '../../page-objects/collection.coffee'



suite 'breadcrumb', ->

  test 'style', ->
    await collection.open '/breadcrumb'
    await collection.checkElement()