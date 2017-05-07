import React from 'react'
import { Row, Column } from './Flexgrid'
import './Leaderboard.css'

const PlayerManager = ({ players, removePlayer }) => (
  <section className="Leaderboard">
    <Column>
      <Row>
        <Column>Name</Column>
        <Column></Column>
      </Row>
      { 
        players.map( ( player, i ) => (
          <Row key={ i }>
            <Column>{ player.name }</Column>
            <Column><div><button onClick={ removePlayer.bind(this, player.name) }>Remove</button></div></Column>
          </Row>
        ))
      }
    </Column>
  </section>
)

import { connect } from 'react-redux'; 

const mapStateToProps = state => ({
  players: state.players
});

const mapDispatchToProps = {
  removePlayer: function (name) {
    return {
      type: 'REMOVE_PLAYER',
      payload: {
        name 
      }
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PlayerManager);

