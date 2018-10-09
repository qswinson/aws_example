import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './store/configureStore';
import Root from './components/root';
import * as serviceWorker from './serviceWorker';

const initialState = window.___INITIAL_STATE__;
const store = configureStore(initialState);

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
