import {connect} from 'react-redux';
import SectionName from '../components/SectionName';

const mapDispatchToProps = (dispatch)=> {
  return {
    onAddTitle: (sectionName, sectionIndex)=> {
      let data = {sectionName, sectionIndex};
      dispatch({type: 'ADD_SECTION_NAME', data})
    }
  }
}

export default connect(()=> {
  return {};
}, mapDispatchToProps)(SectionName)