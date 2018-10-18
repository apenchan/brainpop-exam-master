import React from 'react';

class PopUp extends React.Component {
  displayStudentInfo() {
    return this.props.studentInfo.map((data, index) => {
      return <ul className="data-ul" key={index}>
        <li className="li-title"><strong>Username</strong></li><li className="data-info">{data.username}</li><br/>
        <li className="li-title"><strong>Last Name</strong></li><li className="data-info">{data.last_name}</li><br/>
        <li className="li-title"><strong>First Name</strong></li><li className="data-info">{data.first_name}</li><br/>
        <li className="li-title"><strong>Age</strong></li><li className="data-info">{data.age}</li><br/>
        </ul>
    })
  }
  render() {
    return (
      <div className="popup">
      <div className="popup_inner">
        <h3 className="student-info-box-header">Student Information</h3>
        {this.displayStudentInfo()} 
      </div>
      </div>
    )
  }
}

export default PopUp;