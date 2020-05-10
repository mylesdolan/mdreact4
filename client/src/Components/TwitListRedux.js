
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {TwitterTweetEmbed} from "react-twitter-embed";

import { connect } from 'react-redux';
import  {tweeterListAll,tweeterList,dropStatusId,ClearEmbedDetail,linkStatusId}  from '../actions';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'
import TweeterEmbed from '../Components/TweetEmbed'

import axios from 'axios';
import Iframe from 'react-iframe';







class TwitListRedux extends Component {
    constructor(props) {

        super(props);
        this.state = {
            //statuses: ['', '', ''],
            // twred: ['', '', '']
            thelinkid:null

        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
    };


    componentDidMount() {
        this.props.tweeterListAll();
        // this.changeLocation();
     //   window.addEventListener('popstate', this.changeLocation.bind(this));
        console.log("here we gogogoho",this.props.twred);
    }

handleClick(e) {
    const { history } = this.props;

    console.log('xxxxevent', e);
    console.log('xxxxevent', e.target.id);
    this.getOneid(e.target.id);
  //  history.push("/tlr")
    //this.props.history.push('/tlr');

}

    handleClick2(e) {
        const { history } = this.props;

        console.log('xxxxevent', e);
        console.log('xxxxevent', e.target.id);
       // this.getOneid(e.target.id);
        //  history.push("/tlr")
        //this.props.history.push('/tlr');
        this.setState({thelinkid: e.target.id});
    }

    getOneid(id)
    {
        this.props.linkStatusId(id);

console.log('newtwred',this.props.twred);

    }


    render(){
       console.log("here we gogogoho",this.props.twred);
        //console.log("here we gogo",this.props.twred.statuses);
        console.log("here we go",this.props);
        //console.log("here we gogodid",this.props.did);
        //console.log("here we gogo",this.props.statuses);
       // console.log("here we gogo",this.props.twred);
       // console.log("here we gogogo",this.props.tweeters);
        //console.log("here we gogogoDID",this.props.statuses.did);
       // console.log("here we gogogoDID",this.props.twred.did);
        return (
            <div>




                    hohoho
                    {
                        this.props.twred.statuses  ?



                            //props.tweets.map((item,index) => (

                            //  props.tweets['statuses'].map(item => (
                            this.props.twred.statuses.statuses.map((item,index) => (

                                <div id={item.id_str}>
                                    something xxxxxxxxxxxwithlink
                                    {item.id_str} {item.text.substring(1,70)}
                                    {/*      <Link to={`/twe/${item.id_str}`} id={item.id_str} className="artist_item" onClick={this.handleClick}> LInk </Link>*/}
                                    <Link to={`/tlr`} id={item.id_str} className="artist_item"> LInk </Link>
                                    <button id={item.id_str} className="artist_item" onClick={this.handleClick}> BUTTON </button>
                                    <button id={item.id_str} className="artist_item" onClick={this.handleClick2}> BUTTON </button>
                                    {/*   <TwitterTweetEmbed tweetId={item.id_str}/> */}
                                </div>
                            ))

                            : null

                    }


                {
                    this.props.twred.linkid  ?
                        <TweeterEmbed droppedid={this.props.twred.linkid} />

                        : null


                }

                {

                this.state.thelinkid ?
                    <Iframe url={`/tweetemb/${this.state.thelinkid}`}
                            width="450px"
                            height="450px"
                            id="myId"
                            display="initial"
                            position="relative"
                            allowFullScreen/>
                            : null
                }



            </div>
        )
    }






}


function mapStateToProps(state){
    return {
        // statuses:state.statuses
        twitoneid:state.twitoneid,twred:state.twred
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({tweeterListAll,tweeterList,dropStatusId,ClearEmbedDetail,linkStatusId},dispatch)
}



export default connect(mapStateToProps,mapDispatchToProps)(TwitListRedux,{updateOnLocationChange: true});
