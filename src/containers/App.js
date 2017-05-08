import React, { Component } from 'react';
import './App.css';
import PlayerForm from './../components/PlayerForm';
import PlayerManager from './../components/PlayerManager';
import GenerateRoundButton from './../components/GenerateRoundButton';
import { connect } from 'react-redux'; 

class App extends Component {

  constructor (props) {
    super(props)

    this.handleNewRound = this.handleNewRound.bind(this)
  }

  handleNewRound (e) {
    e.preventDefault()
    this.props.newRound(this.props.round + 1, Object.keys(this.props.players))
  }

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
        <GenerateRoundButton handleClick={ this.handleNewRound }/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  round: state.round,
  players: state.players
})

const matchDispatchToProps = {
  newRound: function (round, players) {
    return {
      type: 'NEW_ROUND',
      payload: {
        round,
        players
      }
    }
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
