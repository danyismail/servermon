import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import App from './App';
// import axios from 'axios';
import * as serviceWorker from './serviceWorker';


const initialState = {
    user_id: 0,
    user_name: '',
    level: 0,
    name: ''
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA': return {
            ...state,
            user_id: action.payload.user_id,
            user_name: action.payload.user_name,
            level: action.payload.level,
            name: action.payload.name
        }
        default: return state
    }
}

const storeRedux = createStore(rootReducer)

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={storeRedux}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
