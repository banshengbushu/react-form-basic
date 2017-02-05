import React from 'react';
import {Component} from 'react';
import '../../style/paper-edit.less';

export default class PaperSubmit extends Component {
  save() {
    let paperInfo = {
      paperName: this.props.paperName,
      paperDescription: this.props.paperDescription,
      easy: this.props.easy,
      normal: this.props.normal,
      hard: this.props.hard
    };
    console.log('paperInfo')
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-2 col-sm-offset-4">
          <button className="btn btn-primary" onClick={this.save.bind(this)}>保存</button>
        </div>
        <div className="release-btn col-sm-2">
          <button className="btn btn-primary">发布</button>
        </div>
      </div>
    )
  }
}