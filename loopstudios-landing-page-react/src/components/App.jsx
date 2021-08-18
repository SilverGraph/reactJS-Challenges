import React from "react"
import Header from "./Header"
import Main from "./Main"
import Card from "./Card"
import Footer from "./Footer"

export default function App() {
    return (
        <div className="root">
            <Header />
            <Main />
            <Card />
            <Footer />
        </div>
    )
}