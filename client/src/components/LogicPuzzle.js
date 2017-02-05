import {Component} from 'react';
import React from 'react';
import '../../style/paper-edit.less';
import '../../style/index.less';

export default class LogicPuzzle extends Component {

  editNumber() {
    let quizzes;
    quizzes = {
      easy: parseInt(this.easy.value) || 0,
      normal: parseInt(this.normal.value) || 0,
      hard: parseInt(this.hard.value) || 0
    };
    this.props.editLogicPuzzle({quizzes});

  }

  render() {
    return (
      <div className="paper-logicPuzzle">
        <div className="col-md-6 col-sm-offset-3">
          <div className="row">
            <div className="col-md-2">
              <span className="pull-right">逻辑题</span>
            </div>
            <div className="col-md-6 form-group">
              <input type="checkBox"/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3 col-sm-offset-4 easy-input">
            <span className="col-sm-3">简单</span>
            <div className="col-sm-3 no-padding form-group">
              <input type="number" className="form-control" ref={(ref)=> {
                this.easy = ref
              }} onBlur={this.editNumber.bind(this)}/>
            </div>
          </div>
          <div className="col-sm-3 number-input">
            <span className="col-sm-3">一般</span>
            <div className="col-sm-3 no-padding form-group">
              <input type="number" className="form-control" ref={(ref)=> {
                this.normal = ref
              }} onBlur={this.editNumber.bind(this)}/>
            </div>
          </div>
          <div className="col-sm-3 number-input">
            <span className="col-sm-3">困难</span>
            <div className="col-sm-3 no-padding form-group">
              <input type="number" className="form-control" ref={(ref)=> {
                this.hard = ref
              }} onBlur={this.editNumber.bind(this)}/>
            </div>
          </div>
        </div>
        <div className="paper-border">
        </div>
      </div>
    )
  }
}