docAsideScrollTop = 0

luda.on 'turbolinks:before-visit', (e) ->
  $container = luda.$child '#doc-aside'
  docAsideScrollTop = if $container then $container.scrollTop else 0

luda.on 'turbolinks:render', (e) ->
  $container = luda.$child '#doc-aside'
  $container.scrollTop = docAsideScrollTop if $container