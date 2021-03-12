import React from "react"

function Footer() {
    return (<footer id="footer" className="s-footer h-dark-bg">
        <div className="right-vert-line"></div>
        <div className="row s-footer__main">
            <div className="column large-6">
                <div className="section-intro" data-aos="fade-up">
                    <h3 className="subhead">Contact</h3>
                    <h1 className="display-1">
                        Got a project that you think I might be interested in?
                </h1>
                </div>
                <div className="footer-email-us">
                    <a href="mailto:hello@davesherlock.com" className="btn btn--primary">Let's Talk</a>
                </div>
            </div>
            <div className="column large-5">
                <div className="footer-contacts">
                    <br />
                    <div className="footer-contact-block" data-aos="fade-up">
                        <ul className="footer-contact-block__list">
                            <li><a href="http://stackoverflow.com/users/613007/user613007">Stack Overflow</a></li>
                            <li><a href="https://github.com/davesherlock">GitHub</a></li>
                            <li><a href="https://ie.linkedin.com/in/davesherlock">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="row s-footer__bottom">

            <div className="column large-full ss-copyright">
                <span>© Copyright Dave Sherlock 2019</span>

            </div>

            <div className="ss-go-top">
                <a className="smoothscroll" title="Back to Top" href="#top">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0l8 9h-6v15h-4v-15h-6z" /></svg>
                </a>
            </div>
        </div>
    </footer>)
}

export default Footer