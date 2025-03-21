import Navbar from "../components/NavBar.jsx";
import '../css/contact.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import Section from "../components/Section.jsx";
import Footer from "../components/Footer.jsx";

export default function Contact(){
    return(
        <>
            <div className={"pt-[6.75rem] lg:pt-[8.25rem] overflow-hidden"}>
            <Navbar/>
                <Section>
                    <div className="container relative">
                        <div
                            className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">

                <h1 className={"h1 text-n-4 font-PressStart2P"}>Contact Me</h1>
                <p className={"mt-12"}>Feel free to reach out to me through the following:</p>

                <div className="contact-links">
                    <a href="https://github.com/nowyourejinxed" target="_blank" rel="noopener noreferrer">

                        <img
                            src="/socials/github.png"
                            alt="GitHub"
                            className="contact-image"
                            id={"mask"}
                        />
                    </a>

                    <a href="https://www.linkedin.com/in/sabrinajackson-/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/socials/linkedin.png"
                            alt="LinkedIn"
                            className="contact-image"
                            id={"mask"}
                        />
                    </a>

                    <a href="mailto:sabrinajackson@unr.edu">
                        <img
                            src="/socials/email.png"
                            alt="Email"
                            className="contact-image"
                            id={"mask"}
                        />
                    </a>
                </div>
            </div>

                    </div>
                </Section>
                <Footer/>
            </div>
        </>
    );
}