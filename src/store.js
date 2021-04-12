import { createStore } from 'redux';
import wishesReducer from './reducers';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store = createStore(wishesReducer, persistedState);

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
