import React from 'react';
import {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import '../../style/paper-edit.less';

export default class QuizAddButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      homeworkList: [],
      homeworkTypes: [{activeStatus: 'active', title: '全部', stackId: null}]
    }
  }

  addHomeworkQuiz() {
    this.setState({
      show: true
    }, ()=> {
      this.setState({
        homeworkList: [{
          checked: '',
          homeworkName: 'homework1',
          stackId: 1,
          makerName: 'maker1',
          createTime: '2017-2-3',
          id: '1'
        }, {
          checked: '',
          homeworkName: 'homework2',
          stackId: 2,
          makerName: 'maker1',
          createTime: '2017-2-3',
          id: '2'
        }]
      })
    })
  }

  hideModal() {
    this.setState({
      show: false
    })
  }

  componentDidMount() {
    const stacks = [{activeStatus: '', title: 'Java', stackId: 1}, {activeStatus: '', title: 'JavaScript', stackId: 2}];
    let homeworkTypes = this.state.homeworkTypes.concat(stacks);
    this.setState({
      homeworkTypes
    })
  }

  changeType(index) {
    const homeworkTypes = this.state.homeworkTypes.map((item, i)=> {
      i === index ? item.activeStatus = 'active' : item.activeStatus = '';
      return item;
    });
    const stackId = this.state.homeworkTypes.find(item => item.activeStatus === 'active').stackId;

    const homeworkList = this.props.stacks.filter(stack=>stack.stackId === stackId );
    this.setState({
      homeworkTypes
    }, ()=> {
      this.setState({
        homeworkList
      })
    })
  }

  selectHomework(e) {
    const selectedId = e.target.value;
    const checked = e.target.checked;
    const homeworkList = this.state.homeworkList.map((item)=> {
      return Object.assign({}, item, {
        checked: item.id === selectedId ? checked : item.checked
      });
    });
    this.setState({
      homeworkList
    })
  }

  confirmAddHomework(){
    this.hideModal();
    let quizzes=[];
    let items = this.state.homeworkList.filter(item=>{
     return item.checked === true;
    });
    items.forEach((item)=>{
      if(item.checked && item.disabled === false){
        let id = item.id;
        quizzes.push({
          id
        })
      }
    });

    this.props.editHomework({
      quizzes,
      sectionIndex:this.props.sectionIndex
    })
  }

  render() {

    let homeworkTypeList = this.state.homeworkTypes.map((item, index) => {
      return <li role='presentation' key={index}
                 className={item.activeStatus}>
        <a onClick={this.changeType.bind(this, index)}>{item.title}</a>
      </li>;
    });

    const homeworkList = this.state.homeworkList || [];
    let homeworkListHTML = homeworkList.map(({checked, disabled, homeworkName, stackId, makerName, createTime, id}, index)=> {
      const title = this.state.homeworkTypes.find(item=>item.stackId === stackId).title;
      return (
        <tr key={index}>
          <th scope="row">
            <input disabled={disabled}
                   type='checkbox' name='homework'
                   value={id}
                   checked={checked} onChange={this.selectHomework.bind(this)}/>
          </th>
          <td> {homeworkName}</td>
          <td> {title}</td>
          <td> {makerName}</td>
          <td>{createTime}</td>
        </tr>
      )
    });
    return (
      <div className="add-section">
        <i className="fa fa-plus fa-small" onClick={this.addHomeworkQuiz.bind(this)}> </i>
        <Modal show={this.state.show}>
          <Modal.Header id='contained-modal-title-lg'>
            <Modal.Title>
              <label className='col-sm-3 table-header-height'>试题列表</label>
              <i className='fa fa-times pull-right' onClick={this.hideModal.bind(this)}> </i>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <ul className='nav nav-tabs' role='tablist'>
                {homeworkTypeList}
              </ul>
            </div>
            <div>
              <table className='table table-striped table-bordered table-hover'>
                <thead>
                <tr className='form-title'>
                  <th></th>
                  <th className='sorting'> 题目名称</th>
                  <th className='sorting'> 题目类型</th>
                  <th className='sorting'> 创建者</th>
                  <th className='sorting'> 创建时间</th>
                </tr>
                </thead>
                <tbody>
                {homeworkListHTML}
                </tbody>
              </table>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.confirmAddHomework.bind(this)}>确定</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}