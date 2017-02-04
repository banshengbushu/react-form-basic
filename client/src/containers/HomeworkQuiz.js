import {connect} from 'react-redux';
import HomeworkQuiz from '../components/HomeworkQuiz';

const mapStateToProps = (state)=>{
  return {stacks:state.stacks};

};

const mapDispatchToProps = ()=>{
  return{

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeworkQuiz);