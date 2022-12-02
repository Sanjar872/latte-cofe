import styled from "styled-components";

export const AboutPage = styled.div`
    width: 100%;
    height: 70vh;
    background-color: #F5F5F5;;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 32px;
        color: #222222;
        width: 65%;
        text-align: center;
        line-height: 45px;
        font-weight: 400;
        color: #222222;
        @media (max-width:640px) {
            font-size: 25px;
            width: 100%;
            padding: 0 3%;
            line-height: 40px;
        }

        @media (max-width:375px) {
            font-size: 20px;
        }
    }
`