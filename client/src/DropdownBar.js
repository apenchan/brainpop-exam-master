import React from 'react';
import ClassList from './ClassList';
import StudentsList from './StudentsList';
import axios from 'axios';

class DropdownBar extends React.Component{
  constructor(props){
    super(props);
    this.state={
      classes: []
    }
  }
  //here is where I should do my GET request
  componentWillMount(classSubjects){
    let currentComponent = this;
    let classesList = `https://qa.brainpop.com/devtest/api/classes`
    axios.get(classesList)
    .then(response=>{
      console.log(response.data)
      currentComponent.setState({ classes: response.data })
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
        <ClassList classes={this.state.classes} />
        </form>
      </div>
    )
  }
}

export default DropdownBar;