import { connect } from 'react-redux';

import TournamentPageSidebar from './../components/tournament/TournamentPageSidebar';

const mapStateToProps = state => ({
  tournament: state.currentTournament,
});

export default connect(mapStateToProps, null)(TournamentPageSidebar);