import {Component} from 'react';
import React from 'react';
import PaperInfo from '../components/PaperInfo.js';
import LogicPuzzle from '../components/LogicPuzzle.js';
import SectionAddButton from '/home/wangdanna/Documents/work/hanjia-test/react-form-basic/client/src/containers/sectionAddButton.js';
import PaperSubmit from '../components/PaperSubmit.js';
import SectionList from '../components/SectionList.js';
import '../../style/index.less'

export default class CreatedPaper extends Component {

  componentWillUnmount() {
    this.props.initPaperInfo({sections: []})
  }

  componentDidMount() {

    console.log(this.props)
    this.props.initPaperInfo({sections: [{quizzes: [], title: '编程题', type: 'homeworkQuiz'}]});
  }

  render() {
    return (
      <div id="paper" className="col-md-10 col-md-offset-1 ">
        <div className="paper-header form-group">
          <label>新增试卷</label>
        </div>
        <div className="paper-body">
          <PaperInfo/>
          <LogicPuzzle/>
          <SectionList/>
          <SectionAddButton/>
          <PaperSubmit/>
        </div>
      </div>
    )
  }
}