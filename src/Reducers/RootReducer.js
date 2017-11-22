import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import CreateBoardReducer from './CreateBoardReducer';
import BoardsReducer from './BoardsReducer';
import ActiveBoardReducer from './ActiveBoardReducer';


const RootReducer = combineReducers({
    form: formReducer,
    newBoard: CreateBoardReducer,
    boardsCollection: BoardsReducer,
    activeBoard: ActiveBoardReducer,
})

export default RootReducer;
