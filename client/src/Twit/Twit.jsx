import React, { Component } from 'react';
//import { Grid, Row, Col } from 'react-bootstrap';
//import Grid from "react-bootstrap";
//import asset from '../Assets/tester.jpg'
import { Container,Row, Col } from 'react-bootstrap';
import axios from 'axios';
import qs from 'query-string'
type State = {
    Fromfbx:JSON
};

class Twit extends Component {


    constructor(props) {

        super(props);
        this.state = {
            //     FB:JSON,
            title: '',
            codeResponse: ''
        };
        console.log("props", props);
        let Fromfb = props.thing;
        console.log("xxxxxxxxxxxxxxxxxxu", props.thing);
        console.log("xxxxxxxxxxxxxxxxxx", Fromfb);
        this.setState({Fromfbx: this.Fromfb});
        //   console.log("oooooooooooooooo",this.state.Fromfbx);
        this.handleClick = this.handleClick.bind(this)

    }
        componentDidMount() {
            var self = this;
            //  console.log("sssssssssssssst",this.props.thing);
            //  console.log("ssssssssssssss",this.state.Fromfbx);
            //        this.state.Fromfb.api('/417230442252839/feed?fields=full_picture,description,created_time,comments{message},caption,message&limit=15', function(response){


        }


        handleClick() {



            //axios.get('/api/cars')
            axios.get('/api/twit/getname')
                .then( response =>{console.log("xxxxxxxxxxxxxxxxxxxxxtwit",response.data)
                    this.buildTwitFeed(response.data)
                })
                .catch((err) => {console.log("err",err)})
            ;


            console.log("yepeeeee",this.state.title);
            console.log("yepeeeeee",this.state.codeResponse);
        }

/*
      axios.get('/api/insta/getname/getname')
  .then( response =>{console.log("xxxxxxxxxxxxxxxxxxxxxt",response.data)
   //   this.buildPicFeed(response.data)
  })
              .catch((err) => {console.log("err",err)});


        console.log("yepeeeee",this.state.title);
        console.log("yepeeeeee",this.state.codeResponse);

*/

    buildTwitFeed(feed) {
        console.log("insideObj", feed);
        //let tweets = data.statuses;
        let tweets = feed.statuses;

        let output = '<h3>Latest Tweets</h3>';
        // for(let i in feed.data){
        for (let i in tweets) {
            // if(feed.data[i].images)
            {
                console.log("inloop");
                output += `
                     <div class="well">
                                 hi ye twit not twitter
                  ${tweets[i].id_str}
                  <span></span>
                 ${tweets[i].text}
                  <span></span>
                  
                   
                 </div>
                    `;
            }
            this.setState({

//                Fromfb: feed.data,

            });
            document.getElementById('twitfeed').innerHTML = output;
        }


    }


        render() {


            return (
                <div>
                    geewhiz geewhiz geewhiz geewhiz  geewhiz geewhiz geewhiz geewhiz geewhiz geewhiz geewhiz geewhiz geewhiz geewhiz geewhiz geewhiz



                    <a href="#" onClick={this.handleClick}>Twit </a> <br></br>




                    <div> {this.state.title} </div>

                    <div id="twitfeed"></div>





                </div>
            );
        }

    }

    export {Twit};
