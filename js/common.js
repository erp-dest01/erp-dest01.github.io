function parseUrlSearchParams() {
  return Object.fromEntries(new URLSearchParams(window.location.search).entries())
}

function decodeBase64(content) {
  if (content) {
    let str = ''
    try {
      str = content.replaceAll(' ', '+').replaceAll('-', '+').replaceAll('_', '/')
    } catch (error) {
      str = content.replace(/ /g, '+').replace(/-/g, '+').replace(/_/g, '/')
    }
    return decodeURIComponent(atob(str).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      }).join('')
    )
  } else {
    return ''
  }
}
