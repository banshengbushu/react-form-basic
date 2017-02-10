import {Component} from 'react';
import React from 'react';
import '../../style/paper-edit.less';
import '../../style/index.less';

const DifficultySetter = ({text, difficulty, content})=>(
  <div className="col-sm-3 col-sm-offset-4 easy-input">
    <span className="col-sm-3">{text}</span>
    <div className="col-sm-3 no-padding form-group">
      <input type="number" className="form-control" ref={(ref)=> {
        content[difficulty] = ref;
      }} onBlur={content.editNumber.bind(content)}/>
    </div>
  </div>
);

const labels = [
  {
    text: '简单',
    difficulty: 'easy'
  },
  {
    text: '一般',
    difficulty: 'normal'
  },
  {
    text: '困难',
    difficulty: 'hard'
  }
];


export default class LogicPuzzle extends Component {

  editNumber() {
    let definition;
    if (this.inputInfo.checked) {
      definition = {
        easy: parseInt(this.easy.value) || 0,
        normal: parseInt(this.normal.value) || 0,
        hard: parseInt(this.hard.value) || 0
      };
    }
    this.props.editLogicPuzzle({definition});
  }

  componentDidMount() {
    this.inputInfo.checked = this.props.toggleStatus;
  }

  render() {
    return (
      <div className="paper-logicPuzzle">
        <div className="col-md-6 col-sm-offset-3">
          <div className="row">
            <div className="col-md-2">
              <span className="pull-right">逻辑题</span>
            </div>
            <div className="col-md-6 form-group">
              <input type="checkBox" ref={(ref)=> {
                this.inputInfo = ref;
              }}/>
            </div>
          </div>
        </div>
        <div className="row">
          {labels.map((label, index)=>(
            <DifficultySetter key={index} {...label} content={this} disabled={!this.props.toggleStatus}/>
          ))
          }
        </div>
        <div className="paper-border">
        </div>
      </div>
    )
  }
}