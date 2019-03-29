import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//X-----------------------------------------------X

import reducers from './reducers'; //importing all the reducers that we have made by combining all the reducers 
import {Provider} from 'react-redux'; 
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

//X------------------------------------------------X

const store= createStore(reducers,applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

