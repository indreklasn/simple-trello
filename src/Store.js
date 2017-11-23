import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './Reducers/RootReducer';
import { loadState, saveState } from './Utils/SyncActiveBoardLocalStorage';

const middleware = applyMiddleware(thunk);

const Store =  createStore(
    RootReducer,
    composeWithDevTools(middleware),
);

export default Store;
