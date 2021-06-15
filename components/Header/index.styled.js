import styled from "styled-components"

const Container = styled.header`
    width: 100%;
    display: flex;

    padding: 10px 30px;
    background: #f4f6f8;

    border-bottom: 1px solid #e9ebef;
`

const Title = styled.div`
    display: flex;
    align-items: center;

    flex: 0.3;

    font-size: 22px;

    > .MuiAvatar-root {
        margin-right: 30px;
    }

    > h4 {
        margin-left: 10px;
        color: #333;
    }
`

const Search = styled.div`
    flex: 0.4;

    display: flex;

    justify-content: center;
    align-items: center;
`

const Input = styled.div`
    height: 40px;
    width: 300px;
    background-color: #e9ebef;
    border-radius: 5px;

    display: flex;
    align-items: center;

    padding: 0 20px;

    > input {
        background: none;
        border: none;
        outline: none;

        width: 100%;
    }

    > .MuiSvgIcon-root {
        opacity: 0.2;
        transform: scale(0.9);

        margin-right: 10px;
    }
`

const Extra = styled.div`
    flex: 0.3;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const S = {
    Container,
    Title,

    Search,
    Input,

    Extra,
}
