import { enumsApi } from "api/enums"
import { GlobalContext } from "context/GlobalContext"
import { useContext } from "react"
import useApi from "./useApi"


const useRefetchEnums = () => {
    const context = useContext(GlobalContext)
    const [, { data }] = useApi({}, enumsApi, ({ data }) => context.setContext('enums', data))
}

export default useRefetchEnums