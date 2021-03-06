import { historyPush, alert } from './index'
import axios from 'axios'
import { POST_URL, GET_POSTS_URL } from '../constants/ApiConstants'
import * as types from '../constants/ActionTypes'

export const submitPost = data => async dispatch => {
  try {
    const res = await axios.post(POST_URL, data, {
      headers: { Authorization: window.localStorage.getItem('jwtToken') }
    })
    dispatch({ type: types.ADD_POST_SUCCESS, post: res.data })
    historyPush('/')
  } catch (err) {
    console.log(err)
    err.response && dispatch(alert(err.response.data.msg))
  }
}

export const fetchPosts = () => async dispatch => {
  try {
    const res = await axios.get(GET_POSTS_URL)
    dispatch({ type: types.FETCH_POSTS_SUCCESS, posts: res.data })
  } catch (err) {
    console.log(err)
  }
}
