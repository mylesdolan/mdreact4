import axios from 'axios';


export function tweeterList(keywords){
    const request = axios.get(`${URL}/artists?q=${keywords}`)
        .then(response => {console.log("77777777777777",response.data) })
    return {
        type: 'GET_ARTISTS',
        payload: request
    }
}



export function tweeterListAll(){
let request="";
    console.log("bloodywellhere");
  //  const request = axios.get(`${URL}/artists?_limit=6`)
    //const request = axios.get(`/api/twit?_limit=6`)
    //const request =
        axios.get('/api/twit')


      //  .then(response => response.data)
        .then(response => {console.log("777777777777778",response.data) })
        .catch((err) => {console.log("errdjfkjsd",err)});
    return {
        type: 'GET_ARTISTS_ALL',
        payload: request
    }
}
