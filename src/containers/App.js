import React, { Component } from 'react';
import './App.css';
import PlayerForm from './../components/PlayerForm';
import PlayerManager from './../components/PlayerManager';
import GenerateRoundButton from './../components/GenerateRoundButton';
import { generateMatches, shuffle } from './../logic/pairings'
import { connect } from 'react-redux';


class App extends Component {

  constructor (props) {
    super(props)

    this.handleNewRound = this.handleNewRound.bind(this)
  }

  handleNewRound (e) {
    e.preventDefault()
    // const playerIds = Object.keys(this.props.players)
    const round = this.props.round + 1
    const confirmMsg = round === 1 ? 'Start tournament?' : `Generation Round ${ round }?`
    if (!window.confirm(confirmMsg)) {
      return
    }
    const newMatches = generateMatches(shuffle(Object.keys(this.props.players)), round)
    this.props.newRound(round, newMatches)
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
        <GenerateRoundButton round={ this.props.round } handleClick={ this.handleNewRound }/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  round: state.round,
  players: state.players
})

const matchDispatchToProps = {
  newRound: function (round, newMatches) {
    return {
      type: 'NEW_ROUND',
      payload: {
        newMatches,
        round
      }
    }
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
