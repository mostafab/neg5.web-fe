import React from 'react';

import { Card, List, Empty } from 'antd';

export default ({
    players,
}) => {
    if (!players || players.length === 0) {
        return (
            <div className="TeamPlayers">
                <Card title="Players">
                    <Empty description="This team has no players yet."/>
                </Card>
            </div>
        )
    }
    return (
        <div className="TeamPlayers">
            <List
                header={<h3>Players</h3>}
                bordered
                dataSource={players}
                renderItem={player => (
                    <List.Item>
                        { player.name }
                    </List.Item>
                )}
            />
        </div>
    )
}