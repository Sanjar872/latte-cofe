import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 461px;
    display: flex;
    justify-content: center;
    background-color: #4A2B33;
    margin-top: 120px;
`

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;

    h1{
        max-width: 413px;
        font-weight: 400;
        font-size: 47px;
        line-height: 62px;
        letter-spacing: 1px;
        color: #D27487;
        margin-top: 121px;
    }

    p{
        max-width: 595px;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        color: #D27487;
        margin-top: 121px;
    }

    @media (max-width:1078px) {
        h1{
            font-size: 30px;
            max-width: 350px;
        }
        p{
            font-size: 14px;
        }
    }

    @media (max-width:920px) {
        flex-direction: column;
        align-items: center;
        justify-content: start;

        h1{
            margin-top: 20px;
            text-align: center;
        }
        p{
            text-align: center;
            margin-top: 40px;
        }
    }

    @media (max-width:650px) {
        h1,p{
            max-width: 90%;
        }

        h1{
            font-size: 25px;
        }
        p{
            font-size: 12px;
        }
    }
`
