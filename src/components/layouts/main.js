////////////////////////////////////////////////////////////////////////////////
// FILE: main.js
// AUTHOR: David Ruvolo
// CREATED: 2019-10-25
// MODIFIED: 2019-10-25
// PURPOSE: react component for <main> layout
// DEPENDENCIES: NA
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
import "../styles/main.scss"
const Main = (props) => {
    return (
        <main id="main" className={ props.className ? `main ${props.className}` : "main"} aria-label="main content" style={props.style ? props.style : null}>
            {props.children}
        </main>
    )
}
export default Main