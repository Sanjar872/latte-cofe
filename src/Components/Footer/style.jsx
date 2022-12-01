import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 187px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width:768px) {
        height: auto;
        margin: 50px 0;
    }
`

export const LinkDiv = styled.div`
    max-width: 700px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 20px;

    a{
        font-weight: 400;
        font-size: 15px;
        line-height: 22px;
        text-align: center;
        color: #1F1F1F;
        margin-right: 32px;
        cursor: pointer;
    }

    @media (max-width:768px) {
        max-width: 90%;
    }

    @media (max-width:425px) {
        font-size: 13px;
        margin-bottom: 45px;
    }
`

export const Infos = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    a{
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;
        text-align: center;
        color: #696969;
        margin: 0 16px;    
        cursor: pointer;    
    }

    @media (max-width:768px) {
        max-width: 90%;
    }

    @media (max-width:425px) {
        font-size: 10px;
    }
`
