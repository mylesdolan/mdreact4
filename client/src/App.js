import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import {Fb} from './FaceBook/fb';
import {Insta} from './Insta/Insta';
import {Twit} from './Twit/Twit';
import {Twitter} from './Twit/Twitter';
import TwitContainer from './containers/twit_container.js';
import TwitEmbedContainer from './containers/twitembedcontainer.js';
import Upload from './dropzone/Upload'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './reducers'


const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

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
        <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
        <div className="App">
        <Route path="/Twitter" component={Twitter} />
            <Route path="/TwitContainer" component={TwitContainer} />

<TwitEmbedContainer/>
        <Upload />

            {/*    <TwitContainer /> */}


        <Fb/>
        <Insta/>

<Twit/>
    </div>
    </Router>
        </Provider>
    );
  }
}

export default App;
