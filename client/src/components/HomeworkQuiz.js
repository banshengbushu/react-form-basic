import {Component} from 'react';
import React from 'react';
import '../../style/paper-edit.less'

export default class HomeworkQuiz extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      homeworkList: [{
        title: 'react',
        stack: "Javascript",
        _id: '12345'
      }, {
        title: 'jersey',
        stack: "Java+Gradle",
        _id: '12346'
      }]
    })
  }

  deleteHomeworkQuiz(sectionIndex, homeworkQuizIndex) {
    let data = {sectionIndex, homeworkQuizIndex};
    this.props.onDeleteHomeworkQuiz(data);
  }

  render() {
    const homeworkName = this.state.homeworkList.find(item=>item._id === this.props.id).title;
    const {sectionIndex, homeworkQuizIndex} = this.props;
    return (
      <div className='col-md-2 col-xs-4 padding-width'>
        <div className='homework-title'>
          <div className='title-style'>
            <h5 className='title-header no-margin'>
              {homeworkName}
            </h5>
          </div>
          <div className='fa-icon pull-right'>
            <i className='fa fa-trash-o'
               onClick={this.deleteHomeworkQuiz.bind(this, sectionIndex, homeworkQuizIndex)}> </i>
          </div>
        </div>
      </div>
    )
  }
}
