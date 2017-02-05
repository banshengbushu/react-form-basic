import addSection from './addSection';
import initPaperInfo from './initPaperInfo';
import addHomework from './addHomework';
import addSectionName from './addSectionName';
import deleteHomeworkQuiz from './deleteHomeworkQuiz';

const actionMap = {
  'ADD_SECTION': addSection,
  'INIT_PAPER_DATA': initPaperInfo,
  'EDIT_HOMEWORK': addHomework,
  'ADD_SECTION_NAME': addSectionName,
  'DELETE_HOMEWORK_QUIZ':deleteHomeworkQuiz
};

function paperInfo(state = {sections: []}, action) {
  const func = actionMap[action.type];

  if (!func) {
    return state;
  }
  return func(state, action.data);
}

export default paperInfo;