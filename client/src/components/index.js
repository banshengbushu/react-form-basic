import {Component} from 'react';
import React from 'react';
import PaperInfo from '../containers/PaperInfo';
import LogicPuzzle from '../containers/LogicPuzzle.js';
import SectionAddButton from '../containers/sectionAddButton.js';
import PaperSubmit from '../containers/PaperSubmit.js';
import SectionList from '../containers/SectionList.js';
import '../../style/index.less'

export default class CreatedPaper extends Component {

  componentDidMount() {
    this.props.initPaperInfo({
      sections: []
    });
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