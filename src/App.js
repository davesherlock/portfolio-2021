import React from "react"

import Preloader from "./components/Preloader"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import Photoswipe from "./components/Photoswipe"

function App() {

    return (
        <div>
            <Preloader />
            <Header />
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Testimonials />
            <Footer />
            <Photoswipe />
        </div>
    )
}

export default App