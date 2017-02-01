import React from 'react';
import {Component} from 'react';
import '../../style/paper-edit.less';

export default class PaperSubmit extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-2 col-sm-offset-4">
          <button className="btn btn-primary">保存</button>
        </div>
        <div className="release-btn col-sm-2">
          <button className="btn btn-primary">发布</button>
        </div>
      </div>
    )
  }
}