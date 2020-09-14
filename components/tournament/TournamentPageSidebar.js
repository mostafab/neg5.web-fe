import React from 'react';
import { Menu } from 'antd';

import './TournamentPageSidebar.less';

export const Panes = {
    TOURNAMENT: 'tournament',
    TEAM: 'teams',
    MATCHES: 'matches',
    SCORESHEET: 'scoresheet',
}

export default ({
    tournament,
    pane,
}) => {
    return (
        <Menu
            style={{ height: '100vh' }}
            defaultSelectedKeys={pane}
            mode="inline"
            className="TournamentPageSidebar"
        >
            <Menu.Item
                key={Panes.TOURNAMENT}
                className="tournament-header"
            >
                <a href={`/tournaments/${tournament.id}`}>Overview</a>
            </Menu.Item>
            <Menu.Item key={Panes.TEAM}>
                <a href={`/tournaments/${tournament.id}/teams`}>Teams</a>
            </Menu.Item>
            <Menu.Item key={Panes.MATCHES}>
                <a href={`/tournaments/${tournament.id}/matches`}>Matches</a>
            </Menu.Item>
            <Menu.Item key={Panes.SCORESHEET}>
                <a href={`/tournaments/${tournament.id}/scoresheet`}>Scoresheet</a>
            </Menu.Item>
        </Menu>
    );
}