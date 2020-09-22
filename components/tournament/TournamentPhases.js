import React, { useState } from 'react';
import { Card, Row, Col, Button, Input } from 'antd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import TournamentUtil from './../../util/tournament';
import PoolCard from './PoolCard';

import './TournamentPhases.less';

const NewPhaseInput = ({
    onSubmitPhase
}) => {
    const [phaseName, setPhaseName] = useState('');

    const onPressEnter = () => {
        const trimmed = phaseName.trim();
        if (trimmed) {
            onSubmitPhase(trimmed, () => setPhaseName(''));
        } 
    }
    return (
        <Input
            placeholder="Add a new phase"
            value={phaseName}
            onChange={e => setPhaseName(e.target.value)}
            onPressEnter={onPressEnter}
        />
    )
}

const TournamentPhases = ({
    phases = [],
    pools = [],
    teams = [],
    onUpdateTeamPool,
    onAddPhase,
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
                                phaseId={phase.id}
                                onDropTeam={onUpdateTeamPool}
                            />
                        </Col>
                    ]
                    .concat(
                        pools.map(pool => (
                            <Col span={8} key={pool.id} className="pool-card-container">
                                <PoolCard
                                    pool={pool}
                                    teams={teamsByPool[pool.id]}
                                    phaseId={phase.id}
                                    onDropTeam={onUpdateTeamPool}
                                />
                            </Col>
                        ))
                    )
                }
            </Row>
        )
    })

    const onSubmitPhase = (name, callback) => {
        onAddPhase(name, newPhase => {
            callback();
            setTab(newPhase.id)
        });
    }
    return (
        <div className="TournamentPhases">
            <DndProvider backend={HTML5Backend}>
                <Card
                    extra={<NewPhaseInput onSubmitPhase={onSubmitPhase} />}
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
