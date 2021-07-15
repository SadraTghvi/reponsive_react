import React,{useState,useEffect} from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

import './style.css';


function Main(){
    return(
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact></Route>
                </Switch>
            </Router>
        </>
    )
}

ReactDOM.render(
    <Main />,
  document.getElementById('root')
);
