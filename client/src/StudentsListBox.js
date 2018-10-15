import React from 'react';
import GetStudentInfo from './GetStudentInfo';
import PopUp from './PopUp';
import EditStudent from './EditStudent';
import axios from 'axios'

class StudentsListBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
      studentInfo: [],
      search: '',
      editStudent: false
    }
  }
  getStudents = (e) => {
    // e.preventDefault();
    let showInfo = this.state.showInfo;
    console.log(e.target.value)
    let studentInfo = `https://qa.brainpop.com/devtest/api/students/` + e.target.value
    axios.get(studentInfo)
      .then(response => {
        // console.log("I am response data, hear me roar", response.data)
        this.setState({
          studentInfo: [response.data]
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      })
  }
    onHover = (e) => {
    // e.preventDefault();
    let showInfo = this.state.showInfo;
    // console.log(e.target.value)
    let studentInfo = `https://qa.brainpop.com/devtest/api/students/` + e.target.value
    this.setState(prevState => ({
      showInfo: !prevState.showInfo
    }), () => axios.get(studentInfo)
      .then(response => {
        // console.log("I am response data, hear me roar", response.data)
        this.setState({
          studentInfo: [response.data]
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      })
    )
  }
  mouseLeave = (e) => {
    e.preventDefault()
    let showInfo = this.state.showInfo
    this.setState({
      showInfo: false
    })
  }
    editStudentInfo = (e) => {
    // e.preventDefault();
    let showInfo = this.state.showInfo;
    console.log(e.target.value)
    let studentInfo = `https://qa.brainpop.com/devtest/api/students/` + e.target.value
    this.setState(prevState => ({
      editStudent: !prevState.editStudent
    }), () => axios.get(studentInfo)
      .then(response => {
        console.log("I am response data, hear me roar", response.data)
        this.setState({
          studentInfo: [response.data]
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      })
    )
  }
  exitInfoBox = () =>{
    this.setState({
      editStudent: false
    })
  }
  // sort names here
  //need to pass student info to popup
  render() {
    return (
      <li className="student-names">
        <div>{this.props.first_name} {this.props.last_name}<button id={this.props.id} value={this.props.id} onMouseEnter={this.onHover} onMouseLeave={this.mouseLeave}>hover me</button><button type="button" value={this.props.id} onClick={this.editStudentInfo}>Edit Me!</button></div>
        {this.state.showInfo == true ? <PopUp showInfo={this.state.showInfo} studentInfo={this.state.studentInfo} mouseLeave={this.mouseLeave}/> : ""}
        {this.state.editStudent == true ? <EditStudent studentInfo={this.state.studentInfo} exitInfoBox={this.exitInfoBox}/> : ""}
      </li>
    )
  }
}

export default StudentsListBox;