import React from 'react'
import SnakbarAlert from './SnakbarAlert.js'


const Feedback = ({ error, success, setError, setSuccess }) => {
    return (
        <div>
            {error?.length && <SnakbarAlert open={error.length ? true : false} handleClose={setError} message={error} type="error" />}
            {success?.length && <SnakbarAlert open={success.length ? true : false} handleClose={setSuccess} message={success} type="success" />}
        </div>
    )
}

export default Feedback