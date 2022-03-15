const formateError = (error, duplicateMessage) => {
    if (error?.name === 'MongoServerError' && error?.code === 11000) {
        return { message: duplicateMessage || "Data already exist" }
    } else if (error?.name === 'ValidationError') {
        return { message: Object.values(error.errors).map(val => val.message)[0] }
    }
    return { message: error?.message || error }
}

export default formateError