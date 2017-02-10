import {connect} from 'react-redux';
import LogicPuzzle from '../components/LogicPuzzle';


function getToggle(paperInfo) {
  return paperInfo.sections.filter((item)=> {
      return item.type === 'LogicPuzzle';
    }).length > 0
}
function getQuizzes(paperInfo) {
  let result = paperInfo.sections.filter((item) => {
      return item.type === 'logicQuiz';
    })[0] || {};

  return result.logicPuzzleInfo || {};
}

const mapStateToProps = ({paperInfo})=>({
  toggleStatus: getToggle(paperInfo),
  logicPuzzleInfo:getQuizzes(paperInfo)
});

const mapDispatchToProps = (dispatch) => {
  return {
    editLogicPuzzle: (data) => {
      dispatch({type: 'EDIT_LOGIC_PUZZLE', data});
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogicPuzzle);
