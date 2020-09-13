import { connect } from 'react-redux';

import TournamentPageContent from './../components/tournament/TournamentPageContent';

const mapStateToProps = state => ({
  tournament: state.currentTournament,
});

export default connect(mapStateToProps, null)(TournamentPageContent);