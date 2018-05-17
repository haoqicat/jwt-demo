import React, { Component } from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import HomeIcon from '@material-ui/icons/Home'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

class Header extends Component {
  state = {
    anchorEl: null
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  render() {
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)

    const login = (
      <Login>
        <StyledButton color="inherit">登录</StyledButton>
        <StyledButton color="inherit">注册</StyledButton>
      </Login>
    )

    const logout = (
      <Logout>
        <IconButton onClick={this.handleMenu} color="inherit">
          <AccountCircle />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open}>
          <MenuItem>账号</MenuItem>
          <MenuItem>退出</MenuItem>
        </Menu>
      </Logout>
    )

    return (
      <AppBar position="static">
        <Inner>
          <IconButton color="inherit">
            <StyledHomeIcon />
          </IconButton>
          {false ? logout : login}
        </Inner>
      </AppBar>
    )
  }
}

export default Header

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 700px;
  margin: 10px auto;
`

const StyledHomeIcon = styled(HomeIcon)`
  && {
    margin: 4px;
    font-size: 40px;
  }
`
const Login = styled.div``

const Logout = styled.div``

const StyledButton = styled(Button)`
  && {
    line-height: 32px;
  }
`
