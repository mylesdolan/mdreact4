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

class Insta extends Component {


    constructor(props) {

        super(props);
        this.state = {
            //     FB:JSON,
            title:'',
            codeResponse:''
        };
        console.log("props",props);
        let Fromfb=props.thing;
        console.log("xxxxxxxxxxxxxxxxxxu",props.thing);
        console.log("xxxxxxxxxxxxxxxxxx",Fromfb);
        this.setState({Fromfbx:this.Fromfb});
        //   console.log("oooooooooooooooo",this.state.Fromfbx);
        this.handleClick = this.handleClick.bind(this)


        componentDidMount() {
            var self = this;
            //  console.log("sssssssssssssst",this.props.thing);
            //  console.log("ssssssssssssss",this.state.Fromfbx);
            //        this.state.Fromfb.api('/417230442252839/feed?fields=full_picture,description,created_time,comments{message},caption,message&limit=15', function(response){


        }


        handleClick() {



            //axios.get('/api/cars')
            axios.get('/api/twit/getname/getname')
                .then( response =>{console.log("xxxxxxxxxxxxxxxxxxxxxtwit",response.data)});


            console.log("yepeeeee",this.state.title);
            console.log("yepeeeeee",this.state.codeResponse);
        }




        render() {


            return (
                <div>


                    <a href="#" onClick={this.handleClick}>Load user into mem Click2 Thats what you think </a> <br></br>



                    hello   hello   hello   hello   hello   hello   hello   hello
                    helloY


                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange.bind(this)}/>

                    <div> {this.state.title} </div>

                    <div id="picfeed"></div>

                    1) create user
                    2) load user in mem var
                    3) go on react link.
                    4) Hit back button enter user in field then login... 2 and 3 to be combined redirecting back to that 4 can be performed.




                </div>
            );
        }

    }

    export {Twit};
