import React from 'react'
import { connect } from 'react-redux'
import PostNew from '../components/PostNew'
import { submitPost } from '../actions/postActions'

const PostNewContainer = props => <PostNew {...props} />

const mapStateToProps = state => ({})

export default connect(mapStateToProps, { submitPost })(PostNewContainer)
