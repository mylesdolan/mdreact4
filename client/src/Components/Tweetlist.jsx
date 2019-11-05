import React from 'react';
import { Link } from 'react-router-dom';

const Tweeterlist = (props) =>{
    console.log("insidetweeterlist", props.tweets.statuses);

  //  console.log("insidetweeterlist", props.tweets.statuses.length);
    console.log("insidetweeterlist2",props.tweets.length);
    //props.tweets.statuses && props.tweets.statuses.length > 0 ?
    //const arr = [...props.tweets(100)].map((_, i) => i);

    return (
        <div >
ho
            {
                props.tweets.statuses  ?



                   //props.tweets.map((item,index) => (

                    //  props.tweets['statuses'].map(item => (
                    props.tweets.statuses.statuses.map((item,index) => (

                        <div>
                            something xxxxxxxxxxx
                            {item.id_str}
                        </div>
                    )) : null

            }


        </div>
    )
}

export default Tweeterlist;
