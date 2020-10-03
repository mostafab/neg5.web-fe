import React, { Fragment } from 'react';
import { Divider } from 'antd';

import RoundMatches from './RoundMatches';

import './TournamentMatches.less';

const TournamentMatches = ({
    matches,
    numMatches
}) => {
    return (
        <div className="TournamentMatches">
            {
                matches.map(matchRound => (
                    <Fragment key={matchRound.round}>
                        <RoundMatches
                            round={matchRound.round}
                            matches={matchRound.matches}
                        />
                        <Divider />
                    </Fragment>
                ))
            }
        </div>
    )
}

export default TournamentMatches;
