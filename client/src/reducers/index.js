import { combineReducers } from 'redux';
import statuses from './tweeter_reducer';

const rootReducer = combineReducers({
    statuses
})

export default rootReducer;
