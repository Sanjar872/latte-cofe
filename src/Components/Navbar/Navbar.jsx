import React from 'react'
import { Brand, Burgerr, Button, Container, Fonimg, Local, MenuLocal, Menus, Nav, Navdiv } from './style'
import Smsicons from './images/sms.png'
import Facebook from './images/facebook.png'
import Instagram from './images/instagreme.png'

import { BurgerSpin as Burger } from 'react-burger-icons' // react burger icon
import { useState } from "react";

const Navbar = () => {



  const [isClosed, setIsClosed] = useState(false);
  const toggleClosed = () => setIsClosed(!isClosed);




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
          {/* <div></div> */}
          <img src={Smsicons} alt="" />
          <img src={Facebook} alt="" />
          <img src={Instagram} alt="" />
        </Local>
        <div onClick={toggleClosed}>
          <Burger isClosed={isClosed} />
        </div>
      

        <Menus className={`${isClosed === true ? 'show-menu' : ''}`}>
          <div>
          <h1>
            LATTE CAFE</h1>
          </div>
          <ul>
            <li>About</li>
            <li>Menu</li>
            <li>Info</li>
            <li>Booking</li>

          </ul>
          <MenuLocal>
          <img src={Smsicons} alt="" />
          <img src={Facebook} alt="" />
          <img src={Instagram} alt="" />
          </MenuLocal>
        </Menus>

      </Nav>
      <Fonimg>
      </Fonimg>
    </Container>
  )
}

export default Navbar