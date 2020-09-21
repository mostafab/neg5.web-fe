import React from 'react';

import TournamentCard from './TournamentCard';
import TournamentPhases from './TournamentPhases';

import './TournamentPageContent.less';

export default ({
    tournament,
    teams,
    updateTeamPool,
}) => {
    return (
        <div className="TournamentPageContent">
            <TournamentCard {...tournament} />
            <TournamentPhases
                phases={tournament.phases}
                pools={tournament.divisions}
                teams={teams}
                onUpdateTeamPool={updateTeamPool}
            />
        </div>
    )
}