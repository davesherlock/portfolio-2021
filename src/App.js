import React from "react"

import Preloader from "./components/Preloader"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Footer from "./components/Footer"

function App() {

    return (
        <div>
            <Preloader />
            <Header />
            <Hero />
            <About />
            <Portfolio />
            <Footer />
        </div>
    )
}

export default App