import React from 'react';
import { Card, Select } from 'antd';
import { keyBy } from 'lodash';

import './TeamPools.less';

const { Option } = Select;

const renderPhaseSubMenu = (phase, pools, teamPools) => {
    const poolsInPhase = pools.filter(p => p.phaseId === phase.id);
    const teamPoolMap = keyBy(teamPools || [], 'phaseId');
    const selectedPool = teamPoolMap[phase.id] ? teamPoolMap[phase.id] : null;
    return (
        <div className="phase-row" key={phase.id}>
            <div className="name">{ phase.name }</div>
            <Select
                value={selectedPool && selectedPool.id}
                onChange={val => console.log(`Pool: ${val} Phase ${phase.id}`)}
            >
                {
                    [
                        <Option value={null} key="null">
                            N/A
                        </Option> 
                    ].concat(
                        poolsInPhase.map(pool => {
                            return (
                                <Option value={pool.id} key={pool.id}>
                                    { pool.name }
                                </Option>
                            )
                        })
                    )
                }
            </Select>
        </div>
    )
} 

export default ({
    pools,
    phases,
    teamPools,
}) => {
    return (
        <div className="TeamPools">
            <Card title="Phases & Pools">
                { phases.map(p => renderPhaseSubMenu(p, pools, teamPools)) }
            </Card>
        </div>
    )
}