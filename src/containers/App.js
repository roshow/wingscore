import React, { Component } from 'react';
import './App.css';
import LeaderboardContainer from './LeaderboardContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>WingScore</h2>
        </div>
        <p className="App-intro">
          Tournament software for the X-Wing Miniatures Game.
        </p>
        <LeaderboardContainer />
      </div>
    );
  }
}

export default App;
