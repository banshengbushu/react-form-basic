import addSection from './addSection';
import initPaperInfo from './initPaperInfo';
import addHomework from './addHomework';

const actionMap = {
  'ADD_SECTION': addSection,
  'INIT_PAPER_DATA': initPaperInfo,
  'EDIT_HOMEWORK':addHomework
};

function paperInfo(state = {sections: []}, action) {
  const func = actionMap[action.type];

  if (!func) {
    return state;
  }
  return func(state, action.data);
}

export default paperInfo;