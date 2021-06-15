import styled from "styled-components"

const Container = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;
    margin-top: 10px;
`

const Empty = styled.section`
    width: 100%;
    height: 80vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > img {
        width: 200px;
        height: 200px;
    }

    > h4 {
        font-weight: 300;
        color: gray;
    }

    > button {
        margin-top: 40px;
        padding: 8px 40px;
    }
`

export const S = {
    Container,
    Empty,
}
