/* eslint-disable import/no-cycle */
import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import socketMiddleware from './middleware/socketMiddleware';
import { wsActions } from '../utils/socketActionTypes';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, socketMiddleware(wsActions))
);

const store = createStore(rootReducer, enhancer);

export default store;
