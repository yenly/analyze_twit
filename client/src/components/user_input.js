import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twUsername: ''
    }
  }

  handleChange = (event) => {
    let userValue = event.target.value;
    //console.log(userValue);

    this.setState({ twUsername: userValue })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state.twUsername);
    this.props.onSubmit(this.state.twUsername)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='twUsername'>Twitter Username:</label>
        <input
          id='username'
          placeholder='twitter_handle'
          type='text'
          autoComplete='off'
          value={this.state.twUsername}
          onChange={this.handleChange}
        />
        <button
          type='submit'
          disabled={!this.state.twUsername}>
          Analyze me!
        </button>
      </form>
    )
  }
}

export default UserInput;
