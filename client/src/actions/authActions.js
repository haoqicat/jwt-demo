import { historyPush, alert } from './index'
import axios from 'axios'
import { LOGIN_URL, SIGNUP_URL } from '../constants/ApiConstants'
import * as types from '../constants/ActionTypes'
import { decodeJwt, getIsExpired } from '../utils/jwtUtils'

export const loadCurrentUserIfNeeded = () => dispatch => {
  const token = window.localStorage.getItem('jwtToken')
  if (token) {
    if (getIsExpired(token)) {
      window.localStorage.removeItem('jwtToken')
      historyPush('/login')
      dispatch({ type: types.LOGOUT_SUCCESS })
      return console.log('认证码失效，请重新登录')
    }
    const { username, admin } = decodeJwt(token)
    dispatch({
      type: types.LOAD_CURRENT_USER,
      currentUser: username,
      isAdmin: admin
    })
  }
}

const handleAuth = async (AUTH_URL, AUTH_ACTION, data, dispatch) => {
  try {
    const res = await axios.post(AUTH_URL, data)
    const { token } = res.data
    const { username, admin } = decodeJwt(token)
    const isAdmin = admin
    window.localStorage.setItem('jwtToken', token)
    dispatch(historyPush('/'))
    dispatch({
      type: types[AUTH_ACTION],
      currentUser: username,
      isAdmin
    })
  } catch (err) {
    console.log(err)
    err.response && dispatch(alert(err.response.data.msg))
  }
}

export const login = data => dispatch => {
  handleAuth(LOGIN_URL, 'LOGIN_SUCCESS', data, dispatch)
}

export const signup = data => dispatch => {
  handleAuth(SIGNUP_URL, 'SIGNUP_SUCCESS', data, dispatch)
}

export const logout = () => dispatch => {
  window.localStorage.removeItem('jwtToken')
  dispatch(historyPush('/'))
  dispatch({ type: types.LOGOUT_SUCCESS })
}
