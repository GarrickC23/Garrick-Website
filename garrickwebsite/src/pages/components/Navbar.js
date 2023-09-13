import React from "react";
import "./Navbar.css";
import { DiGithubBadge } from "react-icons/di";
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
                <a href="/">Resume</a>
            </div>
            <div className="right">
                <a href="https://www.linkedin.com/in/garrick-chiu/" target="_blank"><AiFillLinkedin/></a>
                <a href="https://github.com/GarrickC23" target="_blank"><DiGithubBadge/></a>
                <a href="garrickchiu0723@gmail.com" target="_blank"><HiOutlineMail/></a>
                <a href="https://garrickchiu.itch.io/" target="_blank"><FaItchIo/></a>
            </div>
        </nav>
    )
}

export default Navbar