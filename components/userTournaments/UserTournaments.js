import React, { Fragment } from 'react';

import { Empty, Row, Col } from 'antd';

import CreateTournamentForm from './CreateTournamentForm';
import TournamentCard from './TournamentCard';

import './UserTournaments.less';

const defaultTournamentValues = {
    bonusPointValue: 10,
    partsPerBonus: 3,
    maxActivePlayersPerTeam: 4,
}

const renderTournaments = (title, tournaments) => {
    if (!tournaments || tournaments.length == 0) {
        return null;
    }
    return (
        <Row gutter={16}>
            {
                tournaments.map(t => {
                    return (
                        <Col span={8} key={t.id}>
                            <TournamentCard {...t} key={t.id} />
                        </Col>
                    )
                })
            }
        </Row>
    )
}

const renderEmptyState = (userTournaments, onClick) => {
    // if (userTournaments.userOwnedTournaments || userTournaments.collaboratingTournaments) {
    //     return null;
    // }
    const description = (
        <Fragment>
            You aren't part of any tournaments yet.
            <a onClick={onClick}> Create your first one.</a>
        </Fragment>
    )
    return (
        <Empty
            className="center"
            description={description}
        />
    )
}

const UserTournaments = ({
    userTournaments,
    createTournamentData,
    startCreateTournament,
    cancelCreateTournament,
    goToStage,
    submitTournament
}) => {
    const description = (
        <Fragment>
            You aren't part of any tournaments yet.
            <a onClick={startCreateTournament}> Create your first one.</a>
        </Fragment>
    )
    return (
        <div className="UserTournaments">
            {
                createTournamentData && createTournamentData.stage
                    && <CreateTournamentForm
                        {...createTournamentData}
                        onCancel={cancelCreateTournament}
                        onGoToStage={goToStage}
                        defaultValues={defaultTournamentValues}
                        onSubmit={submitTournament}
                    />
            }
            { renderEmptyState(userTournaments, startCreateTournament) }
            {/* { renderTournaments('Your Tournaments', userTournaments.userOwnedTournaments) }
            { renderTournaments('Shared with You', userTournaments.collaboratingTournaments) } */}
        </div>
    )
}

export default UserTournaments;
