import React from 'react';
import StudentsListBox from './StudentsListBox';
import Filtered from './Filtered';

class StudentsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortLastNames: false,
      lastNames: [],
      firstName: [],
      sortStudentsArray: [],
      isShown: false,
      filteredStudents: [],
      search: ''
    }
  }
  renderStudents() {
    return this.props.students.map((params, index) => <StudentsListBox key={index} {...params} search={this.state.search} filterStudents={this.filterStudents}/>)
  }

  renderSortStudents() {
    return this.state.lastNames.map((params, index) => <StudentsListBox key={index} {...params} search={this.state.search} filterStudents={this.filterStudents}/>)
  }
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
  //I need to sort here
    sortStudents = () => {
      let newArray = [...this.props.students]
      let sortLastNames = this.state.sortLastNames;
      let lastName;
      let lastNames = this.state.lastNames
      for (var i = 0; i < newArray.length; i++) {
        console.log(newArray)
        lastName = newArray[i].last_name
        lastNames.push(lastName)
        lastNames.sort()
        // let newArray = 
        console.log(lastNames.sort())

      }
      return lastNames
    }
    handleSort = () => {
      this.setState({
        sortLastNames: true
      })
    }
    sortBy = (key) =>{
      let lastNames = [...this.props.students]
      lastNames.sort((a,b) => a[key].localeCompare(b[key]))
      // return lastNames
      this.setState({
        sortLastNames: true,
        lastNames
      })
      return lastNames
    }
  //============================================================
  render() {
    let students = this.props.students
    return (
      <div>
        <div className="filter-students">
        {this.props.students.length > 1 ? <input type="text" value={this.state.search} placeholder="Search Last Name" onChange={this.filterStudents} /> : ""}
        </div>
        <div className="sort-students">
       {this.props.students ? <button type="button" className="sort-btn" onClick={()=>{this.sortBy('last_name')}}>Sort</button> : ""}
       </div>
        <table> 
          <th><u>First Name</u></th>
          <th><u>Last Name</u></th>
          {this.state.sortLastNames == true ? this.renderSortStudents() : this.renderStudents()}
        </table>
        <Filtered search={this.state.search} filterStudents={this.filterStudents} filteredStudents={this.state.filteredStudents}/>
      </div>
    )
  }
}

export default StudentsList;