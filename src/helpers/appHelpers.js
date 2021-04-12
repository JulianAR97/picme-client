import uuid from 'react-uuid'

export const createCookie = () => {
  if (document.cookie) {
    return document.cookie
  } else {
    // Cookie will not expire within lifetime of app
    const userUUID = `cookieID=${uuid()}`
    const expiration = `expires=${new Date('01/01/2100').toUTCString()}`
    document.cookie = `${userUUID};${expiration};SameSite=Lax`;
    return document.cookie
  }
}