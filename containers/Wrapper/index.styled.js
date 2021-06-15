import styled from "styled-components"

const Container = styled.div`
    display: flex;
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Content = styled.div`
    flex: 1;
    padding: 10px 30px;
`

export const S = {
    Container,
    ContentWrapper,
    Content,
}
