import { createContext, useContext, useState } from "react"

const AppContext = createContext()

export function ContextWrapper({ children }) {
    const [state, dispatch] = useState({
        boardID: null,
    })

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export function useStateContext() {
    return useContext(AppContext)
}
