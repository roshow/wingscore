import React, { Component } from 'react';
import './App.css';
import PlayerForm from './../components/PlayerForm';
import PlayerManager from './../components/PlayerManager';
import GenerateRoundButton from './../components/GenerateRoundButton';
import { connect } from 'react-redux'; 

class App extends Component {

  constructor (props) {
    super(props)

    this.handleGenerateRound = this.handleGenerateRound.bind(this)
  }

  handleGenerateRound (e) {
    e.preventDefault()
    this.props.generateRound(this.props.round + 1)
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
        <GenerateRoundButton round={ this.props.round } handleClick={ this.handleGenerateRound }/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  round: state.round
})

const matchDispatchToProps = {
  generateRound: function (round) {
    return {
      type: 'NEW_ROUND',
      payload: {
        round
      }
    }
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
