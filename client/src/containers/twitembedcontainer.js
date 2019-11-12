import React, { Component } from 'react';
import axios from 'axios';
//import Tweeterlist from '../Components/Tweetlist'
import TweeterEmbed from '../Components/TweetEmbed'

import { connect } from 'react-redux';
import  {tweeterListAll,tweeterList,dropStatusId,ClearEmbedDetail,linkStatusId}  from '../actions';
import { bindActionCreators } from 'redux';

//import Search from '../components/search';
//import Tweeterlist from '../components/artistlist';

class TwitEmbedContainer extends Component {
    constructor(props) {

        super(props);
        this.state = {
            //this.props.artistDetail(this.props.match.params.id)
            //embedid:this.props.match.params.id
            //statuses: ['', '', ''],
            // twred: ['', '', '']
        }



    };


    componentWillMount() {
      this.props.linkStatusId(this.props.match.params.id)
     //   this.setState({ id:this.props.match.params.id });
    }

    componentWillUnmount(){
        console.log("bloody u mount");
        this.props.ClearEmbedDetail();
    }

    componentDidMount()
    {
     console.log('inside tec', this.props)
        //   this.props.tweeterListAll()
    // if (this.props.match.params !=null)
    // {this.setState({ id:this.props.match.params.id });}
    }
    getKeywords = (event) => {
        let key = event.target.id;
        let x= event.dataTransfer.setData("text", event.target.id);
        // event.dataTransfer.setState( {title:event.target.id});
        console.log ("im here defo you dragid",key);
        console.log ("im here defo you drag",x);
        // console.log("key!!!!!!!!!",txt);
        //  this.props.artistList(key)
    }

    getKeywords2 = (event) => {
        //event.preventDefault();
        let key2 = event.target.value;
        let txt = event.dataTransfer.getData("text");
        console.log("Dropkey!!!!!!!!!test",txt);
        this.props.dropStatusId(txt);
        //  this.props.artistList(key)
    }

    getKeywordsdo = (event) => {
        event.preventDefault();
        let key2 = event.target.value;


        console.log("Dropkeydragover!!!!!!!!!");

        //  this.props.artistList(key)
    }

    getKeywordsdl = (event) => {
        //event.preventDefault();
        let key2 = event.target.value;
        console.log("DropkeyDrgagleave!!!!!!!!!", key2);
        //  this.props.artistList(key)
    }

    render(){
        //console.log("paramsthing",this.props.match.params.id);
        console.log("stateparamsthing",this.state.id);
        console.log("here we go",this.props);
        console.log("here we gogodid",this.props.did);
        console.log("here we gogo",this.props.statuses);
        console.log("here we gogo",this.props.twred);
        console.log("here we gogogo",this.props.tweeters);
        //console.log("here we gogogoDID",this.props.statuses.did);
        console.log("here we gogogoDID",this.props.twred.did);
        return (
            <div>
               TWIT EMBED CONTAIN!
                {/*  <Search keywords={this.getKeywords}/>
                <Tweeterlist tweets={this.props.artists.artistList}/>*/}

                <TweeterEmbed droppedid={this.props.twred.did} keywords={this.getKeywords} keywords2={this.getKeywords2} keywordsdo={this.getKeywordsdo} keywordsdl={this.getKeywordsdl} tweets={this.props.twred}/>



            </div>
        )
    }

}
function mapStateToProps(state){
    return {
        // statuses:state.statuses
        twred:state.twred
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({tweeterListAll,tweeterList,dropStatusId,ClearEmbedDetail,linkStatusId},dispatch)
}



export default connect(mapStateToProps,mapDispatchToProps)(TwitEmbedContainer);


