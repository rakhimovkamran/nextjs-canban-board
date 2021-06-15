import { useRouter } from "next/router"
import { S } from "./index.styled"

export const Board = ({ title, description, id }) => {
    const router = useRouter()
    const handleOpenBoard = () => router.push(`/board/${id}`)

    return (
        <S.Container onClick={handleOpenBoard}>
            <h2>{title}</h2>
            <p>{description}</p>
        </S.Container>
    )
}
