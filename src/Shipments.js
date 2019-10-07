import React from 'react';
import './App.css';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Shipments= () => {
    return (
        <div className="contentContainer">
            <h1>Sendingar</h1>
            <div className="shipmentsContainer">
                <div className="shipmentTab">
                    <div className="allShipments">Allar</div>
                    <div className="activeShipments">Virkar</div>
                    <div className="inactiveShipments">Óvirkar</div>
                </div>
                <button className="sortBtn" >Flokkun</button>
            </div>
            <Link to="/newshipment"><button className="addShipmentBtn" img="plus.svg" ></button></Link>
        </div>
    );
}

export default Shipments;
