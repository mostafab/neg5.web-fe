import React from 'react';

import TeamsMenu from './TeamsMenu';
import TeamView from './TeamView';

import './TournamentTeams.less';

const TournamentTeams = ({
    teams,
    selectTeam,
    selectedTeam,
}) => {
    return (
        <div className="TournamentTeams">
            <TeamsMenu teams={teams} onSelectTeam={selectTeam} />
            { selectedTeam && <TeamView {...selectedTeam} /> }
        </div>
    )
}

export default TournamentTeams;
