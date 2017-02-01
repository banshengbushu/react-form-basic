import {Component} from 'react';
import React from 'react';

export default class PaperInfo extends Component {
  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <div className="row">
          <div className="paper-span col-md-2">
            <span className="pull-right">试卷名称</span>
          </div>
          <div className="col-md-10 form-group">
            <input className="form-control" placeholder="请输入试卷名称"/>
          </div>
        </div>
        <div className="row">
          <div className="paper-span col-md-2">
            <span className="pull-right">试卷描述</span>
          </div>
          <div className="col-md-10 form-group">
            <input className="form-control" type="textArea" placeholder="请输入试卷描述"/>
          </div>
        </div>
      </div>
    )
  }
}