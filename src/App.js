import Head from "./components/head";
import Last from "./components/last";
import Middle from "./components/middle";
import {useState } from "react";
import React from "react"

export const themeContext=React.createContext("light")

const App =()=>{
    const [theme, setTheme] = useState("light")
    return(
        <themeContext.Provider value={{theme,setTheme}}>
        <div  id={theme}>
           <Head/>
           <Middle/>
           <Last/>
        </div>
        </themeContext.Provider>
    )
}

export default App;