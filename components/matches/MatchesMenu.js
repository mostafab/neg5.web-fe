import React from 'react';

import { Menu } from 'antd';

const { SubMenu } = Menu;

const MatchesMenu = ({
    matches,
    numMatches,
}) => {
    return (
        <div className="TournamentMatches">
            <Menu
                style={{ height: '100vh', width: 400 }}
                mode="inline"
                defaultOpenKeys={["matches"]}
            >
                <Menu.Item key="add-match">
                    Add Match
                </Menu.Item>
                <Menu.Item key="start-match">
                    Start a Scoresheet
                </Menu.Item>
                {
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
                                                    <Menu.Item key={`match-${m.id}`} title={description}>
                                                        { description }
                                                    </Menu.Item>
                                                )
                                            })
                                        }
                                    </SubMenu>
                                )
                            })
                        }
                    </SubMenu>
                }
            </Menu>
        </div>
    )
}

export default MatchesMenu;
