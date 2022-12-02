import styled from "styled-components";
import Navimage from './images/nav-img.png'
export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0 5%;
    background-color:#4A2B33;
    
    


`

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    height: 70px;
    align-items: center;


    .burger{
        display: none;
    }
    .show-menu{
        opacity: 1;
        visibility: visible;
        @keyframes appear {
            0% { opacity: 0; translate: 0 50px; }
            100% { opacity: 1; }
        }
    
        h2{
            animation: appear 0.3s both;
        }
    }
    @media (max-width:960px) {
        .burger{
            display: block;
            margin: 0 30px;
            z-index: 3;
        }
    }


`

export const Navdiv = styled.div`
    width: 250px;
    ul {
        display: flex;
        list-style: none;
        justify-content: space-between;
        align-items: center;
        color:#D27487;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;
        
    }

    ul li:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: 1s;
    }

    
    @media (max-width:820px) {
        display: none !important;
    }

`

export const Local = styled.div`
    width: 235px;
    display: flex;
    justify-content: end;
    gap: 30px;
    img:hover {
        cursor: pointer;
        transform: scale(1.2);
        transition: 1s;
    }
    @media (max-width:570px) {
        display: none !important;
    }
`

export const Brand = styled.div`
    color: #D27487;
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
    h1 {
        font-size: 35px;
    }
`

export const Fonimg = styled.div`
    width: 100%;
    height: 80vh;
    background-color: wheat;
    display: flex;
    justify-content: center;
    background-image: url(${Navimage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const Burgerr = styled.div`
    display: block !important;
`

export const Button = styled.button`
    color: black !important;
    background: red;
`

export const Menus = styled.div`
   width: 50%;
    height: 100%;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    gap: 32px;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(20px);
    opacity: 0;
    visibility: hidden;
    transition: 0.5s;
    color: white;

    h1 {
        font-size: 20px;
        margin-top: 30px;
    }

    ul li {
        line-height: 30px;
        list-style: none;
    }

`
export const Burgerrr = styled.div`
    display: block !important;
`

export const MenuLocal = styled.div`
    display: flex;
    gap: 20px;

`