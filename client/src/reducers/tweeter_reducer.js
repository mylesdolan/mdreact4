export default function(state={},action) {

    switch (action.type) {
        case 'GET_DROPID':
            console.log("inside reducerdi",action.payload);
            return {...state, did: action.payload}
        case 'GET_TWEETERS':
            console.log("inside reducer",action.payload);
            return {...state, statuses: action.payload}
        case 'GET_ARTISTS':
            return {...state, artistList: action.payload}
        case 'GET_ARTISTS_ALL':
            return {...state, artistList: action.payload}
        case 'GET_ARTISTS_DETAIL':
            return {...state, artistData: action.payload}
        case 'CLEAR_EMBED_DETAIL':
            return {...state, did: action.payload}
        default:
            return state;
    }

}
