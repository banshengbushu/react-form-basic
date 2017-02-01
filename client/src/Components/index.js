import {Component} from 'react';
import React from 'react';
import PaperInfo from '../Components/PaperInfo.js';
import LogicPuzzle from '../Components/LogicPuzzle.js';
import SectionAddButton from '../Components/SectionAddButton.js';
import PaperSubmit from '../Components/PaperSubmit.js';
import SectionList from '../Components/SectionList.js';
import '../../style/index.less'

export default class CreatedPaper extends Component {
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