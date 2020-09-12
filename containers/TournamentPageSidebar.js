import { connect } from 'react-redux';
import { orderBy } from 'lodash';

import TournamentPageSidebar from './../components/tournament/TournamentPageSidebar';

const mapStateToProps = state => ({
  tournament: state.currentTournament,
  teams: orderBy(state.tournamentTeams.teams, ['name']),
});

export default connect(mapStateToProps, null)(TournamentPageSidebar);