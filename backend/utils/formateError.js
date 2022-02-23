const formateError = (error, duplicateMessage) => {
    if (error.name === 'MongoServerError' && error.code === 11000) {
        return duplicateMessage
    } else if (error.name === 'ValidationError') {
        return Object.values(error.errors).map(val => val.message)[0]
    }
    return error.message
}

export default formateError