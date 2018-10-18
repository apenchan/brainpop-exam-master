
import React from 'react';

class EditStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      retypePassword: '',
      lastName: '',
      firstName: '',
      age: ''
    }
  }
  handleChange=(e) =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  editStudentInfo() {
    console.log("I am the props", this.props.studentInfo)
    return this.props.studentInfo.map((data, index) => {
      return <div className="popup-edit">
        <div className="popup_inner-edit">
          <ul key={index}><img onClick={this.props.exitInfoBox} src="https://www.shareicon.net/data/128x128/2015/10/17/657408_cancel_512x512.png" className="exit-edit-info" />
            <h3 className="edit-info-header">Edit Student Information</h3>
            <i className="note">Please note that inputs are clear. Values you see below are placeholders</i>
            <li>Username*</li><li><input name="username" value={this.state.username} onChange={this.handleChange} className="input-edit" type="text" placeholder={data.username} /></li>
            <li>Password</li><li><input name="password" value={this.state.password} onChange={this.handleChange}  className="input-edit" type="text" placeholder="Change Password" type="password" /></li>
            <li>Retype Password*</li><li><input name="retypePassword" value={this.state.retypePassword} onChange={this.handleChange}  className="input-edit" type="text" placeholder="Retype Password" type="password" /></li>
            <li>Edit Last Name*</li><li><input name="lastName" value={this.state.lastName} onChange={this.handleChange}  className="input-edit" type="text" placeholder={data.last_name} /></li>
            <li>Edit First Name*</li><li><input name="firstName" value={this.state.firstName} onChange={this.handleChange}  className="input-edit" type="text" placeholder={data.first_name} /></li>
            <li>Age</li><li><input name="age" value={this.state.age} onChange={this.handleChange}  className="input-edit" type="text" placeholder={data.age} /></li>
          </ul>
          <div className="btn-container">
          <ul className="form-btns">
          <li className="form-li"><button className="submit-edits" type="submit">Submit</button></li>
          <li className="form-li"><button type="button" onClick={this.props.exitInfoBox}>Cancel</button></li>
          </ul>
          </div>
        </div>
      </div>
      // <ul key={index}><li>{data.username}</li><li>{data.last_name}</li><li>{data.first_name}</li></ul>
    })
  }
  render() {
    let admin = sessionStorage.getItem('username');
    return (
      <div>
        {this.editStudentInfo()}

      </div>
    )
  }
}

export default EditStudent;