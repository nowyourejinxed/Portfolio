import Navbar from "../components/NavBar.jsx";
import '../css/about.css';
import Section from "../components/Section.jsx";
import Footer from "../components/Footer.jsx";
import {ImageSlider} from "../components/ImageSlider.jsx";
import {myPhotos} from "../constants/index.jsx";


export default function About(){
    return(
        <>
           <div className={"pt-[5.75rem] lg:pt-[3.25rem] overflow-hidden"}>
            <Navbar/>
               <Section>
                   {/*Break apart into dif sections*/}
                   <div className="container relative">
                       <div
                           className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
                           <p className={"text-n-4 h4 pb-7 font-PressStart2P"}>Crafting Experiences, One Line of Code at a Time</p>
                           <div className={"flex justify-center"}>
                               <ImageSlider
                                   images={myPhotos}
                               />
                           </div>


                           <br/>

                           <section className="intro">
                               <h2 className={"h2 font-PressStart2P"}>Who am I?</h2>
                               <p className="mb-6">
                                   Hi, I'm <span className="font-semibold">Sabrina</span> — a software engineer with a
                                   passion for <span
                                   className="font-semibold">full stack web development</span> and <span
                                   className="font-semibold">game development</span>. I've always been drawn to
                                   technology, problem solving, and understanding how things work — but my path here
                                   wasn't exactly straightforward.
                               </p>
                               <p className="mb-6">
                                   I started out as an Engineering major in college, but like many women in tech, I felt
                                   intimidated by the lack of female representation in the field. After my first
                                   semester, I switched to
                                   Nutrition Dietetics, where I got to utilize my passion for problem solving through
                                   food and explore complex
                                   biological pathways — but something always felt... missing.
                               </p>
                               <p className="mb-6">
                                   The truth is, I never stopped loving tech. I'd tinker on my computer any chance I
                                   got. Ironically, I was the Student Nutrition Association Social Media Chair/Tech
                                   person and even though I had changed majors, I still found
                                   a way to end up making websites. Even after trying out a few different career paths,
                                   I always ended up right back
                                   at my keyboard. Eventually, I took the leap to go back to school for Computer Science
                                   — and I've known it was the right choice ever since.
                               </p>
                               <p className="mb-6">
                                   Now, every day I wake up excited to log onto my computer, clickity-clack away at my
                                   keyboard, and solve problems — whether it's building seamless web apps or crafting
                                   immersive game worlds. What I love most about tech is that there's always something
                                   new to learn and endless ways to create new and amazing things.
                               </p>
                               <p className="mb-6">
                                   When I'm not coding, you'll probably find me playing video games, exploring the
                                   outdoors, or hunting down the perfect cup of coffee. Some fun facts about me: I love
                                   penguins, am a huge <span className="font-semibold">Jinx</span> fan (she's my main,
                                   but also <span className="italic">Arcane</span> is a work of art), and I have WAY too
                                   many hobbies. My favorite board games are <span
                                   className="font-semibold">chess</span> and <span
                                   className="font-semibold">Risk</span> (what can I say, I'm a sucker for a good
                                   strategy) and I love interacting with people, solving problems, being creative and
                                   learning new things.
                               </p>
                               {/*make random facts own section?*/}
                           </section>
                           <section className="intro">
                               <h2 className={"h2 font-PressStart2P"}>What I Love Building</h2>
                               <p>
                                   <strong className={"h5 text-n-4"}>Full Stack Web Apps</strong><br/>
                                   Intuitive, responsive web experiences using React, Next.js, Node.js, and more. <br/>
                                   <br/>

                                   <strong className={"h5 text-n-4"}>Games</strong><br/>
                                   Interactive environments and gameplay systems with Unreal Engine, Unity, C# and
                                   C++.<br/>
                                   <br/>
                                   <strong className={"h5 text-n-4"}>AI + Data Augmentation</strong><br/>
                                   Experimenting with AI tools to push what's possible in both web and game development.
                               </p>
                           </section>
                           <section className="intro">
                               <h2 className={"h2 font-PressStart2P"}>Why I Build</h2>
                               <p>
                                   I'm passionate about creating experiences that feel immersive, seamless, and just
                                   plain fun — whether it's a web app that makes life easier or a game world that pulls
                                   you in. <br/>
                                   <br/>
                                   I build because I love solving problems.<br/>
                                   I build because I love that feeling when everything finally clicks.<br/>
                                   I build because there's always something new to learn — and I'm endlessly
                                   curious.<br/>
                                   <br/>
                                   Every project is a chance to learn something new, solve interesting problems, and
                                   build something that didn't exist before. That's what keeps me coming back.

                               </p>
                           </section>


                           <section className="experience">
                               <h2 className={"h2 font-PressStart2P"}>Experience</h2>

                               <div className={"text-left"}>
                                   <h3 className={"h4 text-n-2"}>Game Integration Intern</h3>
                                   <p><strong className={"text-n-4"}>Game Play Network</strong> — April 2024 - Present |
                                       Remote</p>
                                   <ul className={"list-disc list-inside"}>
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
                                   <ul className={"list-disc list-inside"}>
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
                                       Hybrid | Reno, NV</p>
                                   <ul className={"list-disc list-inside"}>
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
                               <h2 className={"h2 font-PressStart2P"}>Technical Skills</h2>
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
                               <h2 className={"h2 font-PressStart2P"}>Education</h2>
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
                                   University of Nevada, Reno | 2016 - 2019
                                   <br/>
                                   <strong>Relevant Coursework:</strong> Calculus, Statistics, Physics, Intro to CS,
                                   Business Management
                               </p>
                           </section>

                           <section className="contact">
                               <h2 className={"h2 font-PressStart2P"}>Let's Build Something Awesome</h2>
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
               <Footer/>
           </div>

        </>
    )
        ;
}