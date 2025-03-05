import Navbar from "../components/navbar.jsx";
import '../css/about.css';
import Section from "../components/Section.jsx";

export default function About(){
    return(
        <>
           <div className={"pt-[2.75rem] lg:pt-[3.25rem] overflow-hidden"}>
            <Navbar/>
               <Section>
                   <div className="container relative">
                       <div
                           className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
                           <h1 className={"h1 mb-6"}>About Me</h1>
                           <img src={'me.jpeg'} alt={"Profile"} className={"profile-image"}/>
                           <p>Crafting Experiences, One Line of Code at a Time ☕️🎮</p>

                           <section className="intro">
                               <h2 className={"h2"}>Introduction</h2>
                               <p>
                                   Hi, I'm Sabrina — a software engineer with a passion for full stack web development and game development. I've always been drawn to technology, problem solving, and understanding how things work — but my path here wasn't exactly straightforward.

                                   I started out as an engineering major in college, but like many women in tech, I felt intimidated by the lack of female representation in the field. I switched to Nutrition Dietetics, where I got to solve problems through food and explore complex biological pathways — but something always felt... missing.

                                   The truth is, I never stopped loving tech. I'd tinker on my computer any chance I got. Even after trying out a few different career paths, I always ended up right back at my keyboard. Eventually, I took the leap to go back to school for Computer Science — and I've known it was the right choice ever since.

                                   Now, every day I wake up excited to log onto my computer, clickity-clack away at my keyboard, and solve problems — whether it's building seamless web apps or crafting immersive game worlds. What I love most about tech is that there's always something new to learn and endless ways to create.

                                   When I'm not coding, you'll probably find me playing video games, exploring the
                                   outdoors, or hunting down the perfect cup of coffee.
                               </p>
                           </section>
                           <section className="intro">
                               <h2 className={"h2"}>What I Love Building</h2>
                               <p>
                                   💻 Full Stack Web Apps
                                   Intuitive, responsive web experiences using React, Next.js, Node.js, and more.

                                   🎯 Games
                                   Interactive environments and gameplay systems with Unreal Engine, Unity, C# and C++.

                                   🧠 AI + Data Augmentation
                                   Experimenting with AI tools to push what's possible in both web and game development.
                               </p>
                           </section>
                           <section className="intro">
                               <h2 className={"h2"}>Why I Build</h2>
                               <p>
                                   I'm passionate about creating experiences that feel immersive, seamless, and just plain fun — whether it's a web app that makes life easier or a game world that pulls you in.

                                   I build because I love solving problems.
                                   I build because I love that feeling when everything finally clicks.
                                   I build because there's always something new to learn — and I'm endlessly curious.
                                   Every project is a chance to learn something new, solve interesting problems, and build something that didn't exist before. That's what keeps me coming back.

                               </p>
                           </section>


                           <section className="experience">
                               <h2 className={"h2"}>Experience</h2>

                               <div className={"text-left"}>
                                   <h3 className={"h4 text-n-2"}>Game Integration Intern</h3>
                                   <p><strong className={"text-n-4"}>Game Play Network</strong> — April 2024 - Present |
                                       Remote</p>
                                   <ul>
                                       <li>Evaluated and improved GPN SDK documentation by updating deprecated content,
                                           refreshing
                                           visual assets, resolving CORS errors, and adding localhost support for
                                           staging,
                                           enhancing developer usability and integration efficiency.
                                       </li>
                                       <li>Developed and implemented Psychic Riches, a Phaser.js-based game to test
                                           and showcase
                                           SDK integration, providing a functional example for developers.
                                       </li>
                                       <li>Enhanced a Python-based math simulator to calculate game volatility and key
                                           performance
                                           metrics, enabling accurate risk assessment and balancing.
                                       </li>
                                       <li>Identified and analyzed hosting limitations in the Game Service Manager,
                                           contributing to
                                           a scalable solution proposal for game hosting.
                                       </li>
                                       <li>Developed a proof-of-concept game recommendation engine, enabling tailored
                                           recommendations to enhance user engagement.
                                       </li>
                                   </ul>
                               </div>

                               <div className={"text-left"}>
                                   <h3 className={"h4 text-n-2"}>Full Stack Engineer</h3>
                                   <p><strong className={"text-n-4"}>Coffee N Comics Labs</strong> — Nov 2022 - Present
                                       | Hybrid | Sparks, NV
                                   </p>
                                   <ul>
                                       <li>Developed and launched Coffee N Comics’ online ordering system, enabling 200+
                                           customer
                                           transactions with a smooth ordering experience.
                                       </li>
                                       <li>Designed and implemented a Supabase database schema to efficiently manage
                                           orders and
                                           data for 300+ users, ensuring reliable data retrieval and streamlined
                                           operations.
                                       </li>
                                       <li>Built and optimized core features such as user profiles, order history, cart,
                                           and
                                           karaoke system to enhance customer engagement.
                                       </li>
                                       <li>Developed and supported a mobile ordering app and employee management system
                                           using
                                           React, Next.js, and Supabase, improving operational efficiency.
                                       </li>
                                   </ul>
                               </div>

                               <div className={"text-left"}>
                                   <h3 className={"h4 text-n-2"}>Software Engineer Intern</h3>
                                   <p><strong className={"text-n-4"}>Umbranati Games</strong> — June 2023 - Oct 2023 |
                                       Hybrid | Sparks, NV</p>
                                   <ul>
                                       <li>Developed features for SideQuest, a daily RPG mobile game, contributing to
                                           gameplay
                                           depth through testing and iteration.
                                       </li>
                                       <li>Contributed to iOS build creation, debugging, and core gameplay
                                           implementation to ensure
                                           a polished user experience.
                                       </li>
                                       <li>Designed and tested dynamic combat mechanics, leading to balanced and
                                           engaging
                                           battles.
                                       </li>
                                       <li>Created a dynamic dungeon system with randomized objectives and missions,
                                           enhancing game
                                           replayability.
                                       </li>
                                   </ul>
                               </div>
                           </section>
                           <section className={""}>
                               <h2 className={"h2"}>Technical Skills</h2>
                               <p>
                                   <strong className={"text-n-4"}>Languages:</strong> C++, C#, Python, JavaScript,
                                   HTML5, CSS, SQL
                               </p>
                               <p>
                                   <strong className={"text-n-4"}>Developer Tools:</strong> Git, GitHub, BitBucket,
                                   Supabase, Jira, Slack,
                                   Confluence, CI/CD, Notion (because organized code = happy code)
                               </p>
                               <p>
                                   <strong className={"text-n-4"}>Libraries/Frameworks:</strong> React.js,
                                   TypeScript.js, Next.js, Node.js,
                                   PostgreSQL,
                                   Phaser.js, Unity, Unreal Engine
                               </p>
                           </section>
                           <section className="education">
                               <h2 className={"h2"}>Education</h2>
                               <p>
                                   <strong className={"text-n-4"}>Master of Science in Computer Science and
                                       Engineering</strong>
                                   <br/>
                                   University of Nevada, Reno — Graduation Date: May 2025
                                   <br/>
                                   <strong>Relevant Coursework:</strong> AI in Games, Algorithms and Data Structures,
                                   Human-Computer Interaction, Operating Systems, Database Management Systems, Game
                                   Theory in
                                   Cybersecurity, Fundamentals of Deep Learning
                               </p>
                               <br/>
                               <p>
                                   <strong className={"text-n-4"}>Bachelors of Science in Nutrition Dietetics</strong>
                                   <br/>
                                   University of Nevada, Reno — Graduation Date: May 2025
                                   <br/>
                                   <strong>Relevant Coursework:</strong> AI in Games, Algorithms and Data Structures,
                                   Human-Computer Interaction, Operating Systems, Database Management Systems, Game
                                   Theory in
                                   Cybersecurity, Fundamentals of Deep Learning
                               </p>
                           </section>

                           <section className="contact">
                               <h2 className={"h2"}>Let's Build Something Awesome</h2>
                               <p>Want to talk code, coffee, or video games?
                                   I'm always up for new projects, collaborations, or just geeking out about the latest
                                   game releases.</p>
                               <br/>
                               <p>Email: <a href="mailto:sabrinajackson@unr.edu">sabrinajackson@unr.edu</a></p>
                               <p>GitHub: <a href="https://github.com/nowyourejinxed">github.com/nowyourejinxed</a></p>
                               <p>LinkedIn: <a
                                   href="https://www.linkedin.com/in/sabrinajackson-">linkedin.com/in/sabrinajackson-</a>
                               </p>
                           </section>
                       </div>
                   </div>
               </Section>
           </div>
        </>
    )
        ;
}