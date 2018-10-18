import React from 'react';

class Filtered extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      search: '',
      showInfo: true
    }
  }
  render(){
    return(
      // <div>
      <table>
        {this.props.search != "" ? this.props.filteredStudents.map(function(student){
          return <tr data-category={student} key={student.id} className="filtered-name"><td>{student.first_name} </td><td>{student.last_name}</td></tr>
        }): ""}

      </table>
      // {/* </div> */}
    )
  }
}

export default Filtered;