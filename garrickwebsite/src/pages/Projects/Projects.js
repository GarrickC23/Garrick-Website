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
            <div class="title">
                <h1>Projects</h1>
                <p>Here are some projects that I worked on! :D</p>
            </div>
            <div className="flexbox">
                <div className="projectlist">
                    <div class="projectbox">
                        <div class="projecttitle">Sketch</div>
                        <img src={sketch} alt=''/>
                        <div class="projectdescription">
                        In a team, we developed a Unity-based 2D platformer 
                        where players draw shapes as weapons and tools. Players 
                        combat bosses and design levels using these abilities. 
                        Using C#, we crafted clean, adaptable code with four unique 
                        enemy AIs, custom animations, and mechanics. Advanced data structures 
                        support user customization.
                        </div>
                    </div>
                    <div class="projectbox">
                        <div class="projecttitle">GameReviews</div>
                    </div>
                    <div class="projectbox">
                        <div class="projecttitle">TRON Game</div>
                        <img src={trongame} alt=''/>
                        <div class="trongame">
                        I developed a TRON game using an Arduino microcontroller paired 
                        with a Nokia LCD display. The game supports two players, with input 
                        sourced from SNES controllers. Through custom libraries and C++ programming, 
                        I executed the game logic and managed the hardware components. 
                        </div>
                    </div>
                    <div class="projectbox">
                        <div class="projecttitle">Blade</div>
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