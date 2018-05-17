import React from 'react'
import { connect } from 'react-redux'
import Signup from '../components/Signup'

const SignupContainer = props => <Signup {...props} />

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(SignupContainer)
