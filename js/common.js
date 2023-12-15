function parseUrlSearchParams() {
  return Object.fromEntries(new URLSearchParams(window.location.search).entries())
}

function decodeBase64(content) {
  if (content) {
    let str = content.replaceAll(' ', '+').replaceAll('-', '+').replaceAll('_', '/')
    return decodeURIComponent(atob(str).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join('')
    )
  } else {
    return ''
  }
}