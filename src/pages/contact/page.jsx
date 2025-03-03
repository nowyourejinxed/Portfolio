import Navbar from "../../components/navbar.jsx";
import '../../css/contact.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

export default function Contact(){
    return(
        <>
            <Navbar/>
            <div className="contact-page">
                <h1>Contact Me</h1>
                <p>Feel free to reach out to me through the following:</p>

                <div className="contact-links">
                    <a href="https://github.com/nowyourejinxed" target="_blank" rel="noopener noreferrer">
                        {/*<FontAwesomeIcon icon={faGithub} id={"mask"} className="contact-image"/>*/}
                        <img
                            src="/github.png"
                            alt="GitHub"
                            className="contact-image"
                            id={"mask"}
                        />
                    </a>

                    <a href="https://www.linkedin.com/in/sabrinajackson-/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/linkedin.png"
                            alt="LinkedIn"
                            className="contact-image"
                            id={"mask"}
                        />
                    </a>

                    <a href="mailto:sabrinajackson@unr.edu">
                        <img
                            src="/email.png"
                            alt="Email"
                            className="contact-image"
                            id={"mask"}
                        />
                    </a>
                </div>
            </div>
        </>
    );
}