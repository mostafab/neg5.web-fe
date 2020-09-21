import React, { useState } from 'react';
import { Card, Row, Col } from 'antd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import TournamentUtil from './../../util/tournament';
import PoolCard from './PoolCard';

import './TournamentPhases.less';

const TournamentPhases = ({
    phases,
    pools,
    teams,
}) => {
    const [ currentTab, setTab ] = useState(phases.length ? phases[0].id : null)
    const tabs = phases.map(p => ({
        key: p.id,
        tab: p.name,
    }));
    const poolsByPhase = TournamentUtil.partitionPoolsByPhase(pools);
    const tabComponents = {};
    phases.forEach(phase => {
        const teamsByPool = TournamentUtil
            .groupTeamsByPools(phase.id, poolsByPhase[phase.id] || [], teams);
        const pools = poolsByPhase[phase.id] || [];
        tabComponents[phase.id] = (
            <Row gutter={16}>
                {
                    [
                        <Col span={8} key="unassigned">
                            <PoolCard
                                pool={{ name: 'Unassigned' }}
                                teams={teamsByPool[TournamentUtil.UNASSIGNED_POOL_KEY]}
                            />
                        </Col>
                    ]
                    .concat(
                        pools.map(pool => (
                            <Col span={8} key={pool.id} className="pool-card-container">
                                <PoolCard pool={pool} teams={teamsByPool[pool.id]} />
                            </Col>
                        ))
                    )
                }
            </Row>
        )
    })
    return (
        <div className="TournamentPhases">
            <DndProvider backend={HTML5Backend}>
                <Card
                    title="Pools"
                    tabList={tabs}
                    activeTabKey={currentTab}
                    onTabChange={key => setTab(key)}
                >
                    { tabComponents[currentTab] }
                </Card>
            </DndProvider>
        </div>
    )
}

export default TournamentPhases;
