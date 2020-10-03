import React from 'react';
import { Card, List, Typography } from 'antd';

import './TeamCard.less';

const { Text } = Typography;

const isValidName = val => val && val.trim().length > 0;

const PlayerRow = ({
    player,
    onSave,
    editable,
}) => {
    const onChange = val => {
        if (isValidName(val)) {
            onSave({
                id: player.id,
                name: val.trim(),
            });
        }
    }
    return (
        <Text
            className="edit-row"
            editable={editable ? { onChange, tooltip: false } : false}
        >
            { player.name }
        </Text>
    )
}

const TeamCard = ({
    team,
    onSavePlayer,
    onSaveTeam,
    editable,
    className = '',
}) => {
    const onChange = val => {
        if (isValidName(val)) {
            onSaveTeam({
                ...team,
                name: val,
            });
        }
    }
    const title = (
        <Text
            className="edit-row"
            editable={editable ? { onChange, tooltip: false } : false}
        >
            { team.name }
        </Text>
    )
    return (
        <div className={`TeamCard ${className}`}>
            <Card title={title} size="small">
                <List
                    className="players-list"
                    header={<b>Players</b>}
                    dataSource={team.players || []}
                    locale={{ emptyText: 'No Players' }}
                    renderItem={player => (
                        <List.Item>
                          <PlayerRow
                            player={player}
                            onSave={onSavePlayer}
                            editable={editable}
                        />
                        </List.Item>
                      )}
                >
                </List>
            </Card>
        </div>
    )
}

export default TeamCard;
