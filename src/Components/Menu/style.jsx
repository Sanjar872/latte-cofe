import styled from "styled-components";
import Button from "@mui/material/Button";
 
export const Main = styled.div`
    width: 100%;
    height: 1277px;
    background: #E9E9E3;

    @media screen and (max-width:1275px) {
        height:auto;
    }
`

export const CenterDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;  

    @media screen and (max-width:1275px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const Section = styled.section`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    padding: 130px 0px 0px 50px;

    @media screen and (max-width:1275px) {
        width: 95%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding:50px 0px 50px 0px;
    }
`

export const Conteyner = styled.div`
    width: 580px;
    height: 500px;

    @media screen and (max-width:638px) {
        width: 100%;
    }
    
`

export const Span = styled.span`
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #6F6F64;
`

export const Paragraph = styled.p`
    font-weight: 400;
    font-size: 32px;
    line-height: 45px;
    color: #6F6F64;

    @media screen and (max-width:476px) {
        font-size: 25px;
    }

    @media screen and (max-width:380px) {
        font-size: 20px;
    }
`

export const ButtonDiv = styled.div`
    width: 571px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width:638px) {
        width: 100%;
    }
`

export const MuiBtnContained = styled(Button)`
    width: 100% !important;
    height: 51px !important;
    background: #6F6F64 !important;
    color: white !important;
    border-radius: 0px !important;
`

export const MuiBtnOutlined = styled(Button)`
    width: 100% !important;
    height: 51px !important;
    color: #6F6F64 !important;
    border: 2px solid #6F6F64 !important;
    border-radius: 0px !important;
`


// Aside Start ==========================

export const Aside = styled.aside`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width:1275px) {
        width: 95%;
        padding: 50px 0px 50px 0px;
    }
`

export const InfoDiv = styled.div`
    width: 604px;
    height: 1037px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width:1275px) {
        height: auto;
        padding: 100px 0px 100px 0px;
        gap: 40px;
    }
`

export const Title = styled.h1`
    font-size: 36px;
    font-weight: 600;
    text-align: center;
    margin-top: 20px;
`

export const Box = styled.div`
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width:638px) {
        width: 100%;
        height: auto;
        gap: 20px;
    }
`

export const Box2 = styled.div`
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width:638px) {
        width: 100%;
        height: auto;
        gap: 20px;
    }
`


export const Category = styled.h2`
    font-size: 30px;
    font-weight: 500;
    color: black;
`
export const Card = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    @media screen and (max-width:506px) {
        height: auto;
        gap: 10px;
    }
`

export const BoldText = styled.b`
    
`

export const Pitag = styled.p`
    font-weight: 500;
    text-align: center;
`

export const Prise = styled.p`
    font-weight: 500;
`