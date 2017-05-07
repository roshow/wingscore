import React, { Component } from 'react';
import './App.css';
import PlayerForm from './../components/PlayerForm';
import PlayerManager from './../components/PlayerManager';
import GenerateRoundButton from './../components/GenerateRoundButton';
import { connect } from 'react-redux'; 

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
        <GenerateRoundButton round={ this.props.round } />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  round: state.round
})

export default connect(mapStateToProps)(App);
