import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import CreateBoardReducer from './CreateBoardReducer';
import BoardsCollectionReducer from './BoardsCollectionReducer';


const RootReducer = combineReducers({
    form: formReducer,
    newBoard: CreateBoardReducer,
    boardsCollection: BoardsCollectionReducer,
})

export default RootReducer;
