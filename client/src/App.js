import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    user_tone: [],
  };

  componentDidMount() {
    // fetch('https://api.github.com/users/yenly', {
    //   accept: 'application/json',
    // })
    //   .then(function(res) {
    //     return res.json();
    //   })
    //   .then(function(json) {
    //     console.log(json);
    //   });
    // axios.get('users')
    // .then(function(response) {
    //   console.log(response.data);
    //   console.log(response.status);
    // });
    fetch('users')
    .then(res => res.json())
    .then(data => {
      console.log(data.users);
      this.setState({ users: data.users });
    });

    fetch('twit/mindfullycrafts')
    .then(res => res.json())
    .then(data => {
      // console.log(data.tone_categories);

      this.setState({ user_tone: data.tone_categories });
      // console.log(this.state.user_tone);
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <h3>Example api call to fetch users:</h3>
          {this.state.users.map(user =>
           <p key={user.id}>{user.username}</p>
         )}

         <h3>Example call to fetch tone for twitter user:</h3>
         {this.state.user_tone.map(tones =>
           <section key={tones.category_id}>
             {tones.category_name}<br />
             <ul>
               {tones.tones.map(tone =>
                 <li key={tone.tone_id}>{tone.tone_name}: {tone.score}</li>
                )}
              </ul>

           </section>
         )}

       </div>
      </div>
    );
  }
}

export default App;
