import Head from "next/head"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Tournament</title>
                <meta
                    name="description"
                    content="Tournament board app like Trello"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    )
}
