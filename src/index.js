import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux"
import rootReducer from "./store/reduceers/rootReducer";
import thunk from "redux-thunk"
import logger from "redux-logger";
import { translations } from './translations'
import {IntlProvider} from 'react-redux-multilingual'


const store = createStore(
    rootReducer,
    { Intl: { locale: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en" }},
    applyMiddleware(logger, thunk),
);

ReactDOM.render(
    <Provider store={store}>
        <IntlProvider translations={translations}>
            <App/>
        </IntlProvider>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
