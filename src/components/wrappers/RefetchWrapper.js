import { RefetchContext } from 'context/RefetchContext'
import React, { useEffect, useState } from 'react'

const RefetchWrapper = ({ children }) => {
    const [refetch, setRefetch] = useState(null)

    const contextValue = {
        refetch,
        setRefetch: (val) => {
            setRefetch(val)

        }
    }

    useEffect(() => {
        if (refetch) setRefetch(false)
    }, [refetch])

    return (
        <>
            <RefetchContext.Provider value={contextValue}>
                {children}
            </RefetchContext.Provider>
        </>
    )
}

export default RefetchWrapper