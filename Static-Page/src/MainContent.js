import React from "react"
import Logo from "./logo.svg"

export default function MainContent() {
    return (
        <div className="main">
            <header>
                <h1 className="main--title">Fun facts about React</h1>
            </header>
            <div className="facts-background">
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
            <img src={Logo} className="background-logo" alt="logo" />
        </div>
    )
}
