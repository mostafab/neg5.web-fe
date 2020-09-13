import React from 'react';
import { RootElement } from 'react-server';
import { Provider } from 'react-redux'

import BaseTournamentPage from './BaseTournamentPage';

import { REDUCER_KEYS } from '../reducers';

import TournamentInfoContent from './../containers/TournamentInfoContent';

export default class TournamentInfoPage extends BaseTournamentPage {

    getMainContent() {
        return [
            <RootElement key="tournamentInfo" when={this.storeAdapter.when([REDUCER_KEYS.currentTournament])}>
                <Provider store={this.getStore()}>
                    <TournamentInfoContent />
                </Provider>
            </RootElement>
        ]
    }
}