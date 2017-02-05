import {combineReducers} from 'redux';
import paperInfo from './paper-created/index';
import stacks from './stacks';

const rootReducer = combineReducers({
  paperInfo,
  stacks
});

export default rootReducer;