import React from 'react';
import {Component} from 'react';
import '../../style/paper-edit.less';

export default class SectionAddButton extends Component {
  addSection() {
    const section = {quizzes: [], title: '编程题', type: 'homeworkQuiz'};
    console.log('-----')
    this.props.handleSectionList(section);
  }

  render() {
    return (
      <div className="section-border text-center form-group">
        <i className='fa fa-plus fa-small' onClick={this.addSection.bind(this)}> </i>
      </div>
    )
  }
}