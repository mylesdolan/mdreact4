import React, { Component } from 'react';
//import { Grid, Row, Col } from 'react-bootstrap';
//import Grid from "react-bootstrap";
//import asset from '../Assets/tester.jpg'
import { Container,Row, Col } from 'react-bootstrap';
import axios from 'axios';
import qs from 'query-string'
import logo from "./img_logo.gif";
import Grabid from  '../dropzone/Grabid';

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
        this.handleClick = this.handleClick.bind(this)  ;
        this.onDrag = this.onDrag.bind(this);
        this.allowDrop = this.allowDrop.bind(this);
        this.onDragEnter = this.onDragEnter.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDrop = this.onDrop.bind(this);




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
let tweetIdvar="drag2";
let draggablebool=true;
let anyoldthing=this.onDrag;
        let output = '<h3>Latest Tweets</h3>';
        // for(let i in feed.data){
        for (let i in tweets) {
            // if(feed.data[i].images)
            {
                console.log("inloop");
                output += `
                     <div class="well">
                     ${tweets[i].id_str}
                                 hi ye twit not twitter
          
                  
                     <div  id={tweetIdvar} draggable={draggablebool} onDragStart={anyoldthing}>${tweets[i].id_str}</div>
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


    onDragEnter(event)
    {
        event.preventDefault();
        console.log("so here");}

    onDragLeave(event) {
        console.log ("dragl");
        this.setState({ hightlight: false });
    }


    allowDrop(event) {
        event.preventDefault();
        console.log("allow drop");

    }
    onDragOver(event) {
        event.preventDefault();
        if (this.props.disabed) return;
        console.log("drafo");
        this.setState({ hightlight: true });
    }

    onDrag(event) {
        //event.preventDefault();
        console.log ("im here defo you drag");
        if (this.props.disabed) return;
        //dataTransfer.setState("text", event.target.id);

    let x= event.dataTransfer.setData("text", event.target.id);
        // event.dataTransfer.setState( {title:event.target.id});

        console.log ("im here defo you drag",x);
        //   this.setState({title: event.target.value})
    }

    onDrop(event) {
        console.log ("im here defo drop");
        event.preventDefault();
        let data = event.dataTransfer.getData("text");
        console.log ("im here defo drop",data);

        this.setState({twitID: data});

        console.log("after");
//        event.target.appendChild(document.getElementById(data));
    }




        render() {
console.log ("tid",this.state.twitID);
//console.log ("tid2",twitID);
console.log ("tid3",this.twitID);
            return (
                <div>
                    geewhiz geewhiz geewhiz geewhiz  geewhiz geewhiz geewhiz geewhiz geewhiz geewhiz geewhiz geewhiz geewhiz geewhiz geewhiz geewhiz
                    <Grabid TwitIdThing={this.state.twitID}/>


                    <a href="#" onClick={this.handleClick}>Twit </a> <br></br>




                    <div> {this.state.title} </div>

                    <div id="twitfeed"></div>


                    <div id="div1" onDrop={this.onDrop} onDragOver={this.allowDrop} onDragEnter={this.onDragEnter}
                         onDragOver={this.onDragOver}
                         onDragLeave={this.onDragLeave}
                         onDrop={this.onDrop}

                    >Hello2</div>

                    <div>
                        {/*<img id="drag1" src={logo} alt="logo" draggable="true" onDragStart="onDrag(event)" width="136" height="29"/>*/}
                        <img id="drag2" src={logo} alt="logo" draggable="true" onDragStart={this.onDrag} width="136" height="29"/>
                        {/* <img id="drag1" src={logo} alt="logo" draggable="true"  width="136" height="29"/>*/}
                    </div>


                </div>
            );
        }

    }

    export {Twit};
