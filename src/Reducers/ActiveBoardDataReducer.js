import { combineReducers } from 'redux';
import {
    SUBMIT_LIST,
    SUBMIT_NEW_CARD,
} from './../Actions/ActionTypes';
import uniqueId from 'lodash/uniqueId';


const ListReducer = (state = {}, action) => {

    const listId = uniqueId("list_");
    switch (action.type) {

        case SUBMIT_LIST:
            return {
                ...state,
                [listId]: { // the unique ID of the list
                    name: action.payload, // name of the list
                    id: listId,
                    cards: [] // card IDs go inside here
                }
            };

        case SUBMIT_NEW_CARD:

            const currentList = state[action.payload.listId];
            currentList.cards.push({name: action.payload.cardName});

            return {
                ...state,
                [action.payload.listId]: currentList,
            }


        default:
            return state;
    }
}


const ActiveBoardReducer = combineReducers({
    listItems: ListReducer,
})

export default ActiveBoardReducer;
