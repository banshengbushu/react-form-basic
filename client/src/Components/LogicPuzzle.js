import {Component} from 'react';
import React from 'react';
import '../../style/paper-edit.less';
import '../../style/index.less';

export default class LogicPuzzle extends Component {
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
              <input type="number" className="form-control"/>
            </div>
          </div>
          <div className="col-sm-3 number-input">
            <span className="col-sm-3">一般</span>
            <div className="col-sm-3 no-padding form-group">
              <input type="number" className="form-control"/>
            </div>
          </div>
          <div className="col-sm-3 number-input">
            <span className="col-sm-3">困难</span>
            <div className="col-sm-3 no-padding form-group">
              <input type="number" className="form-control"/>
            </div>
          </div>
        </div>
        <div className="paper-border">
        </div>
      </div>
    )
  }
}