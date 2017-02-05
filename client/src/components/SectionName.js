import React from 'react';
import {Component} from 'react';
import '../../style/paper-edit.less'

export default class SectionName extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      writable: false
    })
  }

  editTitle() {
    this.setState({
      writable: true
    });

  }

  addTitle() {
    this.setState({
      writable: false
    });
    this.props.onAddTitle(this.title.value, this.props.sectionIndex);
  }

  render() {
    return (
      <div id="section-name">
        <div className="section-header">
          <div className="col-sm-2 edit-name">
            <input type="text" ref={(ref)=> {
              this.title = ref
            }}
                   className={this.state.writable ? "input-header form-control " : "input-header form-control read-only"}
                   readOnly={this.state.writable ? "" : "readOnly"}
                   onBlur={this.addTitle.bind(this)}/>
          </div>
          <i className={this.state.writable ? "hidden" : "fa fa-pencil-square-o"}
             onClick={this.editTitle.bind(this)}> </i>
          <i className='fa fa-trash-o white pull-right'> </i>
        </div>
      </div>

    );
  }
}