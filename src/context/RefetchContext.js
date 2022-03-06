import { createContext } from "react";

export const RefetchContext = createContext({
    refetch: null,
    setRefetch: (val) => { },
})