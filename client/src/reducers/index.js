import {combineReducers} from 'redux';
import addSection from './paper-created/addSection';
import initPaperInfo from './paper-created/initPaperInfo';


const rootReducer = combineReducers({
  addSection,
  initPaperInfo
});

export default rootReducer;