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
    }
  }

  addHomeworkQuiz() {
    this.setState({
      show: true
    }, ()=> {
      this.setState({
        homeworkList: [{
          title: 'react',
          stack: "Javascript",
          _id: '12345'
        }, {
          title: 'jersey',
          stack: "Java+Gradle",
          _id: '12346'
        }]
      })
    })
  }

  hideModal() {
    this.setState({
      show: false
    })
  }

  selectHomework(e) {
    const selectedId = e.target.value;
    const checked = e.target.checked;
    const homeworkList = this.state.homeworkList.map((item)=> {
      return Object.assign({}, item, {
        checked: item._id === selectedId ? checked : item.checked
      });
    });
    this.setState({
      homeworkList
    })
  }

  confirmAddHomework() {
    this.hideModal();

    let quizzes = [];
    let items = this.state.homeworkList.filter(item=> {
      return item.checked === true;
    });

    items.forEach((item)=> {
      if (item.checked) {
        let id = item._id;
        quizzes.push({
          id
        })
      }
    });

    this.props.editHomework({
      quizzes,
      sectionIndex: this.props.sectionIndex
    })
  }

  render() {
    const homeworkList = this.state.homeworkList || [];
    let homeworkListHTML = homeworkList.map(({checked, disabled, title, stack, _id}, index)=> {
      return (
        <tr key={index}>
          <th scope="row">
            <input disabled={disabled}
                   type='checkbox' name='homework'
                   value={_id}
                   checked={checked} onChange={this.selectHomework.bind(this)}/>
          </th>
          <td> {title}</td>
          <td> {stack}</td>
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
              <table className='table table-striped table-bordered table-hover'>
                <thead>
                <tr className='form-title'>
                  <th></th>
                  <th className='sorting'> 题目名称</th>
                  <th className='sorting'> 技术栈</th>
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