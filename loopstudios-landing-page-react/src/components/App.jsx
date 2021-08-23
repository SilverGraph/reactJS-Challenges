import React from "react"
import Header from "./Header"
import Description from "./Description"
import Card from "./Card"
import Footer from "./Footer"

export default function App() {
    return (
        <div className="root">
            <Header />
            <Description />
            <Card />
            <Footer />
        </div>
    )
}