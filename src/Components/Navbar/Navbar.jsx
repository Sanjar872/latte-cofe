import React from 'react'
import { Brand, Burgerr, Button, Container, Fonimg, Local, MenuLocal, Menus, Nav, Navdiv } from './style'
import Smsicons from './images/sms.png'
import Facebook from './images/facebook.png'
import Instagram from './images/instagreme.png'

import { BurgerSpin as Burger } from 'react-burger-icons' // react burger icon
import { useState } from "react";

//Scrolling
const Scrolling = (value)=>{
  window.scrollTo({
    top:value,
    behavior:'smooth'
  })
}

// Erorr Alert
function Erorr() {
  alert('This website is in test mode')
}


const Navbar = () => {


  const [isClosed, setIsClosed] = useState(false);
  const toggleClosed = () => setIsClosed(!isClosed);


  return (
    <Container> 
      <Nav>
        <Navdiv>
          <ul>
            <li onClick={()=>Scrolling(660)}>About</li>
            <li onClick={()=>Scrolling(1290)}>Menu</li>
            <li onClick={()=>Scrolling(4000)}>Info</li>
            <li onClick={()=>Scrolling(2450)}>Booking</li>
          </ul>
        </Navdiv>
        <Brand>
          <h1>LATTE CAFE</h1>
        </Brand>

        <Local>
          {/* <div></div> */}
          <img onClick={Erorr} src={Facebook} alt="" />
          <img onClick={Erorr} src={Smsicons} alt="" />
          <img onClick={Erorr} src={Instagram} alt="" />
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
            <li onClick={()=>{Scrolling(660) ; setIsClosed(false) }} >About</li>
            <li onClick={()=>{Scrolling(1290) ; setIsClosed(false)}}>Menu</li>
            <li onClick={()=>{Scrolling(4000) ; setIsClosed(false)}}>Info</li>
            <li onClick={()=>{Scrolling(2450) ; setIsClosed(false)}}>Booking</li>

          </ul>
          <MenuLocal>
          <img onClick={Erorr} src={Smsicons} alt="" />
          <img onClick={Erorr} src={Facebook} alt="" />
          <img onClick={Erorr} src={Instagram} alt="" />
          </MenuLocal>
        </Menus>

      </Nav>
      <Fonimg>
      </Fonimg>
    </Container>
  )
}

export default Navbar