import React, { useState } from 'react';
import './App.css';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const NewShipment= () => {

    const [inputData, setInputData] = useState({name: "", email: "", phone: "", numberOfPackages: ""}); 
    const handleChange = (e) =>{
        setInputData({...inputData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=> {
        e.preventDefault()
        console.log(inputData)
        fetch('http://localhost:3001/post-order', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(inputData)
        })
    }
    return (
        <div className="contentContainer">
            <h1>Ný sending</h1>
            <div className="newShipmentContainer">
                <form onSubmit={handleSubmit}>
                    <label>
                        Nafn:<input type="text" name="name" value={inputData.name} onChange={handleChange}></input><br/>                   
                    </label>
                    
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" value={inputData.email} onChange={handleChange}></input><br/>
                    
                    <label htmlFor="number">Phone:</label>
                    <input type="text" name="phone" id="number" value={inputData.number} onChange={handleChange}></input><br/>

                    <label htmlFor="numberOfPackages">Fjöldi pakka</label>
                    <input type="number" name="numberOfPackages" id="numberOfPackages"  value={inputData.numberOfPackages} onChange={handleChange}></input><br/>
                    
                    <label htmlFor="contentDescription">Lýsing á innihaldi</label>
                    <input type="text" name="contentDescription" id="contentDescription"  value={inputData.contentDescription} onChange={handleChange}></input><br/>

                    <input type="submit" value="Senda"/>
                    <Link to="/"><button className="backBtn"></button></Link>
                    <Link to="/"><button className="nextBtn"></button></Link>

                </form>
            </div>
        </div>
    );
}

export default NewShipment;
