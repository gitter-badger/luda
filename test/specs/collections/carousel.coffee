import collection from '../../page-objects/collection.coffee'



suite 'carousel', ->

  test 'style', ->
    await collection.open '/carousel'
    await browser.pause 2000
    await collection.checkElement()