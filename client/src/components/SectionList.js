import React from 'react';
import {Component} from 'react';
import Section from './Section';

export default class SectionList extends Component {
  render() {
    const sections = this.props.sections || [];
    const sectionList = sections.map((section, index)=> {
      return (
        <div key={index}>
          <Section index={index} {...section} />
        </div>
      )
    });
    return (
      <div>
        {sectionList}
      </div>
    );
  }
}