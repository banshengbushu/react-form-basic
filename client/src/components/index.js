import {Component} from 'react';
import React from 'react';
import PaperInfo from '../components/PaperInfo.js';
import LogicPuzzle from '../components/LogicPuzzle.js';
import SectionAddButton from '../containers/sectionAddButton.js';
import PaperSubmit from '../components/PaperSubmit.js';
import SectionList from '../containers/SectionList.js';
import '../../style/index.less'

export default class CreatedPaper extends Component {

  componentWillUnmount() {
    this.props.initPaperInfo({sections: []});
  }

  componentDidMount() {
    this.props.initPaperInfo({sections: [{quizzes: [], title: '编程题', type: 'LogicPuzzle'}]});
    this.props.initStacks({stacks:[{stackId:1,title:'Java'},{stackId:2,title:'JavaScript'}]});
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