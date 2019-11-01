import { combineReducers } from 'redux';
import tweeters from './tweeter_reducer';

const rootReducer = combineReducers({
    tweeters
})

export default rootReducer;
