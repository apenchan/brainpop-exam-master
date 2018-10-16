import React from 'react';
import axios from 'axios';
import Homepage from './Homepage'
import LoginForm from './LoginSignUp'

class App extends React.Component {
  componentWillMount() {
    let jwt = sessionStorage.jwt;
    const { auth, history, setNextRoute } = this.props
    if (!jwt) {
      history.push('/login')
    }
    axios.get("http://localhost:3000/currentuser", {
      headers: {
        "Authorization": "Bearer " + jwt
      }
    }
    ).then(function (response) {
      console.log(response);
    })

  }
  render() {
    return (
      <div>
        <Homepage />
      </div>
    );
  }
}

export default App;