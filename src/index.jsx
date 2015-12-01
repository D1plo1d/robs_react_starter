// Stylesheets
import "bootstrap/dist/css/bootstrap.css"

// JS Dependencies
import React from "react"
import ReactDOM from "react-dom"
import CommentSection from "./components/comments_section/comments_section.jsx"

// Rendering the page (on page load - just like jQuery used to do!)
ReactDOM.render(<CommentSection/>, document.getElementById('content'))
