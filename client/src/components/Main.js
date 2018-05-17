import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Switch, Route } from 'react-router'
import Header from '../containers/HeaderContainer'
import Home from '../containers/HomeContainer'
import Login from '../containers/LoginContainer'
import Signup from '../containers/SignupContainer'
import Alert from '../containers/AlertContainer'

import PropTypes from 'prop-types'

const propTypes = {
  loadCurrentUserIfNeeded: PropTypes.func.isRequired
}

injectGlobal`
  body {
    margin: 0
  }

  * {
    box-sizing: border-box;
  }
`

class Main extends Component {
  componentDidMount() {
    this.props.loadCurrentUserIfNeeded()
  }
  render() {
    return (
      <Wrap>
        <Header />
        <Alert />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Wrap>
    )
  }
}

Main.propTypes = propTypes

export default Main

const Wrap = styled.div``
