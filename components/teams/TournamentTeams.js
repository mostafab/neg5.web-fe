import React from 'react';

import TeamsMenu from './TeamsMenu';
import TeamView from './TeamView';
import NoTeams from './NoTeams';
import TeamModal from './TeamModal';

import './TournamentTeams.less';

const TournamentTeams = ({
    teams,
    selectTeam,
    selectedTeam,
    tournament,
    addTeam,
    addingTeam,
    cancelAddTeam,
    submitTeam,
    savingNewTeam
}) => {
    return (
        <div className="TournamentTeams">
            <TeamsMenu teams={teams}
                onAdd={addTeam}
                onSelectTeam={selectTeam}
                selectedTeam={selectedTeam}
            />
            { teams.length === 0 && <NoTeams onAdd={addTeam} /> }
            { selectedTeam && <TeamView {...selectedTeam} tournamentPools={tournament.divisions} tournamentPhases={tournament.phases} /> }
            { addingTeam && <TeamModal
                                onCancel={cancelAddTeam}
                                numPlayers={tournament.maxActivePlayersPerTeam}
                                onSubmitTeam={submitTeam}
                                saving={savingNewTeam}
                            /> }
        </div>
    )
}

export default TournamentTeams;
