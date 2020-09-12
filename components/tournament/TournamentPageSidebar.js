import React from 'react';
import { Link } from 'react-server';

import { Menu } from 'antd';

const { SubMenu } = Menu;

export default ({
    tournament,
    teams,
    selectedKeys,
    openKeys
}) => {
    return (
        <Menu
            style={{ height: '100vh' }}
            defaultSelectedKeys={selectedKeys || []}
            defaultOpenKeys={openKeys || []}
            mode="inline"
        >
            <Menu.Item
                key="tournament"
            >
                <Link path={`/tournaments/${tournament.id}`} reuseDom>
                    { tournament.name }
                </Link>
            </Menu.Item>
            <SubMenu key="teams" title="Teams">
                {
                    teams.map(team => <Menu.Item key={`team-${team.id}`}>{team.name}</Menu.Item>)
                }
            </SubMenu>
            <SubMenu
                key="matches"
                title="Matches"
            >
                <SubMenu key="round-1" title="Round 1">
                    <Menu.Item key="9">Option 9</Menu.Item>
                </SubMenu>
                <SubMenu key="round-2" title="Round 2">
                    <Menu.Item key="10">Option 9</Menu.Item>
                </SubMenu>
                <SubMenu key="round-3" title="Round 3">
                    <Menu.Item key="11">Option 9</Menu.Item>
                </SubMenu>
            </SubMenu>
        </Menu>
    );
}