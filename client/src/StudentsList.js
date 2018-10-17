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

  renderFilterStudents() {
    console.log("hellllloooo", this.state.lastNames)
    return this.state.lastNames.map((params, index) => <StudentsListBox key={index} {...params} search={this.state.search} filterStudents={this.filterStudents}/>)
  }
  // sortBy = (key) =>{
  //   let sortStudentsArray = [...this.props.students]
  //   this.setState({
  //     sortStudentsArray: sortStudentsArray.sort((a, b) => a < b)
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
      console.log(lastNames)
      console.log("I was clicked")
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
        {this.props.students.length > 1 ? <input type="text" value={this.state.search} placeholder="Search Last Name" onChange={this.filterStudents} /> : ""}
       {this.props.students ? <button type="button"  onClick={()=>{this.sortBy('last_name')}}>Sort</button> : ""}
        <ul> 
          {this.state.sortLastNames == true ? this.renderFilterStudents() : this.renderStudents()}
        </ul>
        <Filtered search={this.state.search} filterStudents={this.filterStudents} filteredStudents={this.state.filteredStudents}/>
      </div>
    )
  }
}

export default StudentsList;