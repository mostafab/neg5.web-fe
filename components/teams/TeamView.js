import React from 'react';
import { Typography } from 'antd';

import TeamMatches from './TeamMatches';
import TeamPlayers from './TeamPlayers';

import './TeamView.less';

const { Title } = Typography;

const TeamView = ({
    name,
    players,
    divisions,
    matches,
}) => {
    return (
        <div className="TeamView">
            <Title level={2}>{ name }</Title>
            <div className='player-container'>
                <TeamPlayers players={players} />
            </div>
            <TeamMatches matches={matches} />
        </div>
    )
}

export default TeamView;
