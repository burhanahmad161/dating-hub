import React from "react";
import { NavLink } from 'react-router-dom';
import './navbar.css';

export default function NavBar1() {

    return (
        <header>
            <img src="love.png" width={100} className="floating-heart-left"/>
            <img src="love.png" style={{marginLeft: '60px',marginTop: '50px'}} width={200} className="floating-heart-left"/>
            <img src="love.png" style={{marginLeft: '150px', marginTop:'170px'}} width={300} className="floating-heart-left"/>
            <img src="love.png" width={100} className="floating-heart-right"/>
            <img src="love.png" style={{marginRight: '50px', marginTop: '50px'}} width={200} className="floating-heart-right"/>
            <img src="love.png" style={{marginRight: '130px', marginTop:'170px'}} width={300} className="floating-heart-right"/>
           
            <nav className="nav">
                <ul className="nav-items">
                    <li><NavLink exact to="/" activeClassName="active"><p>Home</p></NavLink></li>
                    <li><NavLink to="/about" activeClassName="active"><p>About</p></NavLink></li>
                    <li><NavLink to="/alpha" activeClassName="active"><p>Find Your Date</p></NavLink></li>
                    <li><NavLink to="/feedback" activeClassName="active"><p>Feedback</p></NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
