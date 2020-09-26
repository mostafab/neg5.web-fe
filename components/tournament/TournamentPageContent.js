import React from 'react';
import { Col, Row } from 'antd';

import TournamentCard from './TournamentCard';
import TournamentPhases from './TournamentPhases';
import TeamsList from './../teams/TeamsList';

import './TournamentPageContent.less';

export default ({
    tournament,
    teams,
    updateTeamPool,
    onAddPhase,
    onAddPool,
    addTeam,
    addingTeam,
    savingTeam,
    cancelAddTeam,
    submitTeam,
}) => {
    return (
        <div className="TournamentPageContent">
            {/* <Row>
                <Col span={12}>
                    <TournamentCard {...tournament} />
                </Col>
            </Row> */}
            <Row gutter={16}>
                <Col span={6}>
                    <TeamsList
                        tournamentId={tournament.id}
                        teams={teams}
                        onAddTeam={addTeam}
                        addingTeam={addingTeam}
                        saving={savingTeam}
                        onCancel={cancelAddTeam}
                        onSubmitTeam={submitTeam}
                    />
                </Col>
                <Col span={18}>
                    <TournamentPhases
                        phases={tournament.phases}
                        pools={tournament.divisions}
                        teams={teams}
                        onUpdateTeamPool={updateTeamPool}
                        onAddPhase={onAddPhase}
                        onAddPool={onAddPool}
                    />
                </Col>
            </Row>
        </div>
    )
}