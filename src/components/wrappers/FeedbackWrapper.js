import Feedback from 'components/common/snakAlert/Feedback'
import { FeedbackContext } from 'context/FeedbackContext'
import React, { useState } from 'react'

const FeedbackWrapper = ({ children }) => {
    const [state, setState] = useState({
        error: null,
        success: null
    })

    const contextValue = {
        error: state.error,
        success: state.success,
        setError: (message) => {
            console.log('message', message)
            setState({ ...state, error: message })
        },
        setSuccess: (message) => {
            setState({ ...state, success: message })
        }
    }

    return (
        <>
            <FeedbackContext.Provider value={contextValue}>
                {children}
                <Feedback error={state.error} success={state.success} setError={() => setState({ ...state, error: [] })} setSuccess={() => setState({ ...state, success: [] })} />
            </FeedbackContext.Provider>
        </>
    )
}

export default FeedbackWrapper