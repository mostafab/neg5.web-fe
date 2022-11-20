import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { orderBy } from 'lodash';

import { updateTeamPool, addTeam, cancelAddTeam, submitTeam } from './../actions/team';
import { onAddPhase } from './../actions/phase';
import { onAddPool } from './../actions/pool';

import TournamentPageContent from './../components/tournament/TournamentPageContent';

const mapStateToProps = state => ({
  tournament: {
    ...state.currentTournament,
    phases: orderBy(state.currentTournament.phases, ['addedAt'], ['desc']),
  },
  teams: orderBy(state.tournamentTeams.teams, ['name']),
  addingTeam: state.tournamentTeams.addingTeam,
  savingTeam: state.tournamentTeams.savingNewTeam,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateTeamPool,
    onAddPhase,
    onAddPool,
    addTeam,
    cancelAddTeam,
    submitTeam,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TournamentPageContent);