import React from "react";
import Navbar from "../components/Navbar";
import Introduction from "../Introduction/Introduction";
import Timeline from "../Timeline/Timeline";

function Home() {
    return (
        <div className="home">
            <Navbar />
            <div className="content">
                <div className="introduction">
                    <Introduction />
                </div>
                <div className="timeline">
                    <Timeline />
                </div>
            </div>
        </div>
    )
}

export default Home;