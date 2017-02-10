import {Component} from 'react';
import React from 'react';

export default class PaperInfo extends Component {

  receivePropsData(){
    this.paperName.value = this.props.paperName || '';
    this.paperDescription.value = this.props.paperDescription || '';
  }

  componentDidMount() {
    this.receivePropsData();
  }

  componentDidUpdate() {
    this.receivePropsData();
  }


  editPaperName() {
    this.props.editPaper({paperName: this.paperName.value})
  }

  editPaperDescription() {
    this.props.editPaper({paperDescription: this.paperDescription.value})
  }

  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <div className="row">
          <div className="paper-span col-md-2">
            <span className="pull-right">试卷名称</span>
          </div>
          <div className="col-md-10 form-group">
            <input className="form-control" placeholder="请输入试卷名称" ref={(ref)=> {
              this.paperName = ref
            }} onBlur={this.editPaperName.bind(this)}/>
          </div>
        </div>
        <div className="row">
          <div className="paper-span col-md-2">
            <span className="pull-right">试卷描述</span>
          </div>
          <div className="col-md-10 form-group">
            <input className="form-control" type="textArea" placeholder="请输入试卷描述" ref={(ref)=> {
              this.paperDescription = ref
            }} onBlur={this.editPaperDescription.bind(this)}/>
          </div>
        </div>
      </div>
    )
  }
}