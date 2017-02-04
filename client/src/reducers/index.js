import {combineReducers} from 'redux';
import paperCreated from './paper-created/index';
import stacks from './stacks';

const rootReducer = combineReducers({
  paperCreated,
  stacks
});

export default rootReducer;