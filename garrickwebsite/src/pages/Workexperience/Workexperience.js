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
                            <p>Served as a key point of contact for students, instructors, and internal stuff</p>
                            <p>Addressed account-related issues and software bug rectifications</p>
                            <p>Reduced company expenditures by 10% through efficient resolution of over 6,000 tickets</p>
                            <p>Audited the zyBooks curriculum to identify and debug erroneous code, enhancing user experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </workexperience>
    )
}

export default Workexperience;