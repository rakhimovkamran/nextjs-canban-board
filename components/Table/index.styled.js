import styled from "styled-components"

const Container = styled.div``

const Info = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    border-bottom: 1px solid #e9ebef;
    padding-bottom: 8px;
`

const Meta = styled.div`
    display: flex;
    align-items: center;

    > h4 {
        font-weight: 400;
        color: #444;
    }
`

const CardsCount = styled.div`
    padding: 5px;
    width: 30px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    background: #e9ebef;
    color: #a6a8ac;
    margin-left: 10px;
`

const Cards = styled.div`
    margin-top: 20px;

    display: flex;
    flex-direction: column;

    padding: 15px;
    border: 1px solid #e9ebef;
    border-radius: 10px;

    gap: 20px;
    margin-bottom: 20px;
`

export const S = {
    Container,
    Info,
    Meta,
    CardsCount,
    Cards,
}
