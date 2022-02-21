const isExist = (exist, data) => {
    const nonExist = []
    let error = false
    exist.forEach(f => {
        if (!(f in data)) {
            nonExist.push(f)
            error = true
        }
    })

    return { error, nonExist }
}

export default isExist