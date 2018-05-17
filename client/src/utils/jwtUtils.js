import jwt from 'jsonwebtoken'

export const decodeJwt = token => {
  return jwt.decode(token)
}
