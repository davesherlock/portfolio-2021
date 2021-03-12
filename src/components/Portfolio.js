import React from "react"

function Portfolio() {
    return (
        <section id="portfolio" className="s-portfolio target-section">
            <div className="row s-portfolio__header">
                <div className="column large-6 medium-8 tab-full">
                    <div className="section-intro" data-num="03" data-aos="fade-up">
                        <h3 className="subhead">Portfolio</h3>
                        <h1 className="display-1">
                            Want to see what I've have been up to?
                    </h1>
                        <br /><br />
                        <p>I don't just show anyone my work. Please request access using the button below. In hac habitasse platea dictumst. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Phasellus volutpat, metus eget.</p>

                    </div>

                    <a href="files/DaveSherlock_CV_2021.pdf" className="btn btn--stroke btn--small">Request Access</a>


                </div>


                <div className="column large-6 medium-8 tab-full">
                    <div className="portfolio-pic" data-aos="fade-up">
                        <img src="images/portfolio/shout-and-jump.jpg"
                            srcSet="images/portfolio/shout-and-jump.jpg 1x, images/portfolio/shout-and-jump@2x.jpg 2x" alt="" />
                    </div>
                </div>

            </div>


        </section>
    )
}

export default Portfolio