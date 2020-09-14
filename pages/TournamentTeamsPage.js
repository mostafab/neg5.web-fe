import React from 'react';
import { RootElement } from 'react-server';
import { Provider } from 'react-redux'

import BaseTournamentPage from './BaseTournamentPage';

import { REDUCER_KEYS } from '../reducers';

import TournamentTeams from './../containers/TournamentTeams';

import { Panes } from './../components/tournament/TournamentPageSidebar';
import { fetchTournamentMatches, fetchTournamentTeams } from './../actions/single-tournament';
import { selectTeam } from './../actions/team';

export default class TournamentTeamsPage extends BaseTournamentPage {

    async handleRoute() {
        const selectedTeamId = this.getRequest().getRouteParams().teamId;
        if (!selectedTeamId) {
            return super.handleRoute();
        }
        await super.handleRoute();
        await this.storeAdapter.when([REDUCER_KEYS.tournamentTeams]);

        const teams = this.getStore().getState().tournamentTeams.teams;
        const selected = teams.find(t => t.id === selectedTeamId);
        this.getStore().dispatch(selectTeam(selected));

        return {
            code: 200,
        }
    }

    dispatchForCriticalData() {
        super.dispatchForCriticalData();
        this.getStore().dispatch(fetchTournamentMatches(this.getTournamentId()));
        this.getStore().dispatch(fetchTournamentTeams(this.getTournamentId()));
    }

    getMainContent() {
        return [
            <RootElement key="tournamentTeams" when={this.storeAdapter.when([
                REDUCER_KEYS.currentTournament,
                REDUCER_KEYS.tournamentMatches,
                REDUCER_KEYS.tournamentTeams,
            ])}>
                <Provider store={this.getStore()}>
                    <TournamentTeams />
                </Provider>
            </RootElement>
        ]
    }

    getSelectedPane() {
        return Panes.TEAM;
    }
}