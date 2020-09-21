import React from 'react';

import TournamentCard from './TournamentCard';
import TournamentPhases from './TournamentPhases';

import './TournamentPageContent.less';

export default ({
    tournament,
    teams
}) => {
    return (
        <div className="TournamentPageContent">
            <TournamentCard {...tournament} />
            <TournamentPhases
                phases={tournament.phases}
                pools={tournament.divisions}
                teams={teams}
            />
        </div>
    )
}