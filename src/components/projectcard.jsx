import ImageCarousel from "./imageDisplay.jsx";
import '../css/projectcard.css'


export function ProjectCard({ project }){
    return (
        <div className="project-card">
            <h3>{project.name}</h3>
            <ImageCarousel
                images={project.images}
            />
            <p>{project.description}</p>

            <div>
                <strong>Tech Stack</strong>
                <div className="tech-stack">
                    {project.tech.map((techItem, index) => (
                        <a key={index} href={`#${techItem}`} className="tech-tag">
                            {techItem}
                        </a>
                    ))}
                </div>
            </div>

            <div className="project-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                </a>
                {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        Live Demo
                    </a>
                )}
            </div>

        </div>
    );
}
