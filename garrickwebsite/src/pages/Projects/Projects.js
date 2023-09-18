import React from "react";
import './Projects.css';
import colorbash from './colorbash.png';
import growtential from './growtential.png';
import sketch from './sketch.png';
import operationillumission from './operationillumussion.png';
import roselabyrinth from './roselabyrinth.png';
import blade from './blade.png';
import trongame from './trongame.png';
import gamereviews from './gamereviews.png';

function Projects() {
    return (
        <projects className="projects">
            <div className="title"><h1>Projects</h1></div>
            <div className="titledescription"><p>Here are some projects that I worked on! :D</p></div>
            <div className="flexbox">
                <div className="projectlist">
                    <div className="projectbox">
                        <div className="projecttitle">Sketch</div>
                        <img src={sketch} alt=''/>
                        <div className="projectdescription">
                        In a team, we developed a Unity-based 2D platformer 
                        where players draw shapes as weapons and tools. Players 
                        combat bosses and design levels using these abilities. 
                        Using C#, we crafted clean, adaptable code with four unique 
                        enemy AIs, custom animations, and mechanics. Advanced data structures 
                        support user customization.
                        </div>
                        <div className="pillflexbox">
                            <div className="pill">View Project</div>
                            <div className="pill">Play Game</div>
                        </div>
                    </div>
                    <div className="projectbox">
                        <div className="projecttitle">GameReviews</div>
                    </div>
                    <div className="projectbox">
                        <div className="projecttitle">TRON Game</div>
                        <img src={trongame} alt=''/>
                        <div className="projectdescription">
                        I developed a TRON game using an Arduino microcontroller paired 
                        with a Nokia LCD display. The game supports two players, with input 
                        sourced from SNES controllers. Through custom libraries and C++ programming, 
                        I executed the game logic and managed the hardware components. 
                        </div>
                    </div>
                    <div className="projecttitle">Blade</div>
                    <div className="projectbox combined">
                        <div className="projecttitle">Blade</div>
                        <div className="projectflexbox">
                            <img src={blade} alt=''/>
                            <div className="projectdescription">Blade is a 2D platformer that emphasizes 
                            intricate parrying combat combined with immersive overworld exploration. As 
                            the lead for this project, I orchestrated its development, seamlessly coordinating 
                            with cross-functional teams from programming, writing, to art. My role was 
                            paramount during the game's conceptual phase, where I established the guiding vision 
                            and core design principles. My hands-on involvement extended to the programming, 
                            where I ensured the inclusion of innovative mechanics and a fluid gameplay experience 
                            across different platforms. Furthermore, I was instrumental in resource management 
                            and scheduling, ensuring we efficiently allocated our assets and consistently hit 
                            our milestones.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hackathontitle"><h1>Hackathons</h1></div>
            <div className="hackathonflexbox">
                <div className="hackathonlist">
                    <div className="hackathon">
                        <div className="hackathonname">ColorBash</div>
                        <div className="hackathonimage"><img src={colorbash} alt=''/></div>
                    </div>
                    <div className="hackathon">
                        <div className="hackathonname">Grow-Tential</div>
                        <div className="hackathonimage"><img src={growtential} alt=''/></div>
                    </div>
                    <div className="hackathon">
                        <div className="hackathonname">Operation:Illumission</div>
                        <div className="hackathonimage"><img src={operationillumission} alt=''/></div>
                    </div>
                    <div className="hackathon">
                        <div className="hackathonname">Rose of the Labyrinth</div>
                        <div className="hackathonimage"><img src={roselabyrinth} alt=''/></div>
                    </div>
                </div>
            </div>
        </projects>
    //    <time className="timeline">
    //         <div className="title">
    //             <h1>Projects</h1>
    //         </div>
    //         <div className="intro">
    //             <div class="line"></div>
    //             <p>Projects that I worked on :D</p>
    //         </div>
    //         <div className="project">
    //             <div class="top">
    //                 <div class="date">January 2022</div>
    //                 <div class="name">Color Bash</div>
    //             </div>
    //             <div class="info">
    //                 <img src={colorbash} alt=''/>
    //                 <div class="description">Color Bash is a color matching endless runner 
    //                 where the goal is to either match the color 
    //                 of the square or not match the color of the triangle.
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="project">
    //             <div class="top">
    //                 <div class="date">April 2022</div>
    //                 <div class="name">Grow-Tential</div>
    //             </div>
    //             <div class="info">
    //                 <img src={growtential} alt=''/>
    //                 <div class="description">Worked on was ball collision mechanics
    //                 Integrated particle effects that trigger on collisions, creating an 
    //                 immersive gaming environment. Added a dynamic difficulty curve, where 
    //                 the number of colors in the game increases as players accumulate more 
    //                 points, providing an evolving challenge that keeps players engaged.
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="project">
    //             <div class="top">
    //                 <div class="date">Sep. 2021 - June 2022</div>
    //                 <div class="name">Sketch</div>
    //             </div>
    //             <div class="info">
    //                 <img src={sketch} alt=''/>
    //                 <div class="description">Developed the gameplay and mechanics with a team of developers in Unity using C#. 
    //                 Utilized object-oriented programming to write clean and extensible code
    //                 Produced 4 unique enemy AI each with custom animations and mechanics. 
    //                 Explored advanced data structures to allow for custom inputs by the user
    //                 Identified and resolved technical issues through an agile-driven development process
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="project">
    //             <div class="top">
    //                 <div class="date">June 2022</div>
    //                 <div class="name">Operation:Illumission</div>
    //             </div>
    //             <div class="info">
    //                 <img src={operationillumission} alt=''/>
    //                 <div class="description">Operation: Illumission is a game that stacks your 
    //                 skills at multitasking by allowing the player to control 3 solar panel towers.
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="project">
    //             <div class="top">
    //                 <div class="date">January 2023</div>
    //                 <div class="name">Rose of the Labyrinth</div>
    //             </div>
    //             <div class="info">
    //                 <img src={roselabyrinth} alt=''/>
    //                 <div class="description">Da Bowen Game DUN DUN DUN
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="project">
    //             <div class="top">
    //                 <div class="date">February 2023 - Present</div>
    //                 <div class="name">Blade</div>
    //             </div>
    //             <div class="info">
    //                 <img src={blade} alt=''/>
    //                 <div class="description">IN THE WORKSSSS!
    //                 </div>
    //             </div>
    //         </div>
    //    </time>
    )
}

export default Projects;