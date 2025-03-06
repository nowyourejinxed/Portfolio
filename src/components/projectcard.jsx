import ImageCarousel from "./imageDisplay.jsx";
import '../css/projectcard.css'


export function ProjectCard({ project }){
    return (
        <div className="project-card p-2 text-center">
            <h3 className={"h2 text-n-4 px-15 pt-15 font-PressStart2P"}>{project.name}</h3>
            {project.images && project.images.length > 0 && (
                <ImageCarousel
                    images={project.images}
                />
            )}
            <p className={"h6 pb-5 px-15"}>{project.description}</p>

            <div>
                <strong className={"text-n-4 pb-1"}>Tech Stack</strong>
                <div className="tech-stack pt-3 pb-3 px-7">
                    {project.tech.map((techItem, index) => (
                        <a key={index} href={`#${techItem}`} className="tech-tag">
                            {techItem}
                        </a>
                    ))}
                </div>
            </div>

            <div className="text-center text-n-4 h6 pb-15">
                {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={"px-7"}>
                    View on GitHub
                </a>
                )}
                {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className={"px-7"}>
                        Website
                    </a>
                )}
            </div>

        </div>
    );
}
