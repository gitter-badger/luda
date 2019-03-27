(->
  THEME_ID = 'luda-theme'
  CHANGING_CLASS = 'changing-theme'
  TRIGGER_SELECTOR = '.change-theme'
  THEME_NAME_ATTRIBUTE = 'data-theme'
  isChanging = false
  theme = 'default'

  loadTheme = (callback) ->

    $theme = luda.$child "##{THEME_ID}"
    themeHref = $theme.getAttribute 'href'
    oldTheme = themeHref.match(/luda-(.*)\.min\.css/)[1]
    themeHref = themeHref.replace oldTheme, theme
    $theme.href = themeHref
    $theme.onload = callback

  luda.on 'click', TRIGGER_SELECTOR, (e) ->
    newTheme = this.getAttribute THEME_NAME_ATTRIBUTE
    unless isChanging or newTheme is theme
      isChanging = true
      theme = newTheme
      document.body.classList.add CHANGING_CLASS
      setTimeout(->
        loadTheme ->
          document.body.classList.remove CHANGING_CLASS
          setTimeout(->
            isChanging = false
          , 500)
      , 500)

  # luda.on 'turbolinks:before-render', (e) ->
    # window.newBody = e.data.newBody
    # console.log e.data.newBody.parentNode
    # themeHref = luda.$child("##{THEME_ID}").getAttribute 'href'
    # $theme = e.data.newBody.querySelector("##{THEME_ID}")
    # $theme.href = themeHref
)()