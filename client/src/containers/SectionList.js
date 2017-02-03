import {connect} from 'react-redux';
import SectionList from '../components/SectionList';

const mapStateToProps = (paperInfo)=> {
  let sections;
  if (paperInfo.paperCreated.sections) {
    sections = paperInfo.paperCreated.sections.filter(section => section.type === 'homeworkQuiz');
  }
  return {sections};
};

export default connect(mapStateToProps, ()=> {
  return {};
})(SectionList)