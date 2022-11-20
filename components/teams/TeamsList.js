import React from 'react';
import { Link } from 'react-server';
import { Button, Card, List } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import TeamModal from './../teams/TeamModal';

import './TeamsList.less';

const TeamsList = ({
    teams,
    onAddTeam,
    addingTeam,
    saving,
    onCancel,
    numPlayers,
    onSubmitTeam,
    tournamentId,
}) => {
    return (
        <div className="TeamsList">
            { addingTeam
                && <TeamModal
                        onCancel={onCancel}
                        numPlayers={numPlayers}
                        onSubmitTeam={onSubmitTeam}
                        saving={saving}
                    />
            }
            <Card
                title="Teams"
                extra={
                    <Button
                        type="default"
                        title="Add a team"
                        onClick={() => onAddTeam()}
                        icon={<PlusOutlined />}
                    />
                }
            >
                <List
                    bordered
                    dataSource={teams}
                    rowKey={t => t.id}
                    locale={{
                        emptyText: 'No teams',
                    }}
                    renderItem={team => (
                        <List.Item>
                            { team.name }
                        </List.Item>
                    )}
                />
            </Card>
        </div>
    )
}

export default TeamsList;
