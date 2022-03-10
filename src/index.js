import React from "react";
import Reactdom from 'react-dom'
import App from './App'
import {compose,createStore,applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {Provider} from 'react-redux'
import Reducers from './reducers/index';

const store=createStore(Reducers,compose(applyMiddleware(thunk)));

Reactdom.render(
    <Provider store={store}>
        <App/>
    </Provider>
,
document.getElementById('root')
)


