import {connect} from 'react-redux';
import LogicPuzzle from '../components/LogicPuzzle';

const mapDispatchToProps = (dispatch) => {
  return {
    editLogicPuzzle: (data) => {
      dispatch({type: 'EDIT_LOGIC_PUZZLE', data});
    }
  };
};

export default connect(()=> {
  return {}
}, mapDispatchToProps)(LogicPuzzle);
