import React, { Component } from 'react';
import Client from '../analyze';
import ToneChart from './tone_chart';

class Results extends Component {
  constructor(props) {
    super(props);

    // console.log(props);

    this.state = {
      username: props.user,
      userTone: [],
      userPersonality: null
    }
  }

  componentDidMount() {
    // console.log(this.state.username);
    Client.analyzeTone(this.state.username).then(data => {
      // console.log(data);
      this.setState({ userTone: data.tone_categories });
    });
  }

  render () {
    if(this.state.userTone === []) {
      return (
        <div>Analyzing...</div>
      )
    } else {
      const [emotionTone, langTone, socialTone] = this.state.userTone;

      return (
        <div>
          <h2>Results for @{this.state.username}</h2>
          <div className='tone_charts'>
            {emotionTone &&
              <ToneChart userTone={emotionTone} />
            }
            {langTone &&
              <ToneChart userTone={langTone} />
            }
            {socialTone &&
              <ToneChart userTone={socialTone} />
            }
          </div>

          {/* <div>{JSON.stringify(this.state.userTone, null, 2)}</div> */}
        </div>
      )
    }

  }
}

export default Results;
