import React from "react";
import Navbar from "../components/Navbar";
import Introduction from "../Introduction/Introduction";

function Home() {
    return (
        <div className="home">
            <Navbar />
            <div className="content">
                <div className="content-container">
                    <Introduction />
                </div>
            </div>
        </div>
    )
}

export default Home;