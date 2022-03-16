import { enumsApi } from "api/enums"
import { GlobalContext } from "context/GlobalContext"
import { useContext, useEffect, useState } from "react"


const useRefetchEnums = () => {
    const context = useContext(GlobalContext)

    const getEnums = async () => {
        const res = await enumsApi()
        context.setContext('enums', res.data)
    }

    return [getEnums]

}

export default useRefetchEnums