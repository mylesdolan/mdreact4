import React from 'react';

import TwitEmbedContainer from '../containers/twitembedcontainer';

const twitembedder = (props) =>{

    console.log('twitembedid',props);
    return(
        <TwitEmbedContainer {...props}/>
    )
}

export default twitembedder;
