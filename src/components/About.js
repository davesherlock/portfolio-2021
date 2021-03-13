import React from "react"

function About() {
    return (
        <section id="about" className="s-about target-section">
            <div className="s-about__section s-about__section--profile">
                <div className="right-vert-line"></div>
                <div className="row">
                    <div className="column large-6 medium-8 tab-full">
                        <div className="section-intro" data-num="01" data-aos="fade-up">
                            <h3 className="subhead">About Me</h3>
                            <h1 className="display-1">I am happiest when developing software that is both powerful and simple to use.</h1>
                        </div>
                        <div className="profile-pic" data-aos="fade-up">
                            <img src="images/profile-pic.png"
                                srcSet="images/profile-pic.png 1x, images/profile-pic@2x.png 2x" alt="" />
                        </div>
                        <p data-aos="fade-up">
                            My objective has always been to work in an environment
                            where technical skills and creative endeavor function
                            harmoniously in delivering a useful product or service to
                            the end user.
                            <br /> <br />
                            I have 12+ years of working with both front end and back
                            end technologies. Currently based in Wicklow, I work as a
                            full stack developer for Sentient Solutions where my
                            primary role is to lead the ongoing development of
                            Scorebuddy, Flightbuddy and Surveybuddy; three
                            successful cloud based technologies. I am highly
                            motivated, take great pride in the quality of my work and I
                            love to turn innovative ideas into great products.
                            I am a multi-disciplined developer, with an equal
                            knowledge of both the back end technologies and user
                            interface/experience methodologies involved in
                            successful software production.
                            <br /> <br />
                            <span className="gotham">Current stack:&nbsp;</span><br />
                             PHP, MySQL, JavaScript, HTML5, SCSS, GIT, AWS
                            <br /> <br />
                            <span className="gotham">Other skills:&nbsp;</span><br />
                             Agile Development, UX Strategy, Balsamiq, Adobe PS/AI

                    </p>
                    </div>
                </div>
            </div>
            <div className="s-about__section experience">
                <div className="row">
                    <div className="column">
                        <h3 data-aos="fade-up" className="subhead">My Experience</h3>
                        <h4 data-aos="fade-up">Since 2009, I have worked at Sentient Solutions Ltd, a Dublin based software company. I act at Lead Developer and Front-End Engineer. Here are the products for which I oversee the design and development.</h4>
                    </div>
                </div>
                <div className="row block-large-1-2 block-900-full work-positions">
                    <div className="column" data-aos="fade-up">
                        <div className="position">
                            <div className="position__header">
                                <h1>Scorebuddy QA</h1>
                                <h6>Lead Developer And Front End Engineer</h6>
                            </div>

                            <p>
                                Scorebuddy is Sentient’s flagship product. It is an award-winning software used in contact and service centers worldwide to measure the performance of Customer Service Representatives and other staff who handle customer omni-channel interactions (calls, chat, email etc.) – generally referred to as Quality Assessment (QA).

                          
                        </p>
                        <p>As the sole, original developer on this project, I was responsible for the planning, architecting, development and testing of the first version. As the product has grown in popularity and the client base has expanded to over 100 companies and 15,000 users, so has the team around me. My current role is as lead developer on a team of four, tasked with the upkeep, expansion, releases and security of the product.</p>
                        </div>
                    </div>
                    <div className="column" data-aos="fade-up">
                        <div className="position">
                            <div className="position__header">
                            <h1>Flightbuddy</h1>
                            <h6>User Experience Lead</h6>
                            </div>
                            <p>
                            Flightbuddy is a customer services communications platform that automatically alerts passengers of flight delays, cancellations or diversions in multiple languages via SMS and email. Flightbuddy is secure, reliable, scaled for mass disruptions and uses real-time flight data as well as integrating with the airlines booking system to give passengers an alert containing meaningful, accurate and timely information.
                        </p>
                        <p>I was heavily involved in the early stages of this product's design and development. Paired with a Java developer who would look after the core functions I took the role of UX lead. I worked closely with the customer to ensure we developed a product that delivered an excellent user experience.</p>
                        </div>
                    </div>
                    <div className="column" data-aos="fade-up">
                        <div className="position">
                            <div className="position__header">
                            <h1>Surveybuddy</h1>
                            <h6>Lead Developer</h6>
                            </div>
                            <p>
                                In hac habitasse platea dictumst. Donec pede justo, fringilla vel, aliquet nec,
                                vulputate eget, arcu. Fusce risus nisl, viverra et, tempor et, pretium in, sapien.
                                Phasellus volutpat, metus eget.
                        </p>
                        </div>
                    </div>
                    <div className="column" data-aos="fade-up">
                        <div className="position">
                            <div className="position__header">
                            <h1>Ryanair</h1>
                            <h6>Web Developer</h6>
                            </div>
                            <p>
                                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                                Curabitur blandit mollis lacus. Curabitur vestibulum aliquam leo.
                                Vivamus in erat ut urna cursus vestibulum.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About