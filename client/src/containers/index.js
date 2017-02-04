import {connect} from 'react-redux';
import CreatedPaper from '/home/wangdanna/Documents/work/hanjia-test/react-form-basic/client/src/components/index.js';

function mapDispatchToProps(dispatch) {
  return {
    initPaperInfo: (data)=> {
      dispatch({type:'INIT_PAPER_DATA', data})
    },
    initStacks:(data)=>{
      dispatch({type:'INIT_STACKS',data})
    }
  }
}

export default connect(()=> {
  return {};
}, mapDispatchToProps)(CreatedPaper)
