import React from 'react';

import TeamsMenu from './TeamsMenu';
import TeamView from './TeamView';

import './TournamentTeams.less';

const TournamentTeams = ({
    teams,
    selectTeam,
    selectedTeam,
    tournament,
}) => {
    return (
        <div className="TournamentTeams">
            <TeamsMenu teams={teams} onSelectTeam={selectTeam} selectedTeam={selectedTeam} />
            { selectedTeam && <TeamView {...selectedTeam} tournamentPools={tournament.divisions} tournamentPhases={tournament.phases} /> }
        </div>
    )
}

export default TournamentTeams;
