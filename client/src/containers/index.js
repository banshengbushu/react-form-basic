import {connect} from 'react-redux';
import CreatedPaper from '../components/index';

function mapDispatchToProps(dispatch) {
  return {
    initPaperInfo: (data)=> {
      dispatch({type:'INIT_PAPER_DATA', data})
    }
  }
}

export default connect(()=> {
  return {};
}, mapDispatchToProps)(CreatedPaper)
