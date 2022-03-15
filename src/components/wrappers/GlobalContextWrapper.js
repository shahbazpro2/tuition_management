import { GlobalContext } from 'context/GlobalContext'
import React, { useState } from 'react'

const GlobalContextWrapper = ({ children }) => {
    const [state, setState] = useState({
        enums: {}
    })

    const contextValue = {
        enums: state.enums,
        setContext: (name, value) => {
            setState({ ...state, [name]: value })

        }
    }

    return (
        <>
            <GlobalContext.Provider value={contextValue}>
                {children}
            </GlobalContext.Provider>
        </>
    )
}

export default GlobalContextWrapper