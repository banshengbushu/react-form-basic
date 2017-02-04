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
    const homeworkName = this.props.stacks.stacks.find((item)=>parseInt(homeworkQuizIndex) + 1 === item.stackId).title;
    this.setState({
      homeworkName
    })
  }

  render() {
    const homeworkName = this.state.homeworkName;
    return (
      <div className='col-md-2 col-xs-4 padding-width'>
        <div className='homework-title'>
          <div className='title-style'>
            <h5 className='title-header no-margin'>
              {homeworkName}
            </h5>
          </div>
          <div className='fa-icon pull-right'>
            <i className='fa fa-trash-o'> </i>
          </div>
        </div>
      </div>
    )
  }
}