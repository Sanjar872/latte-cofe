import React from 'react'
import { Brand, Burgerr, Button, Container, Fonimg, Local, Nav, Navdiv } from './style'
import Smsicons from './images/sms.png'
import Facebook from './images/facebook.png'
import Instagram from './images/instagreme.png'
import { BurgerSpin } 
  from "react-burger-icons";
import { useState } from "react";

const Navbar = () => {



  const [isClosed, setIsClosed] = useState(false);

  const toggleClosed = ( ) => setIsClosed(!isClosed);


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
        <Button
      onClick={() => setIsClosed(!isClosed)}
      style={{
        width: "50px",
        height: "50px",
        display: "grid",
        placeItems: "center",
        color:"black",
      }}
    >
      <BurgerSpin isClosed={isClosed} />
    </Button>
         
      </Nav>
      <Fonimg>
      </Fonimg>
    </Container>
  )
}

export default Navbar