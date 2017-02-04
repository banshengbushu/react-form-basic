import {connect} from 'react-redux';
import QuizAddButton from '../components/QuizAddButton';

const mapStateToProps = ({paperInfo, stacks}) => {
  let sections;

  // if (paperInfo.sections) {
  //   sections = paperInfo.sections.filter(section => section.type === 'homeworkQuiz');
  // }
  return {sections, stacks};
};

const mapDispatchToProps = (dispatch)=> {
  return {
    editHomework: (quizzes)=> {
      dispatch({type: "EDIT_HOMEWORK", quizzes})
    }
  }
};



export default connect(mapStateToProps, mapDispatchToProps)(QuizAddButton)

