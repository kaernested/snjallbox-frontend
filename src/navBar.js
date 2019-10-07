import React, { Component } from 'react';
import './App.css';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const NavBar = ({isLoggedIn}) => {
    return (
        isLoggedIn ?
        <div className="navContainer">
            <nav>
                <ul>
                    <li>
                        <Link to="/home" className="home"></Link>
                    </li>
                    <li>
                        <Link to="/shipments" className="shipment"></Link>
                    </li>
                    <li>
                        <Link to="/account" className="account"></Link>
                    </li>
                        
                </ul>
            </nav>
        </div>
        :""
    );
}
export default NavBar;

