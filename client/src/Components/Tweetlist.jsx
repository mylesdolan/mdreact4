import React from 'react';
import { Link } from 'react-router-dom';

const Tweeterlist = (props) =>{
    console.log("insidetweeterlist", props.tweets.statuses);
    return (
        <div className="tweet_container">
            if (props.tweets.statuses )
            {
                props.tweets.statuses && props.tweets.statuses.length > 0 ?
                        props.tweets.statuses.map(item => (

                            <div>
                                something xxxxxxxxxxx
                                {item.id_str}
                            </div>
                        )) : null
                }
}
        </div>
    )
}

export default Tweeterlist;
