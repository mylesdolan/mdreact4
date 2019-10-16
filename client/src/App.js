import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import {Fb} from './FaceBook/fb';
import {Insta} from './Insta/Insta';
import {Twit} from './Twit/Twit';
class App extends Component {

  componentDidMount(){
    axios.get('/api/users')
    .then( response =>{
      console.log(response.data)
    })

    axios.get('/api/cars')
    .then( response =>{
      console.log(response.data)
    })


  }


  render() {
    return (
      <div className="App">
        <Fb/>
        <Insta/>
<Twit/>

        </div>
    );
  }
}

export default App;
