import history from '../utils/historyUtils'
import * as types from '../constants/ActionTypes'

export const historyPush = path => {
  history.push(path)
  return { type: types.CHANGE_PATH, path }
}

export const goto = path => dispatch => {
  dispatch(historyPush(path))
}

export const alert = msg => ({
  type: types.ALERT,
  msg
})

export const hideAlert = () => dispatch => dispatch({ type: types.HIDE_ALERT })
