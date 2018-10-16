import React from 'react';

class EditStudent extends React.Component{
  EditStudentInfo() {
    return this.props.studentInfo.map((data, index) => {
      return <ul key={index}><img onClick={this.props.exitInfoBox} src="https://www.shareicon.net/data/128x128/2015/10/17/657408_cancel_512x512.png" className="exit-edit-info"/><li>{data.username}<input type="text"/></li><li>{data.last_name}</li><li>{data.first_name}</li></ul>
    })
  }
  render(){
    let admin = sessionStorage.getItem('username');
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