import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "../src/style.css";

export default function App() {
    const [lightMode, setLightMode] = React.useState(false)

    function toggleLightMode() {
        setLightMode(prevState => !prevState)
    }

    return (
        <>
            <Navbar lightMode={lightMode} toggle={toggleLightMode} />
            <Main lightMode={lightMode}/>
        </>
    )
}