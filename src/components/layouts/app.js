////////////////////////////////////////////////////////////////////////////////
// FILE: app.js
// AUTHOR: David Ruvolo
// CREATED: 2019-10-25
// MODIFIED: 2019-10-25
// PURPOSE: react component for app wrapper
// DEPENDENCIES: see below
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
import SEO from "../seo"
import Header from "../primary/header"
import Footer from "../primary/footer"
import "../styles/master.scss"
const App = (props) => {
    return (
        <>
            <SEO title={props.title} keywords={props.keywords} description={props.description} author={props.author} />
            <Header />
            {props.children}
            <Footer />
        </>
    )
}
export default App