import styled from "styled-components"

const Container = styled.div`
    height: 200px;

    background: linear-gradient(90deg, #ff758c 0%, #ff7eb3 100%);
    padding: 25px;
    border-radius: 5px;

    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);

    transition: all 0.2s;
    cursor: pointer;

    :hover {
        opacity: 0.9;
    }

    > h2 {
        color: #fff;
        font-size: 32px;
    }

    > p {
        font-size: 12px;

        margin-top: 10px;
        color: white;
        font-weight: 300;
    }
`

export const S = {
    Container,
}
