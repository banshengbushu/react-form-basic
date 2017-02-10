import {connect} from 'react-redux';
import LogicPuzzle from '../components/LogicPuzzle';


function getToggle(paperInfo) {
  return paperInfo.sections.filter((item)=> {
      return item.type === 'LogicPuzzle';
    }).length > 0
}
function getDefinition(paperInfo) {
  let result = paperInfo.sections.filter((item) => {
      return item.type === 'LogicPuzzle';
    })[0] || {};

  return result.definition || {};
}

const mapStateToProps = ({paperInfo})=>({
  toggleStatus: getToggle(paperInfo),
  definition: getDefinition(paperInfo)
});

const mapDispatchToProps = (dispatch) => {
  return {
    editLogicPuzzle: (data) => {
      dispatch({type: 'EDIT_LOGIC_PUZZLE', data});
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogicPuzzle);
