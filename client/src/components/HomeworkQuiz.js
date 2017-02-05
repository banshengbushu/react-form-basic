import {Component} from 'react';
import React from 'react';
import '../../style/paper-edit.less'

export default class HomeworkQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      homeworkName: ''
    })
  }

  componentDidMount() {
    const {homeworkQuizIndex} = this.props;
    const homeworkName = this.props.stacks.find((item)=>parseInt(homeworkQuizIndex) + 1 === item.stackId).title;
    this.setState({
      homeworkName
    })
  }

  deleteHomeworkQuiz(sectionIndex, homeworkQuizIndex) {
    let data = {sectionIndex, homeworkQuizIndex};
    this.props.onDeleteHomeworkQuiz(data);
  }

  render() {
    const homeworkName = this.state.homeworkName;
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