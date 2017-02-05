import {connect} from 'react-redux';
import PaperInfo from '../components/PaperInfo';

const mapDispatchToProps = (dispatch)=> {
  return {
    editPaper: (data)=> {
      dispatch({type: 'EDIT_PAPER', data})
    }
  }
};

export default connect(()=> {
  return {}
}, mapDispatchToProps)(PaperInfo)