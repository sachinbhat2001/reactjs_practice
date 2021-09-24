import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import Person from './Person/Person.js';
class App extends Component {
  render(){

  
    return (
       <div className="App">
        <h1>Jai Shree Ram</h1>
        <p> hara hara mahadev</p>
        <Person></Person>
      </div>
     
      ); 
  
//return(a);

        }
}    

export default App;
