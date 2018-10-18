
import React from 'react';

class EditStudent extends React.Component{
  editStudentInfo() {
    console.log("I am the props", this.props.studentInfo)
    return this.props.studentInfo.map((data, index) => {
      return       <div className="popup-edit">
      <div className="popup_inner-edit">
            <ul key={index}><img onClick={this.props.exitInfoBox} src="https://www.shareicon.net/data/128x128/2015/10/17/657408_cancel_512x512.png" className="exit-edit-info"/>
            <h3 className="edit-info-header">Edit Student Information</h3>
            <li>Username*</li><li><input type="text" placeholder={data.username}/></li>
            <li>Password</li><li><input type="text" placeholder="Change Password" type="password"/></li>
            <li>Retype Password*</li><li><input type="text" placeholder="Retype Password" type="password"/></li>
            <li>Edit Last Name*</li><li><input type="text" placeholder={data.last_name}/></li>
            <li>Edit First Name*</li><li><input type="text" placeholder={data.first_name}/></li>
            <li>Age</li><li><input type="text" placeholder={data.age}/></li>
            </ul>
            <button className="submit-edits" type="submit">Submit</button><button type="button" onClick={this.props.exitInfoBox}>Cancel</button>
            </div>
            </div>
            // <ul key={index}><li>{data.username}</li><li>{data.last_name}</li><li>{data.first_name}</li></ul>
    })
  }
  render(){
    let admin = sessionStorage.getItem('username');
    console.log("I am student info", this.props.studentInfo)
    return(
      <div>
        {this.editStudentInfo()}
       </div>
    )
  }
}

export default EditStudent;