import { connect } from 'react-redux';

import TournamentMatches from './../components/matches/TournamentMatches';
import TournamentUtil from './../util/tournament';

const mapStateToProps = state => {
    return {
        tournament: state.currentTournament,
        matches: TournamentUtil.normalizeAndGroupMatchesByRound(state.tournamentMatches.matches, state.tournamentTeams.teams, state.currentTournament.tossupValues),
        numMatches: state.tournamentMatches.matches.length,
      }
};

export default connect(mapStateToProps, null)(TournamentMatches);