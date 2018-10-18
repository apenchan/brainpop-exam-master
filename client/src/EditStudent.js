
import React from 'react';

class EditStudent extends React.Component{
  editStudentInfo() {
    console.log("I am the props", this.props.studentInfo)
    return this.props.studentInfo.map((data, index) => {
      return <div>
            <ul key={index}><img onClick={this.props.exitInfoBox} src="https://www.shareicon.net/data/128x128/2015/10/17/657408_cancel_512x512.png" className="exit-edit-info"/>
            <li>{data.username}<input type="text" placeholder={data.username}/></li>
            <li>{data.last_name}</li>
            <li>{data.first_name}</li>
            </ul></div>
            // <ul key={index}><li>{data.username}</li><li>{data.last_name}</li><li>{data.first_name}</li></ul>
    })
  }
  render(){
    let admin = sessionStorage.getItem('username');
    console.log("I am student info", this.props.studentInfo)
    return(
      <div className="popup">
        <div className="popup_inner">
        {this.editStudentInfo()}
       </div>
       </div>
    )
  }
}

export default EditStudent;