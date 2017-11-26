import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import CreateBoardReducer from './CreateBoardReducer';
import BoardsCollectionReducer from './BoardsCollectionReducer';
import ActiveBoardReducer from './ActiveBoardReducer';
import ActiveBoardDataReducer from './ActiveBoardDataReducer';

const RootReducer = combineReducers({
    form: formReducer,
    newBoard: CreateBoardReducer,
    boardsCollection: BoardsCollectionReducer,
    activeBoard: ActiveBoardReducer,
    activeBoardData: ActiveBoardDataReducer,
})

export default RootReducer;
