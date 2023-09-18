import React from "react";
import Navbar from "../components/Navbar";
import Introduction from "../Introduction/Introduction";
import Workexperience from "../Workexperience/Workexperience";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

function Home() {
    return (
        <div className="home">
            <Navbar />
            <div className="content">
                <div className="introduction" id="introduction">
                    <Introduction />
                </div>
                <div className="workexperience" id="workexperience">
                    <Workexperience />
                </div>
                <div className="experience" id="experience">
                    <Education />
                </div>
                <div className="projects" id="projects">
                    <Projects />
                </div>
                <div className="contact" id="contact">
                    <Contact />
                </div>
            </div>
        </div>
    )
}

export default Home;