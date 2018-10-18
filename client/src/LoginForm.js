import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route, Redirect } from 'react-router-dom';

class LoginForm extends Component{
  constructor(props){
    super(props);
    this.state ={
      username: "", 
      password: "", 
      loggedIn: false,
      token: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value })
  }
  handleSubmit(e){
    e.preventDefault();
    axios.post("/auth/login", {
      username: this.state.username,
      password: this.state.password
    }).then((response) => {
      console.log("=======++++++++++++++++")
      console.log(response.data.username)
      console.log("=======++++++++++++++++")
      sessionStorage.setItem('jwt', response.data.token);
      sessionStorage.setItem('username', response.data.username);
      // this.props.getUsername(this.state)
      this.setState({
        username: response.data.username,
        loggedIn: true
      })
      console.log("going through login now");
    }).catch(function(err){
      console.log(err)
    })
  }
  render(){
    console.log(this.props.children)
    if (this.state.loggedIn) {
      return <Redirect to='/' />;
      {this.props.username}
    }
    return(
      <div className="login-form">
      <form onSubmit={this.handleSubmit}>
        <input className="form-control login-control" type="text" id="username" value={this.state.username} required="true" placeholder="Username" onChange={this.handleChange}/>
        <input className="form-control login-control" type="password" id="password" value={this.state.password} required="true" placeholder="Password" onChange={this.handleChange}/>
        <button className="form-control login-control" type="submit">Log In</button>
      </form>
      </div>
    )
  }
}

export default LoginForm;