import history from '../utils/historyUtils'
import * as types from '../constants/ActionTypes'

const historyPush = path => {
  history.push(path)
  return { type: types.CHANGE_PATH, path }
}

export const goto = path => dispatch => {
  dispatch(historyPush(path))
}
