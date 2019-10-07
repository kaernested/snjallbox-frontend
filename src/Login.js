import React, { useState } from 'react';
import './App.css';
import './App.scss';
import firebase from './initFirebase';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Login = ({login}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signIn = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                console.log("logged in")
                if (user) {
                    login()
                    fetch('http://localhost:3001/users')
                        .then(r => r.json())
                        .then((res) => {
                            console.log(res);
                        })
                        .catch(err => console.log(err));
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    return (
        <div className="contentContainer">
            <div className="loginContainer">
                <img src="images/undraw_welcome_3gvl.svg" alt="welcome image"></img>
                <h1>Innskráning</h1>
                Notendanafn <input onChange={e => setEmail(e.target.value)}  name="email" placeholder="email"></input>
                Lykilorð   <Link to="/lostPw"><p>Gleymt lykilorð</p></Link>
                <input onChange={e => setPassword(e.target.value)}  name="password" type="password" placeholder="password"></input>
                <Link to="/signup"><p>Búa til aðgang</p></Link>
                <Link to="/home"><p>Skrá inn með Face ID</p></Link>
                <Link to="/home"><button onClick={signIn}  img="check.svg" className="loginBtn"></button></Link>
                
            </div>
        </div>
    );
}

export default Login;
