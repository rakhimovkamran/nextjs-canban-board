import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { db } from "constants/firebase.config"
import { useDocument } from "react-firebase-hooks/firestore"
import { Wrapper } from "containers/Wrapper"
import { useStateContext } from "context"
import { Tables } from "containers/Tables"

export default function Board() {
    const router = useRouter()
    const boardID = router.query.id

    const [boardDetails] = useDocument(db.collection("boards").doc(boardID))
    const { state, dispatch } = useStateContext()

    useEffect(() => {
        dispatch({
            ...state,
            boardTitle: boardDetails?.data().title,
            boardID,
        })
    }, [boardDetails])

    return (
        <Wrapper>
            <Head>
                <title>Board</title>
            </Head>

            <Tables boardID={boardID} />
        </Wrapper>
    )
}
