import React from 'react';
import { Card, Statistic, Badge } from 'antd';

import './MatchCard.less';

const renderTeamPoints = team => {
    return (
        <div>
            <div>{ team.name }</div>
            <div>
                {
                    team.tossupTotals.map(tt => (
                        <Badge
                            key={tt.value}
                            count={`${tt.value}:${tt.number}`}
                            className={'answer-type ' + tt.type}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ({
    match
}) => {
    const title = `${match.teams[0].name} (${match.teams[0].score}) - ${match.teams[1].name} (${match.teams[1].score})`
    return (
        <div className="MatchCard">
            <Card title={title} hoverable size="small">
                <div className="statistics">
                    <Statistic
                        title="TUH"
                        value={match.tossupsHeard}
                    />
                    <div>
                        { renderTeamPoints(match.teams[0])}
                        { renderTeamPoints(match.teams[1])}
                    </div>
                </div>
            </Card>
        </div>
    )
}