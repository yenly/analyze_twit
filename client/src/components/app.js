import React, { Component } from 'react';
import '../index.css';
// import axios from 'axios';
import UserInput from './user_input';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twUsername: '',
      userTone: [],
      userPersonality: null
    };
  }

  componentDidMount() {

  }

  handleSubmit = (username) => {
    this.setState({ twUsername: username })
  }

  render() {
    return (
      <div className="container">
        <UserInput onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
