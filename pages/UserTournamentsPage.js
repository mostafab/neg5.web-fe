import React from 'react';
import { RootElement } from 'react-server';
import { Provider } from 'react-redux'
import { ReduxAdapter } from 'react-server-redux';

import configureStore from './../store';
import { fetchTournaments } from './../actions/tournament';

import App from './../containers/App';
import { REDUCER_KEYS } from '../reducers';

export default class UserTournamentsPage {

	handleRoute() {
		this.store = configureStore({
			counter: 2,
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
			<RootElement when={this.storeAdapter.when([REDUCER_KEYS.userTournaments])}>
				<Provider store={this.store}>
					<App />
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
