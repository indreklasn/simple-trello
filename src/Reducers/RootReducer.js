import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import CreateBoardReducer from './CreateBoardReducer';
import BoardsCollectionReducer from './BoardsCollectionReducer';
import ActiveBoardReducer from './ActiveBoardReducer';
import ListReducer from './ListReducer';

const RootReducer = combineReducers({
    form: formReducer,
    newBoard: CreateBoardReducer,
    boardsCollection: BoardsCollectionReducer,
    activeBoard: ActiveBoardReducer,
    listItems: ListReducer,
})

export default RootReducer;
