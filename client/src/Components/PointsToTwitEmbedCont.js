import React from 'react';

import TwitEmbedContainer from '../containers/twitembedcontainer';

const twitembedder = (props) =>{

    console.log('twitembedidxx',props);
    return(
        <TwitEmbedContainer history={props.history} {...props}/>
    )
}

export default twitembedder;
