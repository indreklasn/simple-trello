import { combineReducers } from 'redux';
import CreateBoardReducer from './CreateBoardReducer';
import BoardReducer from './BoardReducer';
import { reducer as formReducer } from 'redux-form';

const RootReducer = combineReducers({
    form: formReducer,
    createBoard: CreateBoardReducer,
    board: BoardReducer,
})

export default RootReducer;
