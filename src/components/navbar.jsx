import { Link } from 'react-router-dom';
import '../css/navbar.css';
import {useState} from "react";

export default function Navbar(){
    const [isMobile, setIsMobile] = useState(false);
    const toggleMenu = () => {
        setIsMobile(!isMobile);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <h2>Sabrina Jackson</h2>
            </div>
            <ul className={`nav-links ${isMobile ? 'active' : ''}`}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
}
