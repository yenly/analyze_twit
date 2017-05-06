import React, { Component } from 'react';
import Client from '../analyze';
import ToneChart from './tone_chart';

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: props.user,
      userTone: [],
      userPersonality: null
    }
  }

  componentDidMount() {
    Client.analyzeTone(this.state.twUsername).then(data => {
      // console.log(data);
      this.setState({ userTone: data.tone_categories });
    });
  }

  render () {
    if(this.state.userTone === []) {
      return (
        <div>Analyzing...</div>
      )
    }
    // console.log(this.state.userTone);
    return (
      <div>
        <h2>Results for @{this.state.username}</h2>
        <ToneChart userTone={this.state.userTone} />
      </div>
    )
  }
}

export default Results;
