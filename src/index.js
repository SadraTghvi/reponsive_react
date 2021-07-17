import React,{useState,useEffect} from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from "./components/Pages/Home";

import './style.css';


function Main(){
    return(
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                </Switch>
            </Router>
        </>
    )
}

ReactDOM.render(
    <Main />,
  document.getElementById('root')
);
