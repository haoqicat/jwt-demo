import React from 'react'
import { connect } from 'react-redux'
import Signup from '../components/Signup'
import { signup } from '../actions/authActions'

const SignupContainer = props => <Signup {...props} />

const mapStateToProps = state => ({})

export default connect(mapStateToProps, { signup })(SignupContainer)
