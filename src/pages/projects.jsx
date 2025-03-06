import Navbar from "../components/NavBar.jsx";
import '../css/projectcard.css'
import {projects} from "../constants/index.jsx";
import {useState} from "react";
import Button from "../components/Button.jsx";
import Section from "../components/Section.jsx";
import Footer from "../components/Footer.jsx";
import ProjectCard from "../components/projectcard.jsx";






export default function Projects(){
    const [filter, setFilter] = useState('all');

    const filteredProjects = filter === 'all' ? [...projects.web, ...projects.games] : projects[filter];
    return(
        <>
            <div className={"pt-[3.75rem] lg:pt-[5.25rem] overflow-hidden"}>
            <Navbar/>
                <Section>
                    <div className="container relative">
                        <div
                            className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
                        <section className="pt-12 px-6">
                            <h1 className=" h1 font-bold text-center font-code">Projects that Blend Creativity, Code, and Curiosity</h1>

                            {/* Filter Buttons */}
                            <div className="text center lg:text-right mt-12 mb-0">
                                <Button onClick={() => setFilter('all')}>All</Button>
                                <Button onClick={() => setFilter('web')}>Web</Button>
                                <Button onClick={() => setFilter('games')}>Games</Button>
                            </div>
                        </section>
                        <div className="grid gap-15">
                            {filteredProjects.map((project, index) => (
                                <ProjectCard key={index} project={project}/>
                            ))}
                        </div>
                        </div>

                    </div>
                </Section>
                <Footer/>
            </div>
        </>
    );
}