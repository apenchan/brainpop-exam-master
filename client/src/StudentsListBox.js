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
    let admin = sessionStorage.getItem('username');
    let showInfo = this.state.showInfo;
    let editStudent = this.state.editStudent
    console.log(e.target.value)
    let studentInfo = `https://qa.brainpop.com/devtest/api/students/` + e.target.value
    if(admin == "admin"){
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
  } else {
    alert("only admins can edit this information")
    this.setState({
      editStudent: false
    })
  }
}
  exitInfoBox = () =>{
    this.setState({
      editStudent: false
    })
  }
  getAdmin = () =>{
    let admin = sessionStorage.getItem('username');
    if(admin == "admin"){
      console.log("I am lise")
    }
  }
  // sort names here
  //need to pass student info to popup
  render() {
    let admin = sessionStorage.getItem('username');
    // if(admin == "admin"){
    //   console.log("I am lise")
    // }
    return (
      <div>
      <li className="student-names">
         {this.props.first_name}<div className="space">{''}</div>{this.props.last_name}<button className="info-btn" id={this.props.id} value={this.props.id} onMouseEnter={this.onHover} onMouseLeave={this.mouseLeave}><img className="info-icon" src={"https://bit.ly/2QWnCEP"}/></button>
         <button type="button" value={this.props.id} onClick={this.editStudentInfo}>Edit Me!</button>
        {this.state.showInfo == true ? <PopUp showInfo={this.state.showInfo} studentInfo={this.state.studentInfo} mouseLeave={this.mouseLeave}/> : ""}
        {this.state.editStudent == true ? <EditStudent studentInfo={this.state.studentInfo} exitInfoBox={this.exitInfoBox}/> : ""}
      </li>
      </div>
    )
  }
}

export default StudentsListBox;