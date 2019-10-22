import React, { Component } from 'react';
//import { Grid, Row, Col } from 'react-bootstrap';
//import Grid from "react-bootstrap";
//import asset from '../Assets/tester.jpg'
import { Container,Row, Col } from 'react-bootstrap';
import axios from 'axios';
import  './twitter.css';
import qs from 'query-string';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

type State = {
    Fromfbx:JSON
};

class Twitter extends Component {


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

    onDrag(event) {
        event.preventDefault();
        if (this.props.disabed) return;
       // dataTransfer.setState("text", event.target.id);
        dataTransfer.setState(title, event.target.id);

     //   this.setState({title: event.target.value})
    }

    onDrop(event) {
        event.preventDefault();
        let data = ev.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(data));
    }



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
                                 hi ye
                 ${tweets[i].id_str}
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
                geewhiz geewhiz geewhiz geewhiz  geewhiz geewhiz geewhiz geewhiz geewhiz geewhiz geewhiz geewhiz geewhiz geewhiz geewhiz geewhizy
                <div> {this.state.title} </div>
                <TwitterTweetEmbed
                    tweetId={'1186202088776200200'}
                />

                <a href="#" onClick={this.handleClick}>Twitter </a> <br></br>




                <div> {this.state.title}


                </div>

                <div id="twitfeed"></div>

                <p>Drag the W3Schools image into the rectangle:</p>

                <div className="div1" onDrop="drop(event)" onDragOver="allowDrop(event)"></div>
                <br>
                    <img id="drag1" src="img_logo.gif" draggable="true" onDragStart="drag(event)" width="336"
                         height="69">


            </div>
        );
    }

}

export {Twitter};
