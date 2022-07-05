import { combineReducers, createStore } from 'redux';
import { diceGameReducer } from './reducers/diceGameReducer';

const rootReducer = combineReducers({
    diceGameReducer: diceGameReducer,
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());