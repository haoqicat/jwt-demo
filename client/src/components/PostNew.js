import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

class PostNew extends Component {
  state = {
    title: '',
    body: ''
  }

  handChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = e => {
    this.props.submitPost(this.state)
    this.setState({
      title: '',
      body: ''
    })
  }

  render() {
    const { title, body } = this.state
    return (
      <Wrap>
        <Field>
          <TextField
            name="title"
            onChange={this.handChange}
            value={title}
            label="标题"
          />
        </Field>

        <Field>
          <TextField
            name="body"
            multiline={true}
            onChange={this.handChange}
            value={body}
            label="内容"
            rows={4}
          />
        </Field>
        <Button onClick={this.handleClick} variant="raised" color="secondary">
          发布
        </Button>
      </Wrap>
    )
  }
}

export default PostNew

const Wrap = styled.div`
  margin-top: 30px;
`

const Field = styled.div`
  margin-bottom: 30px;
`
