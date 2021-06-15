import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    padding: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    background: white;

    font-size: 15px;
    color: #bdbcbf;
    border: 1px solid #dfdee1;
    border-radius: 10px;

    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    transition: all 0.2s;

    cursor: pointer;

    :hover {
        opacity: 0.8;
    }

    > .MuiSvgIcon-root {
        margin-right: 5px;
        width: 20px;
        height: 20px;
    }
`

export const S = {
    Container,
}
