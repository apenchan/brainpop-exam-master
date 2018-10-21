import React from 'react';
// import ClassListBox from './ClassListBox';
import StudentsList from './StudentsList';
import axios from 'axios';

class ClassList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: JSON.parse(localStorage.getItem('students')) || [], 
      className: '',
      search: '',
    }
  }

  classesDropdown = e =>{
    // console.log(e.target.value);
    console.log(e)
    this.props.callBackClasses(e)
  }

  handleChange = (e,data) => {
    let classes = this.props.classes;
    this.classesDropdown(e.target.value);
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
  render() {
    console.log(this.props)
    // const makeDropDown = () => {
    //   return this.props.classes.map(x => {
    //     console.log(x)
    //     return (
    //       <option key={x.index} value={x.id}>
    //         {x.name}
    //       </option>
    //     );
    //   });
    // };
   const displayClass =() => {
      return this.props.classes.map((data, index) => {
        return <option value={data.id} key={index}>{data.name}</option>
      })
    }
    return (
      <div>
      <div className="class-list">
        <select className="select-dropdown" value={this.props.value} onChange={this.handleChange}>
          <option value='' disabled>
          {this.props.defaultOption}
          </option>

          {displayClass()}
        </select>
      </div>
      <div><StudentsList students={this.state.students}/></div>
    </div>
    )
  }
}

export default ClassList;