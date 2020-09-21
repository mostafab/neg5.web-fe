import { connect } from 'react-redux';

import TournamentPageContent from './../components/tournament/TournamentPageContent';

const mapStateToProps = state => ({
  tournament: state.currentTournament,
  teams: state.tournamentTeams.teams,
});

export default connect(mapStateToProps, null)(TournamentPageContent);