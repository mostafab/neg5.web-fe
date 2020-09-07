import React from 'react';

import Neg5Page from "./Neg5Page";

import configureStore from './../store/configureStore';

import App from './../containers/App';

export default class TestPage extends Neg5Page {

    getPageElements() {
        return (
            <App></App>
        )
    }

    async createStore(req) {
        const counter = 20;

        // Compile an initial state
        const preloadedState = { counter };
  
        // Create a new Redux store instance
        return configureStore(preloadedState);
    }    
}