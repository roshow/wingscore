import React from 'react'
import { Row, Column } from './Flexgrid'
import './Leaderboard.css'
import { RemovePlayer } from './../actions'
import { connect } from 'react-redux'; 

const PlayerManager = ({ players, removePlayer }) => (
  <section className="Leaderboard">
    <Column>
      <Row>
        <Column>Name</Column>
        <Column></Column>
      </Row>
      { 
        Object.keys(players).map( ( key, i ) => (
          <Row key={ i }>
            <Column>{ players[key].name }</Column>
            <Column><div><button onClick={ removePlayer.bind(this, players[key].name) }>Remove</button></div></Column>
          </Row>
        ))
      }
    </Column>
  </section>
)

const mapStateToProps = state => ({
  players: state.players
});

export default connect(mapStateToProps, {
  removePlayer: RemovePlayer
})(PlayerManager);

