import React from 'react';
import DropdownBar from './DropdownBar'

class Homepage extends React.Component {
  render() {
    return (
      <div className="main-container">
        <h1 className="main-title">BrainPOP Exam</h1>
        <div className="app-container">
          <DropdownBar />
        </div>
      </div>
    )
  }
}

export default Homepage;