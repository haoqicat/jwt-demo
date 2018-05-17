import jwt from 'jsonwebtoken'

export const decodeJwt = token => {
  return jwt.decode(token)
}

export const getIsExpired = token => {
  const dateTime = Date.now()
  const currentTime = Math.floor(dateTime / 1000)
  const { exp } = decodeJwt(token)
  return currentTime > exp
}
