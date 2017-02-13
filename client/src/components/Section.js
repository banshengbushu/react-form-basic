import React from 'react';
import {Component} from 'react';
import QuizAddButton from '../containers/QuizAddButton';
import SectionName from '../containers/SectionName';
import HomeworkQuizzes from './HomeworkQuizzes';

export default class Section extends Component {
  render() {
    return (

      <div>
        <SectionName title={this.props.title} sectionIndex={this.props.index}/>
        <HomeworkQuizzes sectionIndex={this.props.index} homeworkQuizzes={this.props.definition.quizzes}/>
        <QuizAddButton sectionIndex={this.props.index}/>
      </div>
    );
  }
}