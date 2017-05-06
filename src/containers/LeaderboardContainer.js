import { connect } from 'react-redux'; 
import Leaderboard from './../components/Leaderboard';

const mapStateToProps = state => ({
  players: state.players
});


export default connect(mapStateToProps)(Leaderboard);