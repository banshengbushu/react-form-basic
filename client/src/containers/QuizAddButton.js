import {connect} from 'react-redux';
import QuizAddButton from '/home/wangdanna/Documents/work/hanjia-test/react-form-basic/client/src/components/QuizAddButton.js';

const mapDispatchToProps = (dispatch)=> {
  return {
    editHomework: (quizzes)=> {
      dispatch({type: "EDIT_HOMEWORK", quizzes})
    }
  }
};

export default connect(() => {
  return {};
}, mapDispatchToProps)(QuizAddButton)

