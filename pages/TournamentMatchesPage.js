import React from 'react';
import { RootElement } from 'react-server';
import { Provider } from 'react-redux'

import BaseTournamentPage from './BaseTournamentPage';

import { REDUCER_KEYS } from '../reducers';

import TournamentMatches from './../containers/TournamentMatches';

import { Panes } from './../components/tournament/TournamentPageSidebar';
import { fetchTournamentTeams, fetchTournamentMatches } from './../actions/single-tournament';

export default class TournamentMatchesPage extends BaseTournamentPage {

    dispatchForCriticalData() {
        super.dispatchForCriticalData();
        this.getStore().dispatch(fetchTournamentTeams(this.getTournamentId()));
        this.getStore().dispatch(fetchTournamentMatches(this.getTournamentId()));
    }

    getMainContent() {
        return [
            <RootElement
                key="tournamentMatches"
                when={this.storeAdapter.when([
                    REDUCER_KEYS.currentTournament,
                    REDUCER_KEYS.tournamentMatches,
                    REDUCER_KEYS.tournamentTeams,
                ])}
            >
                <Provider store={this.getStore()}>
                    <TournamentMatches />
                </Provider>
            </RootElement>
        ]
    }

    getSelectedPane() {
        return Panes.MATCHES;
    }
}