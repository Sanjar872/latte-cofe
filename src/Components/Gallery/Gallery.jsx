import React from 'react'
import { Container, Wrapper } from './style'

import First from './Images/first.png'
import Second from './Images/second.png'
import Third from './Images/third.png'

const Galery = () => {
  return (
    <Wrapper>
      <Container>
        <img className='first' src={First} alt="" />
        <img className='second' src={Second} alt="" />
        <img className='third' src={Third} alt="" />
      </Container>
    </Wrapper>
  )
}

export default Galery