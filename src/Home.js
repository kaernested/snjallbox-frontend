import React, {useState} from 'react';
import './App.css';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => {
    const packages = () => {
        fetch('http://localhost:3001/packages')
            .then(r => r.json())
            .then((res) => {
                console.log(res);
            })
        .catch(err => console.log(err));
        
    }

    return (
        <div className="contentContainer">
            <h1>Velkominn</h1>
            <div className="homeContainer">
                <p className="semiBold17">Þú átt engar virkar sendingar</p>
                <div className="packages" key={packages()}>
                </div>
                <img src="images/undraw_thoughts_e49y.svg" alt="welcome image"></img>
                <Link to="/newshipment"><button className="addShipmentBtn" img="plus.svg"></button></Link>

            </div>
        </div>
    );
}

export default Home;
