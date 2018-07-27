import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';
import Nav from './components/Nav';

// your code goes here
class Home extends Component{
  render(){
    return(
      <BrowserRouter>
<div>
    <Route path = '/' component = {Nav} />
    <Route path = '/Sleepy' component = {Sleepy} />
    <Route path = '/Happy' component = {Happy} />
    <Route path = '/Guilty' component = {Guilty} />
</div>
</BrowserRouter>)
  }
}

ReactDOM.render( <Home />, document.getElementById('root') );
