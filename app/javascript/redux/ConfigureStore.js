import { combineReducers, applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import greetingsReducer from './greetings/greetings';

const reducer = combineReducers({
  greetingsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;