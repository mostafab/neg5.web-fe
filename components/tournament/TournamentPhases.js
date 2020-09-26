import React, { useState } from 'react';
import { Card, Row, Col, Input, Empty } from 'antd';
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
            autoComplete="off"
            value={phaseName}
            onChange={e => setPhaseName(e.target.value)}
            onPressEnter={onPressEnter}
        />
    )
}

const NewPoolInput = ({ onAddPool, phaseId }) => {
    const [poolName, setPoolName] = useState('');

    const onPressEnter = () => {
        const trimmed = poolName.trim();
        if (trimmed) {
            onAddPool(trimmed, phaseId, () => setPoolName(''));
        }
    }
    return (
        <Card title="Add a new Pool" className="NewPoolInput">
            <Input
                placeholder="Add a new pool"
                value={poolName}
                onChange={e => setPoolName(e.target.value)}
                onPressEnter={onPressEnter}
            />
        </Card>
    )
}

const TournamentPhases = ({
    phases = [],
    pools = [],
    teams = [],
    onUpdateTeamPool,
    onAddPhase,
    onAddPool,
}) => {
    const [ currentTab, setTab ] = useState(phases.length ? phases[0].id : null)
    const tabs = phases.map(p => ({
        key: p.id,
        tab:  p.name,
    }));
    const poolsByPhase = TournamentUtil.partitionPoolsByPhase(pools);
    const tabComponents = {};
    phases.forEach(phase => {
        const teamsByPool = TournamentUtil
            .groupTeamsByPools(phase.id, poolsByPhase[phase.id] || [], teams);
        const pools = poolsByPhase[phase.id] || [];
        tabComponents[phase.id] = (
            <Row gutter={16}>
                <Col span={8}>
                    <Row>
                        <Col span={24} key="new-pool">
                            <NewPoolInput
                                phaseId={phase.id}
                                onAddPool={onAddPool}
                            />
                        </Col>
                        <Col span={24} key="unassigned">
                            <PoolCard
                                pool={{ name: 'Unassigned' }}
                                teams={teamsByPool[TournamentUtil.UNASSIGNED_POOL_KEY]}
                                phaseId={phase.id}
                                onDropTeam={onUpdateTeamPool}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col span={16}>
                    <Row gutter={16}>
                        {
                            [

                            ]
                            .concat(
                                pools.map(pool => (
                                    <Col span={12} key={pool.id} className="pool-card-container">
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
                </Col>
                
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
                    extra={phases.length ? <NewPhaseInput onSubmitPhase={onSubmitPhase} /> : null}
                    title="Pools"
                    tabList={tabs}
                    activeTabKey={currentTab}
                    onTabChange={key => setTab(key)}
                >
                    { phases.length
                        ? tabComponents[currentTab]
                        : (
                            <Empty
                                className="no-phases"
                                description="Add your tournament's first phase"
                            >
                                <NewPhaseInput onSubmitPhase={onSubmitPhase} />
                            </Empty>
                        )
                    }
                </Card>
            </DndProvider>
        </div>
    )
}

export default TournamentPhases;
