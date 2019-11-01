import asset from '../Assets/tester.jpg'
import { Container,Row, Col } from 'react-bootstrap';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import React from "react";
/* global FB*/
/* global ga*/
/* global twttr*/
/* global theURL*/
import {Helmet} from "react-helmet";
class Grabid extends React.Component<Props> {
   // never worked unexpected token private  topic: string = 'AnyTopic';

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.Test2 = this.Test2.bind(this);
        this.state = {};

    }

    componentDidMount() {
        /* None of this worked when trying to get twttr.widgets load working but its very WTF anyway?
        window.addEventListener("load", function() {
            window.fbAsyncInit = function() {
                FB.Event.subscribe('edge.create', function(targetUrl) {
                    ga('send', 'social', 'facebook', 'like', targetUrl);
                });
                FB.Event.subscribe('edge.remove', function(targetUrl) {
                    ga('send', 'social', 'facebook', 'unlike', targetUrl);
                });
            }

            document.getElementById('tweetjs').addEventListener('load', function() {
                twttr.ready(function (twttr) {
                    twttr.events.bind('tweet', function(e){
                        if(!e) return;
                        ga('send', 'social', 'twitter', 'tweet', theURL);
                    })
                });
            }, false);
        }, false);


        const script = document.createElement("script");

        script.src = "//platform.twitter.com/widgets.js";
        script.async = true;

        document.body.appendChild(script);
        twttr.widgets.load();

        //differnet thinbg to try
  const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.innerHTML = "document.write('This is output by document.write()!')";
        this.instance.appendChild(s);
        */

     //   twttr.widgets.load();
      //  script.src = "//platform.twitter.com/widgets.js";
       // script.async = true;
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
       let  TwitIdThing  = '1190225655323144192';
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

            */}

        bye



    bye2
            </div>

                <Helmet>
                    <script src="//platform.twitter.com/widgets.js"></script>
                    twttr.widgets.load();



                </Helmet>


                going <TwitterTweetEmbed tweetId={TwitIdThing}/>
                gone <TwitterTweetEmbed tweetId={verynewstring}/>

        </div>
    );
    }

}

export default Grabid;
