import React from 'react';
import { Typography } from 'antd';

import TeamMatches from './TeamMatches';
import TeamPlayers from './TeamPlayers';
import TeamPools from './TeamPools';

import './TeamView.less';

const { Title } = Typography;

const TeamView = ({
    name,
    players,
    divisions,
    tournamentPhases,
    tournamentPools,
    matches,
}) => {
    return (
        <div className="TeamView">
            <Title level={2}>{ name }</Title>
            <div className='player-container'>
                <TeamPlayers players={players} />
                <TeamPools teamPools={divisions} pools={tournamentPools} phases={tournamentPhases} />
            </div>
            <TeamMatches matches={matches} />
        </div>
    )
}

export default TeamView;
