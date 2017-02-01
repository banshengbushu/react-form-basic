import React from 'react';
import {Component} from 'react';
import Section from './Section';

export default class SectionList extends Component {
  render() {
    const sectionLists = this.props.sections || [];
    const sectionList = sectionLists.map((sectionList,index)=> {
      return(
        <div>
          <Section key={index} {...sectionList} />
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