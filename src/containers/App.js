import React, { Component } from 'react';
import './App.css';
import PlayerForm from './../components/PlayerForm';
import PlayerManager from './../components/PlayerManager';

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
        <PlayerForm />
        <PlayerManager />
      </div>
    );
  }
}

export default App;
