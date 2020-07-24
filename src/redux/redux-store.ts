import {combineReducers, createStore, Store} from 'redux';
import counterReducer from './counter-reducer';

// наш reducers это фактически state = {profilePage: [data], dialogsPage: [data], friendsPage: [data]}
let reducers = combineReducers({
    //combinre all reducers in one object = state
    counter: counterReducer,
});

export type AppStateType = ReturnType<typeof reducers>

let store: Store = createStore(reducers);

// @ts-ignore
window.store = store;

export default store;