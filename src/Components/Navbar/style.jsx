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