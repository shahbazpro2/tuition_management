import { getUserApiThunk } from 'api/auth'
import React, { useEffect, useState } from 'react'
import RouteWrapper from './RouteWrapper'
import Spinner from '../common/spinner/Spinner'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const GetUserWrapper = ({ children }) => {
    const dispatch = useDispatch()
    const location = useLocation()
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        (async () => {
            await dispatch(getUserApiThunk())
            setLoading(false)
        })()
    }, [location.pathname])

    return (
        <div>
            {loading ? <Spinner /> :
                <RouteWrapper>
                    {children}
                </RouteWrapper>
            }
        </div>
    )
}

export default GetUserWrapper
