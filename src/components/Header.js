import React from "react"

function Header() {
    return (
        <header className="s-header">
            <div className="header-logo">
                <a href="index.html">
                    <img src="images/logo.svg" alt="Homepage" />
                </a>
            </div>
            <div className="header-content">
                <nav className="row header-nav-wrap">
                    <ul className="header-nav">
                        <li><a className="smoothscroll" href="#hero" title="Intro">Home</a></li>
                        <li><a className="smoothscroll" href="#about" title="About">About</a></li>
                        <li><a className="smoothscroll" href="#portfolio" title="Portfolio">Portfolio</a></li>
                        <li><a className="smoothscroll" href="#footer" title="Contact us">Say Hello</a></li>
                    </ul>
                </nav>
                <a href="files/DaveSherlock_CV_2021.pdf" className="btn btn--stroke btn--small">Download CV</a>
            </div>
            <a className="header-menu-toggle" href="#0"><span>Menu</span></a>
        </header>

    )
}

export default Header