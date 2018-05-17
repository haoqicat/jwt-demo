import { historyPush } from './index'
import axios from 'axios'
import { LOGIN_URL, SIGNUP_URL } from '../constants/ApiConstants'
import * as types from '../constants/ActionTypes'
import { decodeJwt } from '../utils/jwtUtils'

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
    err.response && console.log('err', err.response.data.msg)
  }
}

export const login = data => dispatch => {
  handleAuth(LOGIN_URL, 'LOGIN_SUCCESS', data, dispatch)
}

export const signup = data => dispatch => {
  handleAuth(SIGNUP_URL, 'SIGNUP_SUCCESS', data, dispatch)
}
