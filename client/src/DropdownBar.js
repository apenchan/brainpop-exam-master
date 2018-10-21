import React from 'react';
import ClassList from './ClassList';
import StudentsList from './StudentsList';
import axios from 'axios';

class DropdownBar extends React.Component{
  constructor(props){
    super(props);
    this.state={
      selected: false,
      classTitle: '',
      // classTitle: JSON.parse(localStorage.getItem('classTitle')) || '',
      classes: JSON.parse(localStorage.getItem('classes')) || []
    }
  }

  componentDidMount(){
    this.callBackClasses();
  }
  //here is where I should do my GET request
  callBackClasses = () =>{
    let currentComponent = this;
    let classesList = `https://qa.brainpop.com/devtest/api/classes`
    axios.get(classesList)
    .then(response=>{
      console.log(response.data)
      // localStorage.setItem("classTitle", JSON.stringify(response.data.name));
      // localStorage.getItem('classTitle');
      localStorage.setItem("classes", JSON.stringify(response.data));
      localStorage.getItem('classes');
      currentComponent.setState({ classes: response.data, classTitle: response.data.name })
      return classesList;
      })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }
  render(){
    return(
      <div className="dropdown-bar">
        <form className="dropdown-form" >
        <ClassList callBackClasses={this.callBackClasses} value={this.state.classTitle} defaultOption="select class" selected={this.state.selected} classes={this.state.classes} />
        </form>
      </div>
    )
  }
}

export default DropdownBar;
