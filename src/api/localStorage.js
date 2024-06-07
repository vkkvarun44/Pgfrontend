export const saveJWTToStorage = function (key, value) {
  window.localStorage.setItem(key, value)
}

export const getJWTFromStorage = function (key) {
  return window.localStorage.getItem(key)
}

export const removeJWTFromStorage = function (key) {
  window.localStorage.removeItem(key)
}
