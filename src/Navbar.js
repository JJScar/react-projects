import React from "react"
import Logo from "./logo.svg"
import "./index.css"

export default function Navbar() {
    return (
        <div className="nav">
            <img src={Logo} className="logo" alt="logo" />
            <h2 className="nav-title">ReactFacts</h2>
            <h4 className="nav-items">React Course - Project 1</h4>
        </div>
    )
}
