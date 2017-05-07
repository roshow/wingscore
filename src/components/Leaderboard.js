import React from 'react'
import { Row, Column } from './Flexgrid'
import './Leaderboard.css'

const Leaderboard = ({ players }) => (
  <section className="Leaderboard">
    <Column>
      <Row>
        <Column>Rank</Column>
        <Column>Name</Column>
        <Column>Record</Column>
        <Column>Points</Column>
        <Column>MOV</Column>
      </Row>
      { 
        players.map( ( player, i ) => (
          <Row key={ i }>
            <Column>{ i + 1 }</Column>
            <Column>{ player.name }</Column>
            <Column>{ player.wins }-{ player.losses }</Column>
            <Column>{ player.wins }</Column>
            <Column>{ player.mov }</Column>
          </Row>
        ))
      }
    </Column>
  </section>
)

export default Leaderboard