//import { Link } from 'react-router-dom'
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

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
                {/* <div><DiGithubBadge /></div> */}
                <a href="/">LinkedIn</a>
                <a href="/">GitHub</a>
                <a href="/">Email</a>
                <a href="/">Itch.io</a>
            </div>
        </nav>
    )
}

export default Navbar