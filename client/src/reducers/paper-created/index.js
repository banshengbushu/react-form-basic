import addSection from './addSection';
import initPaperInfo from './initPaperInfo';

const actionList = {
  'ADD_SECTION': addSection,
  'INIT_PAPER_DATA': initPaperInfo
};

function paperInfo(state = {sections:[]}, action) {
  const func = actionList[action.type];

  if (!func) {
    return state;
  }
  return func(state, action.data)
}

export default paperInfo;