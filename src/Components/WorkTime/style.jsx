import styled from 'styled-components'

export const Main = styled.main`
    width: 100%;
    height: 473px;
    background-color:  #AA9E54;

    @media screen and (max-width:1175px) {
        height: auto;
        padding: 100px 0px 100px 0px;
    }
`

export const CenterDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width:1175px) {
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
    }

    @media screen and (max-width:410px) {
        padding: 0px 15px 0px 15px;
    }
`

export const Card = styled.div`
    width: 352px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const BoldText = styled.b`
    font-weight: 700;
    font-size: 17px;
    line-height: 22px;
    color: white;
    padding: 0px 0px 10px 0px ;
`

export const Paragraph = styled.p`
    font-weight: 400;
    font-size: 26px;
    line-height: 36px;
    color: white;
    text-align: center;
`