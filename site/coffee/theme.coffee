(->
  THEME_ID = 'luda-theme'
  isChanging = false

  changeTheme = (themeName, callback) ->

    unless isChanging
      isChanging = true
      $currentTheme = luda.$child "##{THEME_ID}"
      currentThemeHref = $currentTheme.href
      currentThemeName = currentThemeHref.match(/luda-(.*)\.min\.css/)[1]

      $theme = document.createElement 'link'
      $theme.rel = 'stylesheet'
      $theme.type = 'text/css'
      $theme.dataset.turbolinksPermanent = ''
      $theme.id = THEME_ID
      $theme.href = currentThemeHref.replace currentThemeName, themeName
      $currentTheme.remove()
      document.head.insertAdjacentElement 'afterbegin', $theme
      $theme.onload = ->
        isChanging = false
        callback() if callback

  currentTheme = 'default'

  luda.on 'click', '.change-theme', (e) ->
    themeName = this.dataset.theme
    unless themeName is currentTheme
      changeThemeFn = ->
        changeTheme themeName, ->
          currentTheme = themeName
          document.body.classList.remove 'changing-theme'
      document.body.classList.add 'changing-theme'
      setTimeout changeThemeFn, 600
)()