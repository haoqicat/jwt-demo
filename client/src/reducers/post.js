import { combineReducers } from 'redux'
import * as types from '../constants/ActionTypes'

const all = (state = [], action) => {
  switch (action.type) {
    case types.ADD_POST_SUCCESS:
      return [...state, action.post]
    case types.FETCH_POSTS_SUCCESS:
      return action.posts
    default:
      return state
  }
}

export default combineReducers({
  all
})
