import addSection from './addSection';
import initPaperInfo from './initPaperInfo';

const actionMap = {
  'ADD_SECTION': addSection,
  'INIT_PAPER_DATA': initPaperInfo
};

function paperInfo(state = {sections: []}, action) {
  const func = actionMap[action.type];

  if (!func) {
    return state;
  }

  return func(state, action.data)
}

export default paperInfo;