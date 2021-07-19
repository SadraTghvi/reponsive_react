import React,{useState,useEffect} from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from "./components/Pages/Home";
import Services from './components/Pages/Services';
import SignUp from './components/Pages/SignUp';
import Pruducts from './components/Pages/Products';

import './style.css';


function Main(){
    return(
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/services" exact component={Services}></Route>
                    <Route path="/products" exact component={Pruducts}></Route>
                    <Route path="/sign-up" exact component={SignUp}></Route>
                </Switch>
            </Router>
        </>
    )
}

ReactDOM.render(
    <Main />,
  document.getElementById('root')
);
