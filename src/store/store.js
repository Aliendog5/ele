//applyMiddleware用来处理中间件  action 到  dispatch之间的一个应用

import {createStore,combineReducers,applyMiddleware} from 'redux';

import homeReducers from './reducers/home/homeReducers';
import commReducers from './reducers/common/commReducers';
import filterReducers from './reducers/common/filterReducers';

//这个是用来处理异步的action
import reduxpromisemiddleware from 'redux-promise-middleware';

const reducer=combineReducers({
    homeReducers,
    commReducers,
    filterReducers
})

const store=createStore(reducer,applyMiddleware(reduxpromisemiddleware()))

export default store;