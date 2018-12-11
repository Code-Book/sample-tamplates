import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { demoReducer } from './+store/reducers';
import { showDemo } from './+store/actions';

let store;

export function init() {
    const reducers = combineReducers({ demoReducer });
    store = createStore(reducers, applyMiddleware(thunk));
}

export function getStoreInstance() {
    return store
}

export function startDemo() {
    store.dispatch(showDemo());
};