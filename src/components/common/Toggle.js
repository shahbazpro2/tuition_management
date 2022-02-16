import { Checkbox, FormControlLabel } from "@mui/material"
import { useEffect } from "react"
import { useContext } from "react"
import { DarkModeContext } from "../../App"
import { useDarkMode } from "../../useDarkMode"

export const Toggle = () => {
    const context = useContext(DarkModeContext)
    const [isDark, setIsDark] = useDarkMode()

    useEffect(() => {
        context.setMode(isDark)
    }, [isDark])

    return (
        <FormControlLabel control={<Checkbox checked={isDark} onChange={e => setIsDark(e.target.checked)} />} label="Dark Mode" />
    )
}