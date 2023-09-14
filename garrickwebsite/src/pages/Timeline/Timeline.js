import React from "react";
import './Timeline.css';
import colorbash from './colorbash.png';
import growtential from './growtential.png';
import sketch from './sketch.png';
import operationillumission from './operationillumussion.png';
import roselabyrinth from './roselabyrinth.png';
import blade from './blade.png';

function Timeline() {
    return (
       <time className="timeline">
            <div className="title">
                <h1>Project Timeline</h1>
            </div>
            <div className="intro">
                <div class="line"></div>
                <p>Intro</p>
                <p>Here is the timeline of all my projects</p>
            </div>
            <div className="project">
                <div class="top">
                    <div class="date">January 2022</div>
                    <div class="name">Color Bash</div>
                </div>
                <div class="info">
                    <img src={colorbash} alt=''/>
                    <div class="description">Color Bash is a color matching endless runner 
                    where the goal is to either match the color 
                    of the square or not match the color of the triangle.
                    </div>
                </div>
            </div>
            <div className="project">
                <div class="top">
                    <div class="date">April 2022</div>
                    <div class="name">Grow-Tential</div>
                </div>
                <div class="info">
                    <img src={growtential} alt=''/>
                    <div class="description">Worked on was ball collision mechanics
                    Integrated particle effects that trigger on collisions, creating an 
                    immersive gaming environment. Added a dynamic difficulty curve, where 
                    the number of colors in the game increases as players accumulate more 
                    points, providing an evolving challenge that keeps players engaged.
                    </div>
                </div>
            </div>
            <div className="project">
                <div class="top">
                    <div class="date">Sep. 2021 - June 2022</div>
                    <div class="name">Sketch</div>
                </div>
                <div class="info">
                    <img src={sketch} alt=''/>
                    <div class="description">Developed the gameplay and mechanics with a team of developers in Unity using C#. 
                    Utilized object-oriented programming to write clean and extensible code
                    Produced 4 unique enemy AI each with custom animations and mechanics. 
                    Explored advanced data structures to allow for custom inputs by the user
                    Identified and resolved technical issues through an agile-driven development process
                    </div>
                </div>
            </div>
            <div className="project">
                <div class="top">
                    <div class="date">June 2022</div>
                    <div class="name">Operation:Illumission</div>
                </div>
                <div class="info">
                    <img src={operationillumission} alt=''/>
                    <div class="description">Operation: Illumission is a game that stacks your 
                    skills at multitasking by allowing the player to control 3 solar panel towers.
                    </div>
                </div>
            </div>
            <div className="project">
                <div class="top">
                    <div class="date">January 2023</div>
                    <div class="name">Rose of the Labyrinth</div>
                </div>
                <div class="info">
                    <img src={roselabyrinth} alt=''/>
                    <div class="description">Da Bowen Game DUN DUN DUN
                    </div>
                </div>
            </div>
            <div className="project">
                <div class="top">
                    <div class="date">February 2023 - Present</div>
                    <div class="name">Blade</div>
                </div>
                <div class="info">
                    <img src={blade} alt=''/>
                    <div class="description">IN THE WORKSSSS!
                    </div>
                </div>
            </div>
       </time>
    )
}

export default Timeline;