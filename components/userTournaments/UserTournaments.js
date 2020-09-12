import React, { Fragment } from 'react';

import { Empty } from 'antd';

import CreateTournamentForm from './CreateTournamentForm';

import './UserTournaments.less';

const defaultTournamentValues = {
    bonusPointValue: 10,
    partsPerBonus: 3,
    maxActivePlayersPerTeam: 4,
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
                    ? <CreateTournamentForm
                        {...createTournamentData}
                        onCancel={cancelCreateTournament}
                        onGoToStage={goToStage}
                        defaultValues={defaultTournamentValues}
                        onSubmit={submitTournament}
                    />
                    : (
                        <Empty
                            className="center"
                            description={description}
                        />
                    )
            }
        </div>
    )
}

export default UserTournaments;
