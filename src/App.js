//import logo from './logo.svg';
import User from './component/User';
import React, { Component } from 'react';
import Navbar from './component/Navbar';
import Users from './component/Users';
import AddUser from './component/AddUser';



import './App.css';

class App extends Component {

  render () {

  return (

    <div className='container'>
      
      <Navbar title = "User App"/>
      <hr/>

      <AddUser/>

      <Users/>
    </div>
    
    );
  }
}

export default App;
