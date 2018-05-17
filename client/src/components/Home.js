import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

const propTypes = {
  goto: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired
}

class Home extends Component {
  render() {
    const { goto, isAdmin } = this.props

    return (
      <Wrap>
        {isAdmin && (
          <StyledButton
            onClick={() => goto('/post/new')}
            variant="raised"
            color="secondary"
          >
            创建新文章
          </StyledButton>
        )}
      </Wrap>
    )
  }
}

Home.propTypes = propTypes

export default Home

const Wrap = styled.div``

const StyledButton = styled(Button)`
  && {
    margin: 20px auto;
    display: block;
  }
`
