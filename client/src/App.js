import React from 'react';
import ReactDom from 'react-dom';
import Routes from './Routes';
import {BrowserRouter} from 'react-router-dom';

class AppWrapper extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="container">
          <h1 className="main-title">BrainPOP Exam</h1>
            <Routes/>
          </div>
        </div>
      </BrowserRouter>

    );
  }
}

ReactDom.render(
  <AppWrapper/>, document.getElementById('react-app'));
