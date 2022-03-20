import { FeedbackContext } from 'context/FeedbackContext'
import { useContext, useEffect, useState } from 'react'

const useApi = ({ errMsg, successMsg } = { errMsg: true }, apiFun) => {
    const context = useContext(FeedbackContext)
    const [state, setState] = useState({
        loading: false,
        error: null,
        data: null,
        message: null
    })

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
        setState({ ...state, loading: true })
        let res = null
        if (api instanceof Function)
            res = await api()
        else
            res = await api
        setState({
            loading: false,
            error: res.error,
            message: res.message,
            data: !res.error ? res.data : null
        })
        if (!res.error && successMsg) {
            context.setFeedback(res.message, res.error)
        } else if (res.error && errMsg) {
            context.setFeedback(res.message, res.error)
        }
        if (!res.error) {
            if (refetch)
                if (api instanceof Function)
                    refetch()
                else refetch
        }
    }
    const { loading, error, data, message } = state
    return [executeApi, { loading, error, data, message }]
}

export default useApi