import React from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'

const LoginContainer = props => <Login {...props} />

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(LoginContainer)
