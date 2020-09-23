import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateTeamPool } from './../actions/team';
import { onAddPhase } from './../actions/phase';
import { onAddPool } from './../actions/pool';

import TournamentPageContent from './../components/tournament/TournamentPageContent';

const mapStateToProps = state => ({
  tournament: state.currentTournament,
  teams: state.tournamentTeams.teams,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateTeamPool,
    onAddPhase,
    onAddPool,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TournamentPageContent);