import React, { useState } from 'react';
import { Card, Row, Col } from 'antd';

import tournamentUtil from './../../util/tournament';
import PoolCard from './PoolCard';

import './TournamentPhases.less';

const TournamentPhases = ({
    phases,
    pools,
}) => {
    const [ currentTab, setTab ] = useState(phases.length ? phases[0].id : null)
    const tabs = phases.map(p => ({
        key: p.id,
        tab: p.name,
    }));
    const poolsByPhase = tournamentUtil.partitionPoolsByPhase(pools);
    const tabComponents = {};
    phases.forEach(p => {
        const pools = poolsByPhase[p.id] || [];
        tabComponents[p.id] = (
            <Row gutter={16}>
                {
                    [
                        <Col span={8}>
                            <PoolCard pool={{ name: 'Unassigned' }}></PoolCard>
                        </Col>
                    ]
                    .concat(
                        pools.map(pool => (
                            <Col span={8} key={pool.id} className="pool-card-container">
                                <PoolCard pool={pool} />
                            </Col>
                        ))
                    )
                }
            </Row>
        )
    })
    return (
        <div className="TournamentPhases">
            <Card
                title="Pools"
                tabList={tabs}
                activeTabKey={currentTab}
                onTabChange={key => setTab(key)}
            >
                { tabComponents[currentTab] }
            </Card>
        </div>
    )
}

export default TournamentPhases;
