import { useAppDispatch } from '@redux/Store'
import { getUsersApi } from 'api/auth'
import router from 'next/router'
import React, { useEffect, useState } from 'react'
import RouteWrapper from './RouteWrapper'
import Spinner from '../common/spinner/Spinner'

const GetUserWrapper = ({ children }) => {
    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        (async () => {
            await dispatch(getUsersApi())
            setLoading(false)
        })()
    }, [router.asPath])

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
