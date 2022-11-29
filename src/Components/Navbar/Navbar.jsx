import React from 'react'
import { Brand, Container, Fonimg, Local, Nav, Navdiv } from './style'
import Smsicons from './images/sms.png'
import Facebook from './images/facebook.png'
import Instagram from './images/instagreme.png'

const Navbar = () => {
  return (
    <Container>
        <Nav>
          <Navdiv>
            <ul>
              <li>About</li>
              <li>Menu</li>
              <li>Info</li>
              <li>Booking</li>
            </ul>
          </Navdiv>
          <Brand>
            <h1>LATTE CAFE</h1>
          </Brand>

          <Local>
              <img src={Smsicons} alt="" />
              <img src={Facebook} alt="" />
              <img src={Instagram} alt="" />
          </Local>
        </Nav>
        <Fonimg>
        </Fonimg>
    </Container>
  )
}

export default Navbar