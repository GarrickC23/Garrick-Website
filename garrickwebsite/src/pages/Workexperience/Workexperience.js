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
                            <p>Coordinated with engineers to address platform issues and provide insights to the sales team on zyBooks functionalities, facilitating timely solutions and fostering cross-team collaboration</p>
                            <p>Assisted 5000+ students, 100+ instructors, and 20+ zyBooks staff on account issues and bug fixing</p>
                            <p>Cut company spending by ~10% by solving over 6500 tickets</p>
                            <p>Audited the zyBooks curriculum to identify and debug erroneous code, enhancing user experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </workexperience>
    )
}

export default Workexperience;