import React from "react";

export default function Navbar(props) {

    return (
        <nav className={props.lightMode ? "light" : ""}>
            <div className="navbar_logo">
                <img src="./logo192.png" width={"50px"}/>
                <h1>ReactFacts</h1>
            </div>
            <div></div>
            <div className="navbar_desc">
                <p>Light</p>
                <label className="toggle" htmlfor="switch">
                    <input className="toggle-switch" type="checkbox" id="switch"/>
                    <div className="toggle-bar" onClick={props.toggle}></div>
                </label>
                <p>Dark</p>
            </div>
        </nav>
    )
}