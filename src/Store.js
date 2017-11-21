import { createStore } from 'redux';
import RootReducer from './Reducers/RootReducer';

const Store =  createStore(
    RootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default Store;
