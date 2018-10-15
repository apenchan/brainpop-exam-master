import React from 'react';
import axios from 'axios';

class GetStudentInfo extends React.Component{
  constructor(props){
    super(props);
    this.state={
      showInfo: false
    }
  }
  handleShow = (e) => {
    e.preventDefault();
    let showInfo = this.state.showInfo;
    console.log(e.target)
    this.setState({
      showInfo: !this.state.showInfo
    })
    if(showInfo == true){
      console.log("i am true")
    }
  }
  render(){
    console.log(this.state.showInfo)
    console.log("student props", this.props)
    return (
      <button type="button" onClick={this.handleShow}>Click me!</button>
    )
  }
}

export default GetStudentInfo;