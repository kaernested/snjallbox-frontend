import React, { useState } from 'react';
import Login from './Login';
import Home from './Home';
import Account from './Account';
import Shipments from './Shipments';
import NewShipment from './NewShipment';
import SignUp from './SignUp';
import LostPw from './LostPw';
import NavBar from './navBar';
import './App.css';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
    
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = ()=>{

    setIsLoggedIn(true);
  }
  const logout = ()=>{
    setIsLoggedIn(false);
  }
  return (
    <Router>
    <div>
      <NavBar isLoggedIn={isLoggedIn}></NavBar>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>

        <Route path="/lostpw">
          <LostPw />
        </Route>

        <Route path="/signup">
          <SignUp />
        </Route>

        <Route path="/newshipment">
          <NewShipment />
        </Route>

        <Route path="/shipments">
          <Shipments />
        </Route>

        <Route path="/account">
          <Account />
        </Route>

        <Route path="/home">
          <Home />
        </Route>
        
        <Route path="/">
          <Login login={login} logout={logout} />
        </Route>
        
      </Switch>
    </div>
  </Router>
  );
}

export default App;
