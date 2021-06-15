import { S } from "./index.styled"

import { Header } from "components/Header"

export const Wrapper = ({ children }) => {
    return (
        <S.Container>
            <S.ContentWrapper>
                <Header />

                <S.Content>{children}</S.Content>
            </S.ContentWrapper>
        </S.Container>
    )
}
