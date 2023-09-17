import React from "react";
import './Experience.css';

function Experience() {
    return (
        <experience className="experience">
            <div className="title">
                <h1>Education</h1>
            </div>
            <div className="university">
                <h1>University of California Riverside</h1>
                <p>Bachelors Degree    |    September 2020 - Present</p>
                <p>Major: Computer Science</p>
                <p>Minor: Mathematics</p>
                <p>Workshop Lead for Gamespawn teaching club members Unity and C#</p>
                <p>Relevant Coursework:  Intermediate Data Structures and Algorithms, Discrete Structures, 
                    Applied Linear Algebra, Software Construction, Logic Design, Embedded Systems,
                    Compiler Design, Operating Systesms</p>
            </div>
            <div className="highschool">
                <h1>Arcadia High School</h1>
                <p>High School Degree    |    September 2016 - June 2020</p>
            </div>
        </experience>
    )
}

export default Experience;