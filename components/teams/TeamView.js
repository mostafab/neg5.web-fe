import React from 'react';
import { Typography, Card } from 'antd';

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
            <Card title="Team Matches">
                { JSON.stringify(matches) }
            </Card>
        </div>
    )
}

export default TeamView;
