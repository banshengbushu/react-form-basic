import React from 'react';
import {Component} from 'react';
import '../../style/paper-edit.less'

export default class SectionName extends Component {
  render() {
    return (
      <div id="section-name">
        <div className="section-header">
          <div className="col-sm-2 edit-name">
            <input type="text" className="form-control"/>
          </div>
          <i className="fa fa-pencil-square-o"> </i>
          <i className='fa fa-trash-o white pull-right'> </i>
        </div>
      </div>

    );
  }
}