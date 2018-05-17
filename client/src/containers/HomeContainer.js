import React from 'react'
import { connect } from 'react-redux'
import Home from '../components/Home'
import { goto } from '../actions'

const HomeContainer = props => <Home {...props} />

const mapStateToProps = state => ({
  isAdmin: state.common.isAdmin
})

export default connect(mapStateToProps, { goto })(HomeContainer)
