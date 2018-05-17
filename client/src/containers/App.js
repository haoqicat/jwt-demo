import React, { Component } from 'react'
import { Router } from 'react-router'
import history from '../utils/historyUtils'
import Main from '../components/Main'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Main />
      </Router>
    )
  }
}

export default App
