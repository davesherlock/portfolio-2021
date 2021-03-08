import React from "react"

function Testimonials() {
    return (
        <section id="testimonials" className="s-testimonials">

            <div className="row collapse">

                <div className="column large-full">

                    <div className="testimonial-slider" data-aos="fade-up">

                        <div className="testimonial-slider__slide">
                            <p>
                                Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem.
                                Explicabo a quaerat sint autem dolore ducimus ut consequatur neque.  Nisi dolores quaerat fuga rem nihil nostrum.
                                Laudantium quia consequatur molestias delectus culpa.
                        </p>
                            <div className="testimonial-slider__author">
                                <img src="images/avatars/user-02.jpg" alt="Author " className="testimonial-slider__avatar" />
                                <cite className="testimonial-slider__cite">
                                    <strong>Tim Cook</strong>
                                    <span>CEO, Apple</span>
                                </cite>
                            </div>
                        </div>

                        <div className="testimonial-slider__slide">
                            <p>
                                Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci.
                                Nisi eaque consequatur. Voluptatem dignissimos ut ducimus accusantium perspiciatis.
                                Quasi voluptas eius distinctio. Atque eos maxime.
                        </p>
                            <div className="testimonial-slider__author">
                                <img src="images/avatars/user-01.jpg" alt="Author " className="testimonial-slider__avatar" />
                                <cite className="testimonial-slider__cite">
                                    <strong>Sundar Pichai</strong>
                                    <span>CEO, Google</span>
                                </cite>
                            </div>
                        </div>

                        <div className="testimonial-slider__slide">
                            <p>
                                Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.
                                Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio.
                                Voluptatem dignissimos ut.
                        </p>
                            <div className="testimonial-slider__author">
                                <img src="images/avatars/user-04.jpg" alt="Author " className="testimonial-slider__avatar " />
                                <cite className="testimonial-slider__cite">
                                    <strong>Satya Nadella</strong>
                                    <span>CEO, Microsoft</span>
                                </cite>
                            </div>
                        </div>

                        <div className="testimonial-slider__slide">
                            <p>
                                Nunc interdum lacus sit amet orci. Vestibulum dapibus nunc ac augue. Fusce vel dui. In ac felis
                                quis tortor malesuada pretium. Curabitur vestibulum aliquam leo. Qui sed at corrupti expedita voluptas odit.
                                Nihil ea quia nesciunt. Ducimus aut sed ipsam.
                        </p>
                            <div className="testimonial-slider__author">
                                <img src="images/avatars/user-05.jpg" alt="Author " className="testimonial-slider__avatar" />
                                <cite className="testimonial-slider__cite">
                                    <strong>Jeff Bezos</strong>
                                    <span>CEO, Amazon</span>
                                </cite>
                            </div>
                        </div>

                    </div>

                </div>

            </div>



            <div className="s-cta">

                <div className="row">
                    <div className="column large-full">
                        <h2 className="section-desc" data-aos="fade-up">
                            Need a great reliable web hosting?
                    </h2>
                    </div>
                </div>

                <div className="row cta-content" data-aos="fade-up">
                    <div className="column large-full">
                        <p>
                            We highly recommend <a href="https://www.dreamhost.com/r.cgi?287326">DreamHost</a>.
                    Powerful web and Wordpress hosting. Guaranteed.
                    Starting at $2.95 per month.
                    </p>

                        <a href="https://www.dreamhost.com/r.cgi?287326" className="btn btn--primary h-full-width">Get Started</a>
                    </div>
                </div>

            </div>


        </section>

    )
}

export default Testimonials