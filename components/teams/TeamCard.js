import React, { useState } from 'react';
import { Card, List, Typography } from 'antd';

import './TeamCard.less';

const { Text } = Typography;

const isValidName = val => val && val.trim().length > 0;

const PlayerRow = ({
    player,
    onSave,
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
            className="PlayerRow"
            editable={{ onChange, tooltip: false }}
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
}) => {
    return (
        <div className="TeamCard">
            <Card title={team.name}>
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
