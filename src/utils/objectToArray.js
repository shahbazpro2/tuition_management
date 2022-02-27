const objectToArray = (val) => {
    if (typeof val === 'object')
        return Array.prototype.concat.apply([], Array.from(Object.keys(val), k => val[k]))
    else
        return [val]
}

export default objectToArray