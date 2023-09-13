import React from "react";
import './Timeline.css'

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
            </div>
       </time>
    )
}

export default Timeline;