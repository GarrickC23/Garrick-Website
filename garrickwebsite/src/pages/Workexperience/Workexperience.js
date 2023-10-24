import React from "react";
import "./Workexperience.css";

function Workexperience() {
    return (
        <workexperience className="workexperience">
            <div className="title">
                <h1>Work Experience</h1>
            </div>
            <div className="flexbox">
                <div classsName="worklist">
                    <div className="workbox">
                        <div className="workname"><h1>zyBooks</h1></div>
                        <div className="workdescription">
                            <h2>Technical Support | May 2022 - Present</h2>
                            <p>Led the development of Blade, a 2D platformer featuring parrying combat and exploration</p>
                            <p>Listened to and empathized with complaining customers, finding resolution to their problems</p>
                            <p>Created solutions to save the company in operational costs by resolving 6,500+ tickets</p>
                        </div>
                    </div>
                </div>
            </div>
        </workexperience>
    )
}

export default Workexperience;