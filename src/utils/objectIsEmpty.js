/* eslint-disable no-prototype-builtins */
const objectIsEmpty = (obj) => {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}

export default objectIsEmpty


export const allIsEmpty = (obj) => Object?.values(obj).every(x => x === null || x === '' || x === ' ');