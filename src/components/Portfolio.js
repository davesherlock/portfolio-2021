import React from "react"

function Portfolio() {
    return (
        <section id="portfolio" className="s-portfolio target-section">
            <div className="row s-portfolio__header">
                <div className="column large-6 medium-8 tab-full">
                    <div className="section-intro" data-num="03" data-aos="fade-up">
                        <h3 className="subhead">Portfolio</h3>
                        <h1 className="display-1">Want to see what <br />I've been up to?</h1>
                        <br />
                        <div className=" mobile-portfolio-pic">
                            <img src="images/scorebuddy-laptop.png" alt="scorebuddy-on-laptop" />
                        </div>
                        <p>The past decade has been a busy one, with lots of user interface design and application development. If you're interested in seeing some of my work, please let me know via the link below.</p>
                    </div>
                    <a href="mailto:hello@davesherlock.com" className="btn btn--stroke btn--small">Request Access</a>
                </div>
            </div>
        </section>
    )
}

export default Portfolio