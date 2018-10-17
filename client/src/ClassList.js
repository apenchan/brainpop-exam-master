import React from 'react';
// import ClassListBox from './ClassListBox';
import StudentsList from './StudentsList';
import axios from 'axios';

class ClassList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: JSON.parse(localStorage.getItem('students')) || [], 
      search: '',
    }
  }

  handleChange = (e,data) => {
    let classes = this.props.classes;
    let className = `https://qa.brainpop.com/devtest/api/classes/` + e.target.value + `/students`
    let xhr = new XMLHttpRequest();
    xhr.open('GET', className, true);
    xhr.withCredentials = true;
    xhr.send(null)
    axios.get(className)
    // axios.get(className ,{
    //   credentials: 'include',
    // // })
    //   headers:{
    //   'Cache-Control': 'no-cache',
    //   "Access-Control-Allow-Origin": "*",
    //   }
    // })
      .then(response => {
        console.log(response.data)
        localStorage.setItem("students", JSON.stringify(response.data));
        localStorage.getItem('students');
        console.log(JSON.stringify(response.data))
        localStorage.getItem("students");
        this.setState({
          students: response.data
        })
        // localStorage.setItem("newItem", "");
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
  //is value select? if not, then show "select" option
  displayClass() {
    return this.props.classes.map((data, index) => {
      return <option placeholder="Select" value={data.id} key={index}>{data.name}</option>
    })
  }
  // sortBy = (key) =>{
  //   // let lastNames = [...this.props.students]
  //   // console.log(lastNames)
  //   // return lastNames
  //   this.setState({
  //     students: this.state.students.sort((a, b) => a[key] < b[key])
  //   })
  //   // return lastNames
  // }
  render() {
    return (
      <div className="class-list">
      <select onChange={this.handleChange}>{this.displayClass()}</select>
      <div><StudentsList students={this.state.students}/></div>
      </div>
    )
  }
}

export default ClassList;