import React from 'react';
import { Card, Menu } from 'antd';

import './TeamPools.less';

const { SubMenu } = Menu;

const renderPhaseSubMenu = (phase, pools, teamPools) => {
    const poolsInPhase = pools.filter(p => p.phaseId === phase.id);
    const teamPoolIds = new Set(teamPools.map(tp => tp.id));
    return (
        <SubMenu key={`phase-${phase.id}`} title={phase.name}>
            {
                poolsInPhase.map(pool => {
                    console.log(teamPoolIds.has(pool.id));
                    return (
                        <Menu.Item key={`pool-${pool.id}`}>
                            { pool.name }
                        </Menu.Item>
                    )
                })
            }
        </SubMenu>
    )
} 

export default ({
    pools,
    phases,
    teamPools,
}) => {
    return (
        <div className="TeamPools">
            <Card title="Pools">
                <Menu
                    selectedKeys={[]}
                    mode="inline"
                >
                    { phases.map(p => renderPhaseSubMenu(p, pools, teamPools)) }
                </Menu>
            </Card>
        </div>
    )
}