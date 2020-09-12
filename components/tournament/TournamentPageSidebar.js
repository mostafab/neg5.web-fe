import React from 'react';
import { Link } from 'react-server';

import { Menu } from 'antd';
import {
  SettingOutlined,
  TeamOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;

export default ({
    tournament,
    teams
}) => {
    return (
        <Menu
            style={{ width: 256, height: '100vh' }}
            defaultOpenKeys={['teams', 'matches']}
            mode="inline"
        >
            <Menu.Item
                key={`tournament-${tournament.id}`}
            >
                <Link path={`/tournaments/${tournament.id}`}>
                    { tournament.name }
                </Link>
            </Menu.Item>
            <SubMenu key="teams" icon={<TeamOutlined />} title="Teams">
                {
                    teams.map(team => <Menu.Item key={`team-${team.id}`}>{team.name}</Menu.Item>)
                }
            </SubMenu>
            <SubMenu
            key="matches"
            title={
                <span>
                <SettingOutlined />
                <span>Matches</span>
                </span>
            }
            >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
        </Menu>
    );
}