import React from 'react';
import StudentsListBox from './StudentsListBox';
import Filtered from './Filtered';

class StudentsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortLastNames: false,
      lastNames: [],
      isShown: false,
      filteredStudents: [],
      search: ''
    }
  }
  renderStudents() {
    return this.props.students.map((params, index) => <StudentsListBox key={index} {...params} search={this.state.search} filterStudents={this.filterStudents}/>)
  }

  // filteredStudents = () =>{
  //   this.setState({
  //     search: e.target.value,
  //     filteredStudents: this.props.students
  //   })
  // }

  filterStudents = (e) => {
    let filteredList = this.props.students
    console.log(e.target.value)
    filteredList = filteredList.filter(function (student) {
      return student.last_name.toLowerCase().search(
        e.target.value.toLowerCase()) !== -1;
    })
    if (!e.target.value.length < 0) {
      return " "
    }
    this.setState({
      search: e.target.value,
      // filtered: true,
      filteredStudents: filteredList
    })
  }
  //NEED TO COME BACK TO===================================
  //I need to sort here
  //   sortStudents = () => {
  //     let newArray = [...this.props.students]
  //     let sortLastNames = this.state.sortLastNames;
  //     let lastName;
  //     let lastNames = this.state.lastNames
  //     for (var i = 0; i < newArray.length; i++) {
  //       lastName = newArray[i].last_name
  //       lastNames.push(lastName)
  //       lastNames.sort()
  //       let newArray = 
  //       console.log(lastNames.sort())
  //     }
  //     // return lastNames.map((params, index) => <StudentsListBox key={index} {...params} />)
  //   }
  //   compareObjects= (a,b) => {
  //     let newArray= [...this.props.students]
  //     console.log(newArray)
  //     return b.lastName.localeCompare(a.lastName) ||
  //     b.firstName.localeCompare(a.firstName) || 0
  // }
  //   handleSort = () => {
  //     this.setState({
  //       sortLastNames: true
  //     })
  //   }
  //============================================================
  render() {
    let filteredStudent = this.props.students.filter(
      (student) =>{
        return student.last_name.indexOf(this.state.search) !== -1
      }
    );
    return (
      <div>
        {this.props.students.length > 1 ? <input type="text" value={this.state.search} placeholder="Search Last Name" onChange={this.filterStudents} /> : ""}
        {/* //   {this.props.students ? <button type="button" onClick={this.handleSort}>Sort by Last Name</button> : ""} */}
        <ul> 
          {this.state.sortLastNames == true ? this.sortStudents() : this.renderStudents()}
        </ul>
        <Filtered search={this.state.search} filterStudents={this.filterStudents} filteredStudents={this.state.filteredStudents}/>
      </div>
    )
  }
}

export default StudentsList;