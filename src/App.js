import React from 'react';
import './App.css';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux'

import allReducers from './reducers'
import CounterContainer from './containers/CounterContainer'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

const App = () => {
    return (
        <Provider store={store}>
            <CounterContainer />
        </Provider>
    );
};

sagaMiddleware.run();

export default App;
