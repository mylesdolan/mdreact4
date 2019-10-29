import asset from '../Assets/tester.jpg'
import { Container,Row, Col } from 'react-bootstrap';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import React from "react";


class Grabid extends React.Component<Props> {
   // never worked unexpected token private  topic: string = 'AnyTopic';

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.Test2 = this.Test2.bind(this);
        this.state = {};

    }

    componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;

        document.body.appendChild(script);
    }
    handleClick(){

        this.setState({});

    }
    Test2(){
        this.setState({});


    }

    render() {
        let newstring='';
        let verynewstring='1186298651829772289';
        console.log("props",this.props);
        console.log("props2",this.props.TwitIdThing);
        console.log("props2a",this.props.tweetId);
        let myJSON = JSON.stringify(this.props.tweetId);
       // let myJ=myJSON[0];
        console.log ("json",myJSON);
    //    console.log ("myj",myJ);
        //console.log("props3",this.props[TwitIdThing]);
const { tweetId } = this.props;
        console.log("props3",tweetId);
       let  TwitIdThing  = '1186298651829772289';
       console.log ("TwitIdThingxxxxxxxxxxxxxxxxxx",TwitIdThing);
console.log("this p twee",this.props.tweetId);
        if (this.props.tweetId !== 'AnyOldString') {
             newstring = this.props.tweetId.toString();
             verynewstring=newstring.replace(/[^\x20-\x7E]/g, '');
            console.log ("verynewstring",verynewstring);
        }
       // this.topic={TwitIdThing}

        console.log("TwitIdThing2",this.topic);



        return (
            <div>

            <a href="#" onClick={this.handleClick}>GRABID</a>



        hello {tweetId}

        <div> hi
        {/* <TwitterTweetEmbed tweetId=\`$TwitIdThing\`/>
               let  TwitIdThing  = '1186297586724024327';
            gone    <TwitterTweetEmbed tweetId={'1186298651829772289'}/>
      go     <TwitterTweetEmbed tweetId={'`${TwitIdThing}`'}/>
            go2     <TwitterTweetEmbed tweetId={'{TwitIdThing}'}/>
                     going <TwitterTweetEmbed tweetId={this.topic}/> >
                        going <TwitterTweetEmbed tweetId={TwitIdThing2.TwitIdThing}/
            going <TwitterTweetEmbed tweetId={this.props.TwitIdThing}/>
            going <TwitterTweetEmbed tweetId={this.props.tweetId}/>
              going <TwitterTweetEmbed tweetId={verynewstring}/>
            going <TwitterTweetEmbed tweetId={myJ}/>

These were closest but too dirty to leave on.
            going <TwitterTweetEmbed tweetId={TwitIdThing}/>
            gone <TwitterTweetEmbed tweetId={verynewstring}/>
            */}

        bye



    bye2
            </div>






        </div>
    );
    }

}

export default Grabid;
