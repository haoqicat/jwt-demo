import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import Header from '../containers/HeaderContainer'

injectGlobal`
  body {
    margin: 0
  }

  * {
    box-sizing: border-box;
  }
`

class Main extends Component {
  render() {
    return (
      <Wrap>
        <Header />
      </Wrap>
    )
  }
}

export default Main

const Wrap = styled.div``
