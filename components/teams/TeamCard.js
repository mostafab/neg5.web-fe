import React, { useState } from 'react';
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
    phases,
    onSavePlayer,
    onSaveTeam,
    editable,
}) => {
    const onChange = val => {
        if (isValidName(val)) {
            console.log(val);
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
        <div className="TeamCard">
            <Card title={title}>
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
