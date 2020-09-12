import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import UserTournaments from '../components/userTournaments/UserTournaments';
import {
  startCreateTournament,
  cancelCreateTournament,
  goToStage,
  submitTournament
} from './../actions/tournament';

const mapStateToProps = state => ({
  userTournaments: state.userTournaments,
  createTournamentData: state.createTournamentData,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    startCreateTournament,
    cancelCreateTournament,
    goToStage,
    submitTournament
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTournaments);