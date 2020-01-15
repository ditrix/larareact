import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './css/style.css';
import './css/response.css';

import {Provider} from 'react-redux';
import store from './store/configureStore'; 

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('root'));

serviceWorker.unregister();
