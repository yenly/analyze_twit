import React, { Component } from 'react';
import '../index.css';
// import axios from 'axios';
import UserInput from './user_input';
import Results from './results';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twUsername: null,
    };
  }

  handleSubmit = (username) => {
    this.setState({ twUsername: username })
    // this.getTone(this.state.twUsername);
  }

  render() {
    if (!this.state.twUsername) {
      return (
        <div className="container">
          <UserInput onSubmit={this.handleSubmit} />
        </div>
      )
    } else {
      return (
        <div className="container">
          <Results user={this.state.twUsername} />
        </div>
      );
    }

  }
}

export default App;
