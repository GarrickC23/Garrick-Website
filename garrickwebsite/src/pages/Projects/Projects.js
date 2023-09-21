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
import personalwebsite from './personalwebsite.png';

function Projects() {
    return (
        <projects className="projects">
            <div className="title"><h1>Projects</h1></div>
            <div className="titledescription"><p>Here are some projects that I worked on! :D</p></div>
            <div className="flexbox">
                <div className="projectlist">
                    <div className="projectbox">
                        <div className="projecttitle">Personal Website</div>
                        <img src={personalwebsite} alt=''/>
                        <div className="projectdescription">
                        A personal website that I developed and designed with the help of my sister
                        on the designing. It was built using React, HTML, and CSS. I implemented a responsive 
                        design ensuring compatibility across various devices. Integrated tools like 
                        google analytics to monitor user behavior and website traffic.
                        </div>
                        <div className="pillflexbox">
                            <div className="pill">View Project</div>
                            <div className="pill">Play Game</div>
                        </div>
                    </div>
                    <div className="projectbox">
                        <div className="projecttitle">GameReviews</div>
                        <img src={gamereviews} alt=''/>
                        <div className="projectdescription">
                        Wesley Kam and I designed a website for consolidating game ratings using React.js, 
                        MongoDB, Node.js, and Express. We utilized Mongo Atlas and JWT for user authentication 
                        and efficient database handling, allowing users to interact with their game ratings 
                        and efficiently displaying data through Express Routing.
                        </div>
                        <div className="pillflexbox">
                            <div className="pill">View Project</div>
                        </div>
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
                        <div className="pillflexbox">
                            <div className="pill">View Project</div>
                        </div>
                    </div>
                    {/* <div className="projecttitle">Blade</div> */}
                </div>
            </div>
            <div className="flexboxtwo">
                <div className="projectlisttwo">
                    <div className="projectbox combined">
                        <div className="projecttitle">Blade</div>
                        <div className="projectboxtwo">
                            <div className="projectimg"><img src={blade} alt=''/></div>
                            <div className="projectdescription">Blade is a 2D platformer that brings together 
                            intricate parrying combat with an immersive overworld exploration experience. 
                            As the lead for this project, I played a pivotal role in its development. 
                            Collaborating closely with cross-functional teams from programming, 
                            writing, to art, I ensured we stayed true to our core vision and design principles. 
                            My hands-on approach in the programming phase enabled the game to feature innovative 
                            mechanics, ensuring a fluid gameplay experience across various platforms. 
                            Beyond this, I was deeply involved in resource management which made sure tasks
                            were done on time.</div>
                        </div>
                        <div className="pillflexbox">
                            <div className="pill">View Project</div>
                            <div className="pill">Play Game</div>
                        </div>
                    </div>
                    <div className="projectbox combined">
                        <div className="projecttitle">Sketch</div>
                        <div className="projectboxtwo">
                            <div className="projectimg"><img src={sketch} alt=''/></div>
                            <div className="projectdescription">In collaboration with a team, I helped develop a 
                            2D platformer in Unity where players control a character with the unique ability to 
                            draw shapes. These shapes serve dual purposes, acting as weapons and building tools. 
                            Players engage with various bosses and also have the opportunity to create their own 
                            levels using their abilities. Utilizing C# and object-oriented programming, 
                            we ensured clean and adaptable code. We introduced four distinct enemy AI types, 
                            each with custom animations and mechanics. Advanced data structures were explored 
                            to facilitate user customization.</div>
                        </div>
                        <div className="pillflexbox">
                            <div className="pill">View Project</div>
                            <div className="pill">Play Game</div>
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