import React from 'react';

class Filtered extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      search: ''
    }
  }
  render(){
    return(
      <div>
      <ul>
        {this.props.search != "" ? this.props.filteredStudents.map(function(student){
          return <li data-category={student} key={student}>{student.last_name}</li>
        }): ""}
      </ul>
      </div>
    )
  }
}

export default Filtered;