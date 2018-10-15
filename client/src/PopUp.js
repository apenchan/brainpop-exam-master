import React from 'react';

class PopUp extends React.Component {
  displayStudentInfo() {
    return this.props.studentInfo.map((data, index) => {
      return <ul key={index}><li>{data.username}</li><li>{data.last_name}</li><li>{data.first_name}</li></ul>
    })
  }
  render() {
    return (
      <div className="popup">
      <div className="popup_inner">
        {this.displayStudentInfo()} 
      </div>
      </div>
    )
  }
}

export default PopUp;