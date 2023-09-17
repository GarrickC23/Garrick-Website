import React from "react";
import "./Introduction.css";
import garrickchiu from './garrickchiu.jpg';

function Introduction() {
    return (
        <div className="Introduction">
            <div class="profilepic">
                <img src={garrickchiu} alt=''/>
            </div>
            <div class ="about">
                <div class="name"><p>Garrick Chiu</p></div>
                <div class="description"><p>Aspiring Developer and Problem Solver 
                with a passion for creating impactful software and 
                creative content that inspires people</p></div>
            </div>
        </div>
    )
}

export default Introduction;