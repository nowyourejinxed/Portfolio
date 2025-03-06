
import Section from "./Section";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function Footer(){
    return (
        <Section crosses className="!px-0 !py-10">
            <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
                <p className="caption text-n-4 lg:block">
                   © {new Date().getFullYear()}. Sabrina Jackson
                </p>

                <ul className="flex gap-5 flex-wrap">
                    <a
                        href={'https://github.com/nowyourejinxed'}
                        target="_blank"
                        className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                    >
                        <FontAwesomeIcon icon={faGithub} id={"mask"}/>
                    </a>
                    <a
                        href={'https://www.linkedin.com/in/sabrinajackson-/'}
                        target="_blank"
                        className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                    >
                        <FontAwesomeIcon icon={faLinkedin} id={"mask"}/>
                    </a>
                    <a
                        href={'mailto:sabrinajackson@unr.edu'}
                        target="_blank"
                        className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                    >
                        <FontAwesomeIcon icon={faEnvelope} id={"mask"}/>
                    </a>


                </ul>
            </div>
        </Section>
    );
};
