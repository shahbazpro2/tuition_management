import { FeedbackContext } from 'context/FeedbackContext'
import { useContext } from 'react'

const useFeedback = (message, error = false) => {
    const context = useContext(FeedbackContext)

    context.setFeedback(message, error)
}

export default useFeedback