import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { orderBy, keyBy } from 'lodash';

import { selectTeam } from './../actions/team';
import TournamentTeams from './../components/teams/TournamentTeams';

const enrichSelectedTeam = (selectedTeam, teams, matches) => {
    if (!selectedTeam) {
        return null;
    }
    const teamsById = keyBy(teams, 'id');

    const teamId = selectedTeam.id;
    const matchesWithTeam = matches
        .filter(m => {
            return m.teams[0].teamId === teamId
                || m.teams[1].teamId === teamId
        })
        .map(m => ({
            id: m.id,
            round: m.round,
            score: m.teams[0].teamId === teamId ? m.teams[0].score : m.teams[1].score,
            opposingScore: m.teams[0].teamId === teamId ? m.teams[1].score : m.teams[0].score,
            opposingTeamName: m.teams[0].teamId === teamId
                ? teamsById[m.teams[1].teamId].name
                : teamsById[m.teams[0].teamId].name,
            tossupsHeard: m.tossupsHeard,
            tournamentId: m.tournamentId,
        }))

    return {
        ...selectedTeam,
        matches: orderBy(matchesWithTeam, ['round']),
    };
}

const mapStateToProps = state => {
    return {
        teams: orderBy(state.tournamentTeams.teams, ['name']),
        selectedTeam: enrichSelectedTeam(
            state.tournamentTeams.selectedTeam,
            state.tournamentTeams.teams,
            state.tournamentMatches.matches
        ),
      }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectTeam,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TournamentTeams);