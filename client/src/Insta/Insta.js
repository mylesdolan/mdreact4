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
        this.handleClick = this.handleClick.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        // this.Test2 = this.Test2.bind(this);
        //  this.state = {};


    }



    componentDidMount() {
        var self = this;
        //  console.log("sssssssssssssst",this.props.thing);
        //  console.log("ssssssssssssss",this.state.Fromfbx);
        //        this.state.Fromfb.api('/417230442252839/feed?fields=full_picture,description,created_time,comments{message},caption,message&limit=15', function(response){


    }

    handleClick3() {
        const requestBody2 = {
            weeName: this.state.title
        };

//let namevar='Helder';
        let namevar=this.state.title;


        //   `${__dirname}/querystring.html`

        //   axios.get('/api/cars')
        //axios.get('/api/insta/helder')
        axios.get(`/api/insta/${namevar}`)

            .then( response =>{
                console.log("xxxxxxxxxxxxxxxxxxxxxt",response.data);
                this.setState({codeResponse: response.data});
            })


    }


    handleClick2() {



        //axios.get('/api/cars')
          axios.get('/api/insta/getname/getname')
  .then( response =>{console.log("xxxxxxxxxxxxxxxxxxxxxt",response.data)});


        console.log("yepeeeee",this.state.title);
        console.log("yepeeeeee",this.state.codeResponse);
    }


    handleClick() {
        //const weeName={handle:this.state.title};
        console.log("yepeeeee2",this.state.title);

        const requestBody = {
            weeName: this.state.title
        };

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        // console.log('im here',weeName);

//axios.post('/api/insta/postname',weeName)
        axios.post('/api/insta/postname',qs.stringify(requestBody), config)
            .then(   res =>{ console.log("resssy",res);})
            //res =>{ history.push('/Insta')})
            .catch(err => {
                console.log("wee error");
                //  dispatch({
                //    type: GET_ERRORS,
                //   payload: err.response.data
                //})
            });
        /*
            .catch((err) => {
                    console.log("err",err)
                });

                axios.get('/api/cars')
                    .then( response =>{
                        console.log(response.data)
                    })
        */

    }

    handleChange(event) {
        this.setState({title: event.target.value})
    }


    render() {


        return (
            <div>

            <a href="#" onClick={this.handleClick}>Create User Click</a>
        <a href="#" onClick={this.handleClick2}>Load user into mem Click2 </a>
        <a href="#" onClick={this.handleClick3}>Login Click3</a>

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

export {Insta};
