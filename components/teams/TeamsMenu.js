import React, { useEffect } from 'react';

import { Menu } from 'antd';

const { SubMenu } = Menu;

import './TeamsMenu.less';

const TeamsMenu = ({
    teams,
    onSelectTeam,
    selectedTeam,
}) => {
    const selectedTeamKey = selectedTeam ? [`team-${selectedTeam.id}`] : [];
    return (
        <div className="TeamsMenu">
            <Menu
                style={{ height: '100vh', width: 300 }}
                mode="inline"
                defaultOpenKeys={["teams"]}
                selectedKeys={selectedTeamKey}
            >
                <Menu.Item key="add-team">
                    Add Team
                </Menu.Item>
                <SubMenu
                    key="teams"
                    className="teams-list"
                    title={`Teams (${teams.length})`}
                >
                    {
                        teams.map(team => {
                            return (
                                <Menu.Item
                                    key={`team-${team.id}`}
                                    onClick={() => onSelectTeam(team)}
                                >
                                    { team.name }
                                </Menu.Item>
                            )
                        })
                    }
                </SubMenu>
            </Menu>
        </div>
    )
}

export default TeamsMenu;
