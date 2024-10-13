import React from "react";
import "./Introduction.css";
import garrickchiu from './garrickchiu.jpg';

function Introduction() {
    return (
        <div className="Introduction">
            <div className="profilepic">
                <img src={garrickchiu} alt=''/>
            </div>
            <div className ="about">
                <div className="name"><p>Garrick Chiu</p></div>
                <div className="description"><p>Game Designer and Developer 
                with a passion for creating impactful software and 
                creative content that inspires people</p></div>
                <div className="introductionbar">
                    <div className="introbarflex">
                        <div className="introcomponents"><a href="/GarrickResume.pdf" target="_blank" 
                        rel="noopener noreferrer">Resume</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction;