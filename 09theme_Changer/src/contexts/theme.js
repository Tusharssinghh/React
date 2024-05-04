import { useSyncExternalStore } from "react";
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    thememode : "Light",
    darkTheme : () => {},
    lightTheme : () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext (ThemeContext)
}