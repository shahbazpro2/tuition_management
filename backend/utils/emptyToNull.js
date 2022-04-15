const emptyToNull = (data) => {
    for (var key of Object.keys(data)) {
        if (data[key] === '') {
            data[key] = null
        }
    }

    return data
}

export default emptyToNull