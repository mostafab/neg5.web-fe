import React from 'react';

import MatchesMenu from './MatchesMenu';

const TournamentMatches = ({
    matches,
    numMatches
}) => {
    return (
        <div className="TournamentMatches">
            <MatchesMenu matches={matches} numMatches={numMatches} />
        </div>
    )
}

export default TournamentMatches;
