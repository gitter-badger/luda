docAsideScrollTop = 0

luda.on 'turbolinks:before-visit', (e) ->
  $container = luda.$child '#doc-aside'
  docAsideScrollTop = if $container then $container.scrollTop else 0

luda.on 'turbolinks:render', (e) ->
  $container = luda.$child '#doc-aside'
  $container.scrollTop = docAsideScrollTop if $container


clipboard = null

renderCode = ->
  $codes = luda.$children '.highlight:not(.rendered)'
  $codes.forEach ($code) ->
    $code.classList.add 'rendered'
    $code.outerHTML = "<div class='rel'>\
    <button type='button' \
    class='code-copy abs-r abs-t btn btn-small btn-secondary'>\
    Copy</button>#{$code.outerHTML}</div>"

initClipboard = ->
  clipboard.destroy() if clipboard
  clipboard = new ClipboardJS('.code-copy', {
    target: (trigger) -> trigger.nextElementSibling
  })
  clipboard.on 'success', (e) ->
    e.clearSelection()
    e.trigger.classList.remove 'focus'
    e.trigger.innerText = 'Copied!'
    e.trigger.classList.add 'btn-primary'
    e.trigger.classList.remove 'btn-secondary'
    setTimeout ->
      e.trigger.innerText = 'Copy'
      e.trigger.classList.add 'btn-secondary'
      e.trigger.classList.remove 'btn-primary'
    , 2000

initCode = ->
  renderCode()
  initClipboard()

luda.on 'docready', initCode
luda.on 'turbolinks:render', initCode