import React from 'react';
import { RootElement } from 'react-server';
import { Provider } from 'react-redux'

import BaseTournamentPage from './BaseTournamentPage';

import { REDUCER_KEYS } from '../reducers';
import { fetchTournamentTeams, fetchTournamentMatches } from './../actions/single-tournament';

import TournamentInfoContent from './../containers/TournamentInfoContent';

export default class TournamentInfoPage extends BaseTournamentPage {

    dispatchForCriticalData() {
        super.dispatchForCriticalData();
        this.getStore().dispatch(fetchTournamentTeams(this.getTournamentId()));
        this.getStore().dispatch(fetchTournamentMatches(this.getTournamentId()));
    }

    getMainContent() {
        return [
            <RootElement
                key="tournamentInfo"
                when={this.storeAdapter.when([
                    REDUCER_KEYS.currentTournament,
                    REDUCER_KEYS.tournamentTeams,
                    REDUCER_KEYS.tournamentMatches,
                ])}>
                <Provider store={this.getStore()}>
                    <TournamentInfoContent />
                </Provider>
            </RootElement>,
        ]
    }
}