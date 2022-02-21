import isExist from "./isExist.js"

const checkInputs = (requiredFields) => {
    return (req, res, next) => {
        const { error, nonExist } = isExist(requiredFields, req.body)
        if (error) {
            return res.status(400).json({ message: `These fields are required [${nonExist.toString()}]` })
        }
        next()
    }
}

export default checkInputs