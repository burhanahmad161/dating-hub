import React from "react";
import { NavLink } from 'react-router-dom';
import './navbar.css';

export default function NavBar1() {

    return (
        <header>
            {/* <img src="love.png" width={100} className="floating-heart-left"/>
            <img src="love.png" style={{marginLeft: '60px',marginTop: '50px'}} width={200} className="floating-heart-left"/>
            <img src="love.png" style={{marginLeft: '150px', marginTop:'170px'}} width={300} className="floating-heart-left"/>
            <img src="love.png" width={100} className="floating-heart-right"/>
            <img src="love.png" style={{marginRight: '50px', marginTop: '50px'}} width={200} className="floating-heart-right"/>
            <img src="love.png" style={{marginRight: '130px', marginTop:'170px'}} width={300} className="floating-heart-right"/> */}
           
            <div className="topnav" id="myTopnav">
                    <p><NavLink exact to="/" activeClassName="active"><p>Home</p></NavLink></p>
                    <p><NavLink to="/about" activeClassName="active"><p>About</p></NavLink></p>
                    <p><NavLink to="/register" activeClassName="active"><p>Find Your Date</p></NavLink></p>
                    <p><NavLink to="/feedback" activeClassName="active"><p>Feedback</p></NavLink></p>
            </div>
        </header>
    )
}
