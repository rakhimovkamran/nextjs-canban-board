import "assets/css/index.css"
import { ContextWrapper } from "context"

function MyApp({ Component, pageProps }) {
    return (
        <ContextWrapper>
            <Component {...pageProps} />
        </ContextWrapper>
    )
}

export default MyApp
