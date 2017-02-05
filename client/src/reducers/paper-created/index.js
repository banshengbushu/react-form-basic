import addSection from './addSection';
import initPaperInfo from './initPaperInfo';
import addHomework from './addHomework';
import addSectionName from './addSectionName';

const actionMap = {
  'ADD_SECTION': addSection,
  'INIT_PAPER_DATA': initPaperInfo,
  'EDIT_HOMEWORK': addHomework,
  'ADD_SECTION_NAME': addSectionName
};

function paperInfo(state = {sections: []}, action) {
  const func = actionMap[action.type];

  if (!func) {
    return state;
  }
  return func(state, action.data);
}

export default paperInfo;