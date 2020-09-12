import React from 'react';
import { RootElement } from 'react-server';
import { Provider } from 'react-redux'
import { ReduxAdapter } from 'react-server-redux';

import RequireLoggedInUser from './../middleware/is-logged-in';

import UserHeader from './../containers/UserHeader';
import configureStore from './../store';

import RLS from './../util/rls';

import { fetchTournament, fetchTournamentTeams } from './../actions/single-tournament';
import { REDUCER_KEYS } from '../reducers';

import TournamentPageSidebar from './../containers/TournamentPageSidebar';

export default class BaseTournamentPage {

    static middleware() {
        return [RequireLoggedInUser]
    }

    handleRoute() {
        this.store = configureStore({
			[REDUCER_KEYS.currentUser]: RLS.get().currentUser,
		});
        this.storeAdapter = new ReduxAdapter(this.store);

        this.dispatchForCriticalData();
        return this.storeAdapter.when([REDUCER_KEYS.currentTournament])
            .then(() => {
                return {
                    code: 200
                }
            })
    }

    getStore() {
        return this.store;
    }

    getTitle() {
        return this.storeAdapter.when([REDUCER_KEYS.currentTournament])
            .then(() => `${this.store.getState().currentTournament.name} | Neg 5`)
    }

    getStoreAdapter() {
        return this.storeAdapter;
    }

    getMainContent() {}

    dispatchForCriticalData() {
        const tournamentId = this.getRequest().getRouteParams().tournamentId;
        this.store.dispatch(fetchTournament(tournamentId));
        this.store.dispatch(fetchTournamentTeams(tournamentId));
    }

    criticalInformationLoaded() {
        return this.storeAdapter.when([
            REDUCER_KEYS.currentTournament,
            REDUCER_KEYS.tournamentTeams,
        ]);
    }

    getSidebarElements() {
        return (
            <RootElement when={this.criticalInformationLoaded()}>
                <Provider store={this.store}>
                    <TournamentPageSidebar />
                </Provider>
            </RootElement>
        )
    }

    getElements() {
        const title = this.store.getState().currentTournament.name;
        return [
            <RootElement key={0} when={this.storeAdapter.when([REDUCER_KEYS.currentUser])}>
                <Provider store={this.store}>
                    <UserHeader title={title} />
                </Provider>
            </RootElement>,
            this.getSidebarElements(),
        ]
    }
}