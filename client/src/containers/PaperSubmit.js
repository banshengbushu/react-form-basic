import {connect} from 'react-redux';
import PaperSubmit from '../components/PaperSubmit';

const mapStateToProps = ({paperInfo}) => {
  return {data: paperInfo};
};

export default connect(()=> {
  return {}
}, mapStateToProps)(PaperSubmit);
