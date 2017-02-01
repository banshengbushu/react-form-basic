import React from 'react';
import {Component} from 'react';
import QuizAddButton from './QuizAddButton';
import SectionName from './SectionName';

export default class Section extends Component {
  render() {
    return (
      <div>
        <SectionName/>
        <QuizAddButton/>
      </div>
    );
  }
}