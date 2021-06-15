import Head from "next/head"
import { useCollection } from "react-firebase-hooks/firestore"
import { db } from "constants/firebase.config"

import { S } from "./index/index.styled"
import { Board } from "components/Board"
import { Wrapper } from "containers/Wrapper"

export default function Boards() {
    const [boards] = useCollection(db.collection("boards"))

    return (
        <Wrapper>
            <Head>
                <title>Boards</title>
            </Head>

            <S.Container>
                {boards?.docs.map((board) => {
                    const { title, description } = board.data()

                    return (
                        <Board
                            key={board.id}
                            id={board.id}
                            title={title}
                            description={description}
                        />
                    )
                })}
            </S.Container>
        </Wrapper>
    )
}
