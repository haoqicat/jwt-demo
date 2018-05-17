import { combineReducers } from 'redux'

const isAuthenticated = (state = false, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  isAuthenticated
})
