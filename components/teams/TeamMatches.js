import React from 'react';

import { Card, Table, Empty } from 'antd';

import './TeamMatches.less';

const columns = [
    {
      title: 'Round',
      dataIndex: 'round',
      key: 'round',
    },
    {
        title: 'Opponent',
        dataIndex: 'opposingTeamName',
        key: 'opponentName',
        render: (text, match) => {
            return (
                <a href={`/tournaments/${match.tournamentId}/teams/${match.opposingTeamId}`}>{ text }</a>
            )
        }
    },
    {
        title: 'Score',
        dataIndex: 'score',
        key: 'score',
    },
    {
        title: 'Opponent Score',
        dataIndex: 'opposingScore',
        key: 'opposingScore',
    },
    {
        title: 'Tossups Heard',
        dataIndex: 'tossupsHeard',
        key: 'tossupsHeard',
    },
    {
        title: 'View',
        render: (_text, match) => {
            return (
                <a href={`/tournaments/${match.tournamentId}/matches/${match.id}`}>
                    View
                </a>
            )
        },
    }
];

const TeamMatches = ({
    matches
}) => {
    return (
        <div className="TeamMatches">
            <Card title="Matches">
                {
                    matches && matches.length
                        ? <Table rowKey={m => m.id} columns={columns} dataSource={matches} pagination={false} />
                        : (
                            <div className="empty-container">
                                <Empty description="This team hasn't played any matches yet."/>
                            </div>
                        )
                }
            </Card>
        </div>
    )
}

export default TeamMatches;
