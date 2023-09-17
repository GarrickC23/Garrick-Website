import React from "react";
import Navbar from "../components/Navbar";
import Introduction from "../Introduction/Introduction";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";

function Home() {
    return (
        <div className="home">
            <Navbar />
            <div className="content">
                <div className="introduction">
                    <Introduction />
                </div>
                <div className="experience">
                    <Experience />
                </div>
                <div className="projects">
                    <Projects />
                </div>
            </div>
        </div>
    )
}

export default Home;