import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Snackbar from '@material-ui/core/Snackbar'

const propTypes = {
  alert: PropTypes.string.isRequired,
  hideAlert: PropTypes.func.isRequired
}

class Alert extends Component {
  handleClose = () => {
    this.props.hideAlert()
  }

  render() {
    const { alert } = this.props
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        onClose={this.handleClose}
        autoHideDuration={4000}
        open={Boolean(alert)}
        message={alert}
      />
    )
  }
}

Alert.propTypes = propTypes

export default Alert
