import React from 'react';

class EditStudent extends React.Component{
  EditStudentInfo() {
    return this.props.studentInfo.map((data, index) => {
      return <ul key={index} onClick={this.props.exitInfoBox}><div className="exit-edit-info">X</div><li>{data.username}<input type="text"/></li><li>{data.last_name}</li><li>{data.first_name}</li></ul>
    })
  }
  render(){
    return(
      <div className="popup">
      <div className="popup_inner">
      {this.EditStudentInfo()}
      </div>
      </div>
    )
  }
}

export default EditStudent;