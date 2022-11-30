import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    margin-top: 100px;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 300px 300px;
    grid-gap: 40px;
    grid-template-areas:
    "first third"
    "second third"
    ;

    .first{
        grid-area: first;
    }

    .second{
        grid-area: second;
    }

    .third{
        grid-area: third;
    }

    @media (max-width:1333px) {
        display: flex;
        flex-direction: column;
        align-items: center;

        img{
            width: 95%;
        }
    }

    @media (max-width:768px) {
        img{
            width: 95%;
        }
    }
`


