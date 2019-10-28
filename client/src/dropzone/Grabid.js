import asset from '../Assets/tester.jpg'
import { Container,Row, Col } from 'react-bootstrap';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import React from "react";


class Grabid extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.Test2 = this.Test2.bind(this);
        this.state = {};

    }

    componentDidMount() {

    }
    handleClick(){

        this.setState({});

    }
    Test2(){
        this.setState({});


    }

    render() {

//const { TwitIdThing } = this.props;
        return (
            <div>

            <a href="#" onClick={this.handleClick}>GRABID</a>



        hello {TwitIdThing}

        <div> hi <TwitterTweetEmbed tweetId=\`$TwitIdThing\`/>
                {/*
      go     <TwitterTweetEmbed tweetId={'`${TwitIdThing}`'}/>
            go2     <TwitterTweetEmbed tweetId={'{TwitIdThing}'}/> */}

            gone    <TwitterTweetEmbed tweetId={'1186298651829772289'}/>

bye



    bye2
            </div>






        </div>
    );
    }

}

export default Grabid;
