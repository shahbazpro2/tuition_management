import { createContext } from "react";

export const FeedbackContext = createContext({
    error: null,
    success: null,
    setError: (val) => { },
    setSuccess: (val) => { },
})