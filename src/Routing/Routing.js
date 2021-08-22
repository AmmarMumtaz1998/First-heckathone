import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import LandingPage from '../Modules/LandingPage';
import Login from '../Modules/Login';
import SignUp from '../Modules/SignUp'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function Routing() {
  return (
    <>
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <LandingPage />
                </Route>
                <Route path='/login'>
                    <Login /> 
                </Route>
                <Route path='/signup'>
                    <SignUp /> 
                </Route>
            </Switch>
            <Footer />
        </Router>
    </>
  );
}

        