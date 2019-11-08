import React, { Component } from 'react';
import axios from 'axios';
import Tweeterlist from '../Components/Tweetlist'
import { connect } from 'react-redux';
import  {tweeterListAll,tweeterList}  from '../actions';
import { bindActionCreators } from 'redux';

//import Search from '../components/search';
//import Tweeterlist from '../components/artistlist';

class TwitContainer extends Component {
    constructor(props) {

        super(props);
        this.state = {
            statuses: ['', '', '']

        }
    };


    componentWillMount() {
        this.props.tweeterListAll()
    }
    getKeywords = (event) => {
        let key = event.target.value;
        console.log("key!!!!!!!!!",key);
      //  this.props.artistList(key)
    }


    render(){
        console.log("here we go",this.props);
        console.log("here we gogo",this.props.statuses);
        console.log("here we gogogo",this.props.tweeters);
        return (
            <div>
Say something anyway!
                {/*  <Search keywords={this.getKeywords}/>
                <Tweeterlist tweets={this.props.artists.artistList}/>*/}

                <Tweeterlist keywords={this.getKeywords} tweets={this.props.statuses}/>



            </div>
        )
    }

}
    function mapStateToProps(state){
    return {
        statuses:state.statuses
    }
}

    function mapDispatchToProps(dispatch){
    return bindActionCreators({tweeterListAll,tweeterList},dispatch)
}



    export default connect(mapStateToProps,mapDispatchToProps)(TwitContainer);


