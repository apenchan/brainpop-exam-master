import React from 'react';
import axios from 'axios';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }
  handleSignUpForm = (e) => {
    this.setState({ [e.target.id]: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    axios.post("/user/register", {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      password: this.state.password
    }).then(function (response) {
      console.log(response.data);
      alert('Your account was created, go ahead and login')
    }).catch(function (error) {
      console.log(error);
    });
    this.setState({
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" className="form-control signup-control" id="username" required="true" value={this.state.username} placeholder="Create Username" onChange={this.handleSignUpForm} />
        <input type="password" className="form-control signup-control" id="password" required="true" value={this.state.password} placeholder="Create Password" onChange={this.handleSignUpForm} />
        <button className="submit-event signup-control" type="submit">Create Account</button>
      </form>
    )
  }
}

export default Signup;