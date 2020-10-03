import React, { useEffect, useState, Fragment } from 'react';
import { Card, Statistic, Badge } from 'antd';

import './MatchCard.less';

const renderTeamPoints = team => {
    return (
        <div>
            <div>{ team.name }</div>
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
    )
}

export default ({
    match
}) => {
    const title = (
        <Fragment>
            <span
                className={match.teams[0].score > match.teams[1].score ? 'winner' : ''}
            >
                {match.teams[0].name} ({match.teams[0].score})
            </span>
            &nbsp; - &nbsp;
            <span
                className={match.teams[1].score > match.teams[0].score ? 'winner' : ''}
            >
                {match.teams[1].name} ({match.teams[1].score})
            </span>
        </Fragment>
    )
    // const title = `${match.teams[0].name} (${match.teams[0].score}) - ${match.teams[1].name} (${match.teams[1].score})`
    const [ isMounted, setMounted ] = useState(false);
    useEffect(() => {
        setMounted(true);
    });
    return (
        <div className="MatchCard">
            <Card title={title} hoverable size="small" onClick={() => console.log(match)}>
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
                { isMounted && <div className="time">{ match.formattedCreatedAt }</div> }
            </Card>
        </div>
    )
}