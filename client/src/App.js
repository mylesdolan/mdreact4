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
import reducers from './reducers';
import TweetEmbed from './Components/TweetEmbed'
import TwitListRedux from './Components/TwitListRedux';
import twitembedder from './Components/PointsToTwitEmbedCont';
import harvupper from './Harvestor/harvupper';
import Iframe from 'react-iframe'

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
            <Switch>
        <Route path="/Twitter" component={Twitter} />
                {/*    <Route path="/TwitContainer" component={TwitContainer} />*/}
            <Route path="/twe/:id" exact component={twitembedder}/>
                <Route path="/tweetemb/:id" exact component={TweetEmbed}/>
                <Route path="/tlr" exact component={TwitListRedux}/>
                {/*       <Route path="/tlr" exact component={twitlistr}/>*/}
            </Switch>

             <Route exact path="/h2" component={harvupper}/>
            {/*  <TwitEmbedContainer/>*/}
        <Upload />

               <TwitContainer />

            {/*    <twitlistr/>*/}
        <Fb/>
        <Insta/>
            {/*     <TwitListRedux />*/}
            {/*   <TwitContainer/>*/}

            {/*<Twit/>*/}
    </div>
    </Router>
        </Provider>
    );
  }
}

export default App;
