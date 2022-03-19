import Spinner from 'components/common/spinner/Spinner'
import React from 'react'

const LoadingWrapper = ({ loading, children }) => {
    return (
        <>
            {loading ? <Spinner /> : children}
        </>
    )
}

export default LoadingWrapper