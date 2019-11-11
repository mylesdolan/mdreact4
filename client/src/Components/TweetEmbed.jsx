import React from 'react';
import { Link } from 'react-router-dom';
import {TwitterTweetEmbed} from "react-twitter-embed";


const TweeterEmbed = (props) =>{
    console.log("insidetweeterlist", props.tweets.statuses);
    console.log("insidetweeterlist", props.tweets.statuses);
    //  console.log("insidetweeterlist", props.tweets.statuses.length);
    console.log("insidetweeterlist2",props.tweets.length);
    console.log("insidetweeterlist3did",props.droppedid);
    //props.tweets.statuses && props.tweets.statuses.length > 0 ?
    //const arr = [...props.tweets(100)].map((_, i) => i);
    let draggablebool=true;
    return (
        <div >
            ho
            {
                props.tweets.statuses  ?



                    //props.tweets.map((item,index) => (

                    //  props.tweets['statuses'].map(item => (
                    props.tweets.statuses.statuses.map((item,index) => (

                        <div id={item.id_str} draggable={draggablebool} onDragStart={event => props.keywords(event)}>
                            something xxxxxxxxxxx
                            {item.id_str}
                            {/*   <TwitterTweetEmbed tweetId={item.id_str}/> */}
                        </div>
                    ))

                    : null

            }
            <div id="div1"
                 onDragOver={event => props.keywordsdo(event)}
                 onDragLeave={event => props.keywordsdl(event)}
                 onDrop={event => props.keywords2(event)}








            >HelloInTweetlist </div>

            {
                props.droppedid  ?
                    <div>  {props.droppedid}

                        <TwitterTweetEmbed tweetId={props.droppedid}/>

                    </div>  : null
            }

        </div>
    )
}

export default TweeterEmbed;
