import {Component} from 'react';
import React from 'react';
import PaperInfo from '../Components/PaperInfo.js';
import LogicPuzzle from '../Components/LogicPuzzle.js';
import SectionAddButton from '../Components/SectionAddButton.js';
import PaperSubmit from '../Components/PaperSubmit.js';

export default class CreatedPaper extends Component {
  render() {
    return (
      <div id="paper" className="col-md-10 col-md-offset-1 ">
        <div className="paper-header form-group">
          <h4>新增试卷</h4>
        </div>
        <div className="paper-body">
          <PaperInfo/>
          <LogicPuzzle/>
          <SectionAddButton/>
          <PaperSubmit/>
        </div>
      </div>
    )
  }
}