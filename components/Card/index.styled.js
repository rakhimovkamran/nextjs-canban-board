import styled from "styled-components"

const Container = styled.div`
    width: 100%;

    background-color: white;
    border-radius: 10px;

    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    padding: 15px;

    display: flex;
    flex-direction: column;

    > p {
        margin-top: 5px;
        font-size: 12px;
        color: #777;
    }
`

const Headline = styled.div`
    > h4 {
        color: #444;
        font-size: 22px;
        overflow: ellipsis;
        overflow: hidden;
    }

    display: flex;
    justify-content: space-between;
`

const Actions = styled.div`
    > .MuiSvgIcon-root {
        width: 20px;
        color: #999;
        margin-left: 12px;
        transition: all 0.2s;
        cursor: pointer;

        :hover {
            color: #000;
        }
    }
`

const Meta = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    margin-top: 10px;

    > span {
        font-size: 10px;
        color: #999;
    }
`

export const S = {
    Container,
    Meta,
    Headline,
    Actions,
}
