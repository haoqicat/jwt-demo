import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import img from '../assets/card.jpg'

const propTypes = {
  goto: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  posts: PropTypes.array.isRequired
}

class Home extends Component {
  render() {
    const { goto, isAdmin, posts } = this.props
    const postList = posts.map(t => (
      <StyledCard key={t.id}>
        <StyledCardMedia image={img} />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {t.title}
          </Typography>
        </CardContent>
      </StyledCard>
    ))

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
        <List>{postList}</List>
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

const StyledCard = styled(Card)`
  && {
    width: 245px;
    margin-bottom: 20px;
  }
`

const StyledCardMedia = styled(CardMedia)`
  height: 0;
  padding-top: 56.25%;
`

const List = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
