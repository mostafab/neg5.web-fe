import React from 'react';
import { Link } from 'react-server';

import { Menu } from 'antd';

const { SubMenu } = Menu;

import './TournamentPageSidebar.less';

export const Panes = {
    TOURNAMENT: 'tournament',
    TEAM: 'teams',
    MATCHES: 'matches',
}

export default ({
    tournament,
    teams,
    matches,
    numMatches,
    pane,
    openKeys
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
                <Link path={`/tournaments/${tournament.id}`}>Overview</Link>
            </Menu.Item>
            <Menu.Item key={Panes.TEAM}>
                <Link path={`/tournaments/${tournament.id}/teams`}>Teams</Link>
            </Menu.Item>
            <Menu.Item key={Panes.MATCHES}>
                <Link path={`/tournaments/${tournament.id}/matches`}>Matches</Link>
            </Menu.Item>
            {/* <SubMenu key="teams" title={`Teams (${teams.length})`}>
                {
                    teams.map(team =>
                        <Menu.Item key={`team-${team.id}`}>
                            <Link path={`/tournaments/${tournament.id}/teams/${team.id}`}>
                                {team.name}
                            </Link>
                        </Menu.Item>
                    )
                }
            </SubMenu>
            <SubMenu
                key="matches"
                title={`Matches (${numMatches})`}
            >
                {
                    matches.map(({ round, matches }) => {
                        return (
                            <SubMenu
                                key={`round-${round}`}
                                title={`Round ${round} (${matches.length})`}
                            >
                                {
                                    matches.map(m => {
                                        const firstTeam = m.teams[0];
                                        const secondTeam = m.teams[1];
                                        const description = `${firstTeam.name} (${firstTeam.score}) - ${secondTeam.name} (${secondTeam.score})`
                                        return (
                                            <Menu.Item key={`match-${m.id}`}>
                                                { description }
                                            </Menu.Item>
                                        )
                                    })
                                }
                            </SubMenu>
                        )
                    })
                }
            </SubMenu> */}
        </Menu>
    );
}