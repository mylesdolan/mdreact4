import axios from 'axios';


export function tweeterList(keywords){
    const request = axios.get(`${URL}/artists?q=${keywords}`)
        .then(response => {console.log("77777777777777",response.data) })
    return {
        type: 'GET_ARTISTS',
        payload: request
    }
}



export function dropStatusId(droppedid) {
    const droppedId = droppedid
    return {
        type: 'GET_DROPID',
        payload: droppedId
    }

}

export function linkStatusId(linkeddid) {
    const linkeddId = linkeddid;
   console.log("blaaaaaaaaaaaaaaaaaaaaaaady",linkeddId)
    return {
        type: 'GET_LINKID',
        payload: linkeddId
    }

}




export function ClearEmbedDetail(){
    return{
        type:'CLEAR_EMBED_DETAIL',
        payload:null
    }
}


/*
export function tweeterListAll(){
//let request="";
    console.log("bloodywellhere");
  //  const request = axios.get(`${URL}/artists?_limit=6`)
    //const request = axios.get(`/api/twit?_limit=6`)
    const request =
        axios.get('/api/twit')
    //tweetId={props.match.params.id}

        .then(response => response.data)
        //.then(response => {console.log("777777777777778",response.data) })
        //.catch((err) => {console.log("errdjfkjsd",err)});
    return {
        type: 'GET_TWEETERS',
        payload: request
    }
}
*/

//May 20
export function tweeterListAll(keyword){
//let request="";
    console.log("bloodywellhere",keyword);
    //  const request = axios.get(`${URL}/artists?_limit=6`)
    //const request = axios.get(`/api/twit?_limit=6`)
    const request =

    axios.get(`/api/twit/initial/${keyword}`)
     //  axios.get(`/api/twit/initial/`)
      // axios.get(`/api/twit`)

        //tweetId={props.match.params.id}

            .then(response => response.data)
    //.then(response => {console.log("777777777777778",response.data) })
    //.catch((err) => {console.log("errdjfkjsd",err)});
    return {
        type: 'GET_TWEETERS',
        payload: request
    }
}

