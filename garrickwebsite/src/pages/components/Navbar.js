import React from "react";
import "./Navbar.css";
import Scrolllink from './Scrolllink';
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FaItchIo } from "react-icons/fa6"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="left">
                <h1>Garrick Chiu</h1>
            </div>
            <div className="center">
                <Scrolllink label="Resume" targetId="resume" />
                <Scrolllink label="About" targetId="introduction" />
                <Scrolllink label="Work Experience" targetId="workexperience" />
                <Scrolllink label="Education" targetId="experience" />
                <Scrolllink label="Projects" targetId="projects" />
                <Scrolllink label="Contact" targetId="contact" />
            </div>
            <div className="right">
                <a href="https://www.linkedin.com/in/garrick-chiu/" target="_blank"><AiFillLinkedin/></a>
                <a href="https://github.com/GarrickC23" target="_blank"><AiFillGithub/></a>
                <a href="garrickchiu0723@gmail.com" target="_blank"><HiOutlineMail/></a>
                <a href="https://garrickchiu.itch.io/" target="_blank"><FaItchIo/></a>
            </div>
        </nav>
    )
}

export default Navbar