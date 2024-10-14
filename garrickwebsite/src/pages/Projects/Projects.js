import React from "react";
import { Link } from 'react-router-dom';
import './Projects.css';
import colorbash from './colorbash.png';
import growtential from './growtential.png';
import sketch from './sketch.png';
import operationillumission from './operationillumussion.png';
import roselabyrinth from './roselabyrinth.png';
import blade from './blade.png';
import trongame from './trongame.png';
import gamereviews from './gamereviews.png';
//import personalwebsite from './personalwebsite.png';

function Projects() {
    return (
        <projects className="projects">
            <div className="title"><h1>Projects</h1></div>
            <div className="titledescription"><p>Here are some projects that I worked on! :D</p></div>
            <div className="flexbox">
                <div className="projectlist">
                    {/* <div className="projectbox">
                        <div className="projecttitle">Personal Website</div>
                        <img src={personalwebsite} alt=''/>
                        <div className="projectdescription">
                        A personal website that I developed and designed with the help of my sister
                        on the designing. It was built using React, HTML, and CSS. I implemented a responsive 
                        design ensuring compatibility across various devices. Integrated tools like 
                        google analytics to monitor user behavior and website traffic.
                        </div>
                        <div className="pillflexbox">
                            <a href="https://github.com/GarrickC23/Garrick-Website" className="pill" target="_blank">View Project</a>
                        </div>
                    </div> */}
                    <div className="projectbox">
                        <Link to="/blade" className="projectlink">
                        <div className="projecttitle">Blade</div>
                        <div className="projectrole">Combat Designer / Gameplay Scripter</div>
                        <img src={blade} alt=''/>
                        <div className="pillflexbox">
                            <a href="https://github.com/GarrickC23/Blade" className="pill" target="__blank">View Project</a>
                        </div>
                        </Link>
                    </div>
                    <div className="projectbox">
                        <div className="projecttitle">Blood and Soul</div>
                        <div className="projectrole">Game Designer / Software Engineer</div>
                        <img src={gamereviews} alt=''/>
                        <div className="pillflexbox">
                            <a href="https://github.com/GarrickC23/mywasseylist" className="pill" target="__blank">View Project</a>
                        </div>
                    </div>
                    {/* <div className="projecttitle">Blade</div> */}
                </div>
            </div>
            <div className="flexboxtwo">
                <div className="projectlisttwo">
                    <div className="projectbox combined">
                        <div className="projecttitle">Sketch</div>
                        <img src={sketch} alt=''/>
                        <div className="pillflexbox">
                            <a href="https://github.com/GarrickC23/Sketch" className="pill" target="__blank">View Project</a>
                            <a href="https://github.com/GarrickC23/Garrick-Website" className="pill" target="__blank">Play Game</a>
                        </div>
                    </div>
                    <div className="projectbox combined">
                        <div className="projecttitle">TRON Game</div>
                        <img src={trongame} alt=''/>
                        <div className="pillflexbox">
                            <a href="https://github.com/GarrickC23/Garrick-Website" className="pill" target="__blank">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hackathontitle"><h1>Hackathons</h1></div>
            <div className="hackathonflexbox">
                <div className="hackathonlist">
                    <div className="hackathon">
                        <div className="hackathonname">ColorBash</div>
                        <div className="hackathonimage">
                            <img src={colorbash} alt=''/>
                            <div className="hover-options">
                                <a href="https://github.com/GarrickC23/ColorBash" className="pill" target="__blank">View Project</a>
                                <a href="https://garrickchiu.itch.io/colorbash" className="pill" target="__blank">Play Game</a>
                            </div>
                        </div>
                    </div>
                    <div className="hackathon">
                        <div className="hackathonname">Grow-Tential</div>
                        <div className="hackathonimage">
                            <img src={growtential} alt=''/>
                            <div className="hover-options">
                                <a href="https://github.com/GarrickC23/Grow-Your-Potential" className="pill" target="_blank">View Project</a>
                                <a href="https://myong.itch.io/grow-tential" className="pill" target="_blank">Play Game</a>
                            </div>
                        </div>
                    </div>
                    <div className="hackathon">
                        <div className="hackathonname">Operation:Illumission</div>
                        <div className="hackathonimage">
                            <img src={operationillumission} alt=''/>
                            <div className="hover-options">
                                <a href="https://github.com/myong003/CutieHack2022" className="pill" target="_blank">View Project</a>
                                <a href="https://github.com/GarrickC23/Garrick-Website" className="pill" target="_blank">Play Game</a>
                            </div>
                        </div>
                    </div>
                    <div className="hackathon">
                        <div className="hackathonname">Rose of the Labyrinth</div>
                        <div className="hackathonimage">
                            <img src={roselabyrinth} alt=''/>
                            <div className="hover-options">
                                <a href="https://github.com/myong003/RoseHack2023" className="pill" target="_blank">View Project</a>
                                <a href="https://garrickchiu.itch.io/rose-of-the-labyrinth" className="pill" target="_blank">Play Game</a>
                            </div>
                        </div>
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