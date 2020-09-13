import React from 'react';
import { Typography } from 'antd';

import TeamMatches from './TeamMatches';

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
            <TeamMatches matches={matches} />
        </div>
    )
}

export default TeamView;
