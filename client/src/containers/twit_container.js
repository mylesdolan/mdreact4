import React, { Component } from 'react';
import axios from 'axios';
import Tweeterlist from '../Components/Tweetlist'
import { connect } from 'react-redux';
import  {tweeterListAll,tweeterList,dropStatusId,ClearEmbedDetail}  from '../actions';
import { bindActionCreators } from 'redux';
//import { Link, History } from 'react-router';

//import Search from '../components/search';
//import Tweeterlist from '../components/artistlist';

class TwitContainer extends Component {
    constructor(props) {

        super(props);
        this.state = {
            //statuses: ['', '', ''],
           // twred: ['', '', '']
        }
    };


    componentWillMount() {
        this.props.tweeterListAll();
       // this.changeLocation();
        window.addEventListener('popstate', this.changeLocation.bind(this));


    }

    // update state based on the URL
    changeLocation() {
        console.log("changing location no var");
     //   const path = window.location.pathname.split('/')
       // console.log("changing location",path);
        //const currentView = path[path.length - 1]
       // this.setState({ currentView })

    }


    componentWillUnmount(){
        this.props.ClearEmbedDetail();
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
        this.props.ClearEmbedDetail();
        console.log("Dropkey!!!!!!!!!test",txt);
        this.props.dropStatusId(txt);
        //  this.props.artistList(key)
    }






    navigateToRoute(route) {
        console.log("historyRoute",route);
        console.log("historyprops",this.props);
        if(this.props.history) {
            console.log(this.props.history);
            this.setState({currentView: route})
            this.props.history.push(`/options/${route}`)
        }
    }



    getKeywordslink = (event) => {
       // event.preventDefault();
        let key2 = event.target.id;
       // let txt = event.dataTransfer.getData("text");
     //   this.props.ClearEmbedDetail();
        console.log("Linkkey!!!!!!!!!test",key2);
        console.log("Linkkey!!!!!!!!!test",event);
        this.navigateToRoute(key2);



        //this.props.dropStatusId(key2);
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
        console.log("here we go",this.props);
        console.log("here we gogodid",this.props.did);
        console.log("here we gogo",this.props.statuses);
        console.log("here we gogo",this.props.twred);
        console.log("here we gogogo",this.props.tweeters);
        //console.log("here we gogogoDID",this.props.statuses.did);
        console.log("here we gogogoDID",this.props.twred.did);
        return (
            <div>
Say something anyway!
                {/*  <Search keywords={this.getKeywords}/>
                <Tweeterlist tweets={this.props.artists.artistList}/>*/}

                <Tweeterlist droppedid={this.props.twred.did} keywordslink={this.getKeywordslink} keywords={this.getKeywords} keywords2={this.getKeywords2} keywordsdo={this.getKeywordsdo} keywordsdl={this.getKeywordsdl} tweets={this.props.twred}/>



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
    return bindActionCreators({tweeterListAll,tweeterList,dropStatusId,ClearEmbedDetail},dispatch)
}



    export default connect(mapStateToProps,mapDispatchToProps)(TwitContainer,{updateOnLocationChange: true});


