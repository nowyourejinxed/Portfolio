import Navbar from "../../components/navbar.jsx";
import '../../css/about.css';

export default function About(){
    return(
        <>
            <Navbar/>
            <div className="about-container">
                <header className="about-header">
                    <h1>About Me</h1>
                    <img src={'me.jpeg'} alt={"Profile"} className={"profile-image"}/>
                    <p>Hi, I'm Sabrina, a passionate Software Engineer and Game Developer.</p>
                </header>

                <section className="intro">
                    <h2>Introduction</h2>
                    <p>
                        I'm a Software Engineer currently pursuing a Master of Science in Computer Science and
                        Engineering at the University of Nevada, Reno,
                        with an expected graduation date of May 2025. My expertise lies in full-stack web development,
                        game development, and building scalable
                        applications. I have a strong passion for building intuitive user experiences and solving
                        complex problems through code.
                    </p>
                </section>

                <section className="education">
                    <h2>Education</h2>
                    <p>
                        <strong>Master of Science in Computer Science and Engineering</strong>
                        <br/>
                        University of Nevada, Reno — Graduation Date: May 2025
                        <br/>
                        <strong>Relevant Coursework:</strong> AI in Games, Algorithms and Data Structures,
                        Human-Computer Interaction, Operating Systems, Database Management Systems, Game Theory in
                        Cybersecurity, Fundamentals of Deep Learning
                    </p>
                </section>

                <section className="experience">
                    <h2>Experience</h2>

                    <div className="experience-item">
                        <h3>Game Integration Intern</h3>
                        <p><strong>Game Play Network</strong> — April 2024 - Present | Remote</p>
                        <ul>
                            <li>Evaluated and improved GPN SDK documentation by updating deprecated content, refreshing
                                visual assets, resolving CORS errors, and adding localhost support for staging,
                                enhancing developer usability and integration efficiency.
                            </li>
                            <li>Developed and implemented *Psychic Riches*, a Phaser.js-based game to test and showcase
                                SDK integration, providing a functional example for developers.
                            </li>
                            <li>Enhanced a Python-based math simulator to calculate game volatility and key performance
                                metrics, enabling accurate risk assessment and balancing.
                            </li>
                            <li>Identified and analyzed hosting limitations in the Game Service Manager, contributing to
                                a scalable solution proposal for game hosting.
                            </li>
                            <li>Developed a proof-of-concept game recommendation engine, enabling tailored
                                recommendations to enhance user engagement.
                            </li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <h3>Full Stack Engineer</h3>
                        <p><strong>Coffee N Comics Labs</strong> — Nov 2022 - Present | Hybrid | Sparks, NV</p>
                        <ul>
                            <li>Developed and launched Coffee N Comics’ online ordering system, enabling 200+ customer
                                transactions with a smooth ordering experience.
                            </li>
                            <li>Designed and implemented a Supabase database schema to efficiently manage orders and
                                data for 300+ users, ensuring reliable data retrieval and streamlined operations.
                            </li>
                            <li>Built and optimized core features such as user profiles, order history, cart, and
                                karaoke system to enhance customer engagement.
                            </li>
                            <li>Developed and supported a mobile ordering app and employee management system using
                                React, Next.js, and Supabase, improving operational efficiency.
                            </li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <h3>Software Engineer Intern</h3>
                        <p><strong>Umbranati Games</strong> — June 2023 - Oct 2023 | Hybrid | Sparks, NV</p>
                        <ul>
                            <li>Developed features for *SideQuest*, a daily RPG mobile game, contributing to gameplay
                                depth through testing and iteration.
                            </li>
                            <li>Contributed to iOS build creation, debugging, and core gameplay implementation to ensure
                                a polished user experience.
                            </li>
                            <li>Designed and tested dynamic combat mechanics, leading to balanced and engaging
                                battles.
                            </li>
                            <li>Created a dynamic dungeon system with randomized objectives and missions, enhancing game
                                replayability.
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="technical-skills">
                    <h2>Technical Skills</h2>
                    <p>
                        <strong>Languages:</strong> C++, C#, Python, JavaScript, HTML5, CSS, SQL
                    </p>
                    <p>
                        <strong>Developer Tools:</strong> Git, GitHub, BitBucket, Supabase, Jira, Slack, Confluence,
                        CI/CD
                    </p>
                    <p>
                        <strong>Libraries/Frameworks:</strong> React.js, TypeScript.js, Next.js, Node.js, PostgreSQL,
                        Phaser.js, Unity, Unreal Engine
                    </p>
                </section>

                <section className="contact">
                    <h2>Contact</h2>
                    <p>Feel free to reach out if you'd like to discuss potential opportunities or just connect!</p>
                    <p>Email: <a href="mailto:sabrinajackson@unr.edu">sabrinajackson@unr.edu</a></p>
                    <p>GitHub: <a href="https://github.com/nowyourejinxed">github.com/nowyourejinxed</a></p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/sabrinajackson-">linkedin.com/in/sabrinajackson-</a>
                    </p>
                </section>
            </div>
        </>
    )
        ;
}