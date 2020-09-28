import React from 'react';
import { Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';

import TeamView from './TeamView';
import NoTeams from './NoTeams';
import TeamModal from './TeamModal';
import TeamsGallery from './TeamsGallery';

import './TournamentTeams.less';

const TournamentTeams = ({
    teams,
    selectTeam,
    tournament,
    addTeam,
    addingTeam,
    cancelAddTeam,
    submitTeam,
    savingNewTeam,
    savePlayer,
    updateTeam,
}) => {
    return (
        <div className="TournamentTeams">
            <Button
                className="add-team"
                type="default"
                onClick={() => addTeam()}
                icon={<PlusSquareOutlined />}
            >
                Add Team
            </Button>
            <TeamsGallery
                teams={teams}
                phases={tournament.phases}
                onSavePlayer={savePlayer}
                onUpdateTeam={updateTeam}
            />
            { teams.length === 0 && <NoTeams onAdd={addTeam} /> }
            { addingTeam && <TeamModal
                                onCancel={cancelAddTeam}
                                numPlayers={tournament.maxActivePlayersPerTeam}
                                onSubmitTeam={submitTeam}
                                onSelectTeam={selectTeam}
                                saving={savingNewTeam}
                                phases={tournament.phases}
                                pools={tournament.divisions}
                            /> }
        </div>
    )
}

export default TournamentTeams;
