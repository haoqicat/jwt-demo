import React from 'react'
import { connect } from 'react-redux'
import Alert from '../components/Alert'
import { hideAlert } from '../actions'

const AlertContainer = props => <Alert {...props} />

const mapStateToProps = state => ({
  alert: state.common.alert
})

export default connect(mapStateToProps, { hideAlert })(AlertContainer)
