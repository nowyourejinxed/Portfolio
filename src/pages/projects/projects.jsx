import {ProjectCard} from "../../components/projectcard.jsx";
import Navbar from "../../components/navbar.jsx";
import '../../css/projectcard.css'



const projects = [
    {
        name: 'Coffee N Comics Online Ordering Apps',
        description: 'Mobile ordering app, Companion app and boss(manager/inventory) app for Coffee N Comics.',
        tech: ['React', 'Supabase', 'Next.js', 'Typescript', 'Vercel', 'Git', 'GitHub'],
        link: null,
        liveDemo: 'https://coffeencomicslabs.com',
        images : [
            'projects/cnc.png',
            'projects/mobile-profile.jpeg',
        ]
    },
    {
        name: 'Psychic Riches',
        description: 'An e-commerce website that allows users to browse products and make purchases.',
        tech: ['Javascript', 'Phaser.js', 'Vite', 'Vercel', 'Git', 'Bitbucket', 'Blender'],
        link: 'https://github.com/yourusername/e-commerce-site',
        liveDemo: 'https://your-ecommerce.com',
        images : [
            '/vite.svg',
            'vite.svg',
            'vite.svg',
            'vite.svg',
        ]
    },
    {
        name: 'Game Recommendation System',
        description: 'Developed a proof-of-concept game recommendation engine that allows users to search for games by features,' +
            ' vendors, themes, or similar titles, generating tailored recommendations to enhance user engagement.',
        tech: ['Typescript', 'Google Apps Script', 'Git', 'GitHub', 'Vercel', 'Next.js'],
        link: 'https://github.com/yourusername/weather-app',
        liveDemo: 'https://weatherapp.com',
        images : [
            '/vite.svg',
            'vite.svg',
            'vite.svg',
            'vite.svg',
        ]
    },
    {
        name: 'Poroific',
        description: 'A dynamic survival game featuring Poro, who has to survive the onslaught of Fishbones!' +
            ' Made within 38 hours for the 2024 Biggest Little Hackathon using Unity.',
        tech: ['Unity', 'C#', 'Git', 'GitHub'],
        link: 'https://github.com/yourusername/weather-app',
        liveDemo: 'https://weatherapp.com',
        images : [
            'projects/poro-main.jpeg',
            'projects/poro-ing.jpeg',
            'projects/poro-go.jpeg',
            'projects/logo-poro.jpeg',
        ]
    },
    {
        name: 'SideQuest',
        description: 'Daily RPG mobile game built for iOS and Android : "Wrestling with a dark past and seeking solitude, you decide to take a job as a lighthouse attendant in Painter’s Cove,' +
            ' a sleepy coastal town. However, not long after arrival, you discover the lighthouse and surrounding property are haunted. Complete daily quests, befriend ghosts, explore labyrinthine island caves, and uncover the mysteries surrounding your new home on this spooky nautical adventure."',
        tech: ['Unity', 'C#', 'Git', 'LFS', 'GitHub', 'X-Code'],
        link: 'https://umbranatigames.com',
        liveDemo: null,
        images : [
            'projects/side-quest.png',
            'projects/sq-game.jpeg',
        ]
    },
    {
        name: 'My Portfolio Website',
        description: 'Why Hello There :)',
        tech: ['React'],
        link: 'https://github.com/yourusername/weather-app',
        liveDemo: 'https://weatherapp.com',
        images : []
    },
    {
        name: 'UNR ACM Chapter Website',
        description: 'Redesigned the website for the UNR ACM chapter.',
        tech: ['HTML5', 'CSS', 'Apache', 'SSH', 'SCP'],
        link: 'https://github.com/yourusername/weather-app',
        liveDemo: 'https://weatherapp.com',
        images : [
            'projects/home.jpeg',
            'projects/acm-about.jpeg',
            'projects/about.jpeg',
        ]
    },
];
export default function Projects(){
    return(
        <>
            <Navbar/>
            <section className="projects-section">
                <h2>My Projects</h2>
                <div className="projects-container">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project}/>
                    ))}
                </div>
            </section>
        </>
    );
}