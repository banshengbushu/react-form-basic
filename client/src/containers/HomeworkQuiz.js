import {connect} from 'react-redux';
import HomeworkQuiz from '../components/HomeworkQuiz';

const mapStateToProps = (state)=> {
  return {stacks: state.stacks, paperInfo: state.paperInfo};
};

const mapDispatchToProps = (dispatch)=> {
  return {
    onDeleteHomeworkQuiz: (data)=> {
      dispatch({type: 'DELETE_HOMEWORK_QUIZ', data})
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeworkQuiz);