import React from 'react';
import { RootElement } from 'react-server';
import { Provider } from 'react-redux'

import BaseTournamentPage from './BaseTournamentPage';

import { REDUCER_KEYS } from '../reducers';

import TournamentTeams from './../containers/TournamentTeams';

import { Panes } from './../components/tournament/TournamentPageSidebar';
import { fetchTournamentMatches, fetchTournamentTeams } from './../actions/single-tournament';

export default class TournamentTeamsPage extends BaseTournamentPage {

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