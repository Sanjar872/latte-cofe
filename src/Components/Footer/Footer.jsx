import React from 'react'
import { Container, Infos, LinkDiv } from './style'

const Footer = () => {
  return (
    <Container>
      <LinkDiv>
        <a>Home</a>
        <a>About</a>
        <a>Menu</a>
        <a>Info</a>
        <a>Contact</a>
        <a>Bookings</a>
        <a>Privacy Policy</a>
        <a>Style Guide</a>
        <a>Licenses</a>
        <a>Instructions</a>
        <a>Changelog</a>
        <a>Password</a>
        <a>404</a>
      </LinkDiv>
      <Infos>
        <a>© Latte Cafe 2022.</a>
        <a>Built by Akmal, Farohiddin and Sanjar</a>
        <a>Powered by AFC</a>
      </Infos>
    </Container>
  )
}

export default Footer