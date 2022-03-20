
const compareJson = (json1, json2) => {
    if (json1 && json2) {
        let result = {}
        for (let [key, value] of Object.entries(json1)) {
            if (json2[key] !== undefined)
                result = { ...result, [key]: value }
        }

        return result
    }
}

export default compareJson