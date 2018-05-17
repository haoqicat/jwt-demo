import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import { goto } from '../actions'
import { logout } from '../actions/authActions'

const HeaderContainer = props => <Header {...props} />

const mapStateToProps = state => ({
  isAuthenticated: state.common.isAuthenticated,
  currentUser: state.common.currentUser
})

export default connect(mapStateToProps, { goto, logout })(HeaderContainer)
