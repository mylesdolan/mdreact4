import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import  {tweeterListAll,tweeterList}  from '../actions';
import { bindActionCreators } from 'redux';

//import Search from '../components/search';
//import Tweeterlist from '../components/artistlist';

class TwitContainer extends Component {

    componentWillMount() {
        this.props.tweeterListAll()
    }
    render(){
        console.log("here we go",this.props)
        return (
            <div>

                {/*  <Search keywords={this.getKeywords}/>
                <Tweeterlist tweettists={this.props.artists.artistList}/>*/}

            </div>
        )
    }

}
    function mapStateToProps(state){
    return {
        tweeters:state.artists
    }
}

    function mapDispatchToProps(dispatch){
    return bindActionCreators({tweeterListAll,tweeterList},dispatch)
}



    export default connect(mapStateToProps,mapDispatchToProps)(TwitContainer);


