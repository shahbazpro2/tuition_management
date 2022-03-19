import { FeedbackContext } from 'context/FeedbackContext'
import { useContext, useEffect, useState } from 'react'

const useApi = (feedback, apiFun) => {
    const context = useContext(FeedbackContext)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState([])
    const [message, setMessage] = useState('')

    useEffect(() => {
        if (apiFun) {
            processing(apiFun)
        }
    }, [])

    const executeApi = async (fun, refetch) => {
        if (fun) {
            processing(fun, refetch)
        }

    }

    const processing = async (api, refetch) => {
        setLoading(true)
        let res = null
        if (api instanceof Function)
            res = await api()
        else
            res = await api
        setLoading(false)
        setError(res.error)
        setMessage(res.message)
        if (feedback) {
            context.setFeedback(res.message, res.error)
        }
        if (!res.error) {
            setData(res.data)
            if (refetch) refetch()
        }
    }

    return [executeApi, { loading, error, data, message }]
}

export default useApi