import React from 'react';
import { RootElement } from 'react-server';
import { Provider } from 'react-redux'

import BaseTournamentPage from './BaseTournamentPage';

import { REDUCER_KEYS } from '../reducers';

import TournamentInfoContent from './../containers/TournamentInfoContent';

import { Panes } from './../components/tournament/TournamentPageSidebar';
import { fetchTournamentTeams } from './../actions/single-tournament';

export default class TournamentTeamsPage extends BaseTournamentPage {

    dispatchForCriticalData() {
        super.dispatchForCriticalData();
        this.getStore().dispatch(fetchTournamentTeams(this.getTournamentId()));
    }

    getMainContent() {
        return [
            <RootElement key="tournamentTeams" when={this.storeAdapter.when([REDUCER_KEYS.currentTournament])}>
                <Provider store={this.getStore()}>
                    <TournamentInfoContent />
                </Provider>
            </RootElement>
        ]
    }

    getSelectedPane() {
        return Panes.TEAM;
    }
}