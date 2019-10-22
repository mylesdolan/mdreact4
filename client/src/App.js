import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import {Fb} from './FaceBook/fb';
import {Insta} from './Insta/Insta';
import {Twit} from './Twit/Twit';
import {Twitter} from './Twit/Twitter';
import Upload from './dropzone/Upload'
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
        <Router>
        <div className="App">
        <Route path="/Twitter" component={Twitter} />



        <Upload />




        <Fb/>
        <Insta/>
<Twit/>
    </div>
    </Router>

    );
  }
}

export default App;
