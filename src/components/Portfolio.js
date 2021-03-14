import React from "react"

function Portfolio() {
    return (
        <section id="portfolio" className="s-portfolio target-section">
            <div className="row s-portfolio__header">
                <div className="column large-6 medium-8 tab-full">
                    <div className="section-intro" data-num="03" data-aos="fade-up">
                        <h3 className="subhead">Portfolio</h3>
                        <h1 className="display-1">Want to see what I've been up to?</h1>
                        <br />
                        <div className=" mobile-portfolio-pic">
                            <img src="images/scorebuddy-laptop.png" alt="scorebuddy-on-laptop" />
                        </div>
                        <p>I don't just show anyone my work. Please request access using the button below. In hac habitasse platea dictumst. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Phasellus volutpat, metus eget.</p>
                    </div>
                    <a href="files/DaveSherlock_CV_2021.pdf" className="btn btn--stroke btn--small">Request Access</a>
                </div>

            </div>
        </section>
    )
}

export default Portfolio