import {connect} from 'react-redux';
import QuizAddButton from '../components/QuizAddButton.js';

const mapDispatchToProps = (dispatch) => {
  return {
    editHomework: (quizzes)=> {
      dispatch({type: 'EDIT_HOMEWORK', data: quizzes})
    }
  }
};
export default connect(() => {
  return {};
}, mapDispatchToProps)(QuizAddButton)

