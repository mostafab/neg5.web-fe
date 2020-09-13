import React from 'react';
import { Link } from 'react-server';

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
                <Link path={`/tournaments/${match.tournamentId}/matches/${match.id}`}>
                    View
                </Link>
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
