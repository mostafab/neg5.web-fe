import React from 'react';
import { RootElement } from 'react-server';
import { Provider } from 'react-redux'
import { ReduxAdapter } from 'react-server-redux';

import configureStore from './../store';
import { fetchTournaments } from './../actions/tournament';
import { REDUCER_KEYS } from '../reducers';

import UserTournaments from './../containers/UserTournaments';
import UserHeader from './../containers/UserHeader';

import RequireLoggedInUser from './../middleware/is-logged-in';

import RLS from './../util/rls';

export default class UserTournamentsPage {

	static middleware() {
		return [RequireLoggedInUser];
	}

	handleRoute() {
		this.store = configureStore({
			[REDUCER_KEYS.currentUser]: RLS.get().currentUser,
		});
		this.storeAdapter = new ReduxAdapter(this.store);
		this.store.dispatch(fetchTournaments());
		return {
			code: 200,
		}
	}

	getTitle() {
		return 'My Tournaments | Neg 5';
	}

	getElements() {
		return [
			<RootElement when={this.storeAdapter.when([REDUCER_KEYS.currentUser])}>
				<Provider store={this.store}>
					<UserHeader title="My Tournaments" />
				</Provider>
			</RootElement>,
			<RootElement when={this.storeAdapter.when([REDUCER_KEYS.userTournaments])}>
				<Provider store={this.store}>
					<UserTournaments />
				</Provider>
			</RootElement>,
		]
	}

	getMetaTags() {
		return [
			{charset: 'utf8'},
			{'http-equiv': 'x-ua-compatible', 'content': 'ie=edge'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{name: 'description', content: 'hello world, powered by React Server'},
			{name: 'generator', content: 'React Server'},
		];
	}
}
