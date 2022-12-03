import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

const userFeedback = (
	state = {
		feeling: 0,
		understanding: 0,
		support: 0,
		comments: '',
	},
	action
) => {
	if (action.type === 'SET_FEELING') {
		return { state, feeling: action.payload };
	}
	if (action.type === 'SET_UNDERSTANDING') {
		return { state, understanding: action.payload };
	}
	if (action.type === 'SET_SUPPORT') {
		return { state, support: action.payload };
	}
	if (action.type === 'SET_COMMENTS') {
		return { state, comments: action.payload };
	}
	if (action.type === 'CLEAR_FEEDBACK') {
		return {
			feeling: 0,
			understanding: 0,
			support: 0,
			comments: '',
		};
	}
	return state;
};

const store = createStore(
	combineReducers({ userFeedback }),
	applyMiddleware(logger)
);
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
