import { combineReducers } from 'redux';
import {
    SUBMIT_LIST,
    SUBMIT_NEW_CARD,
    HANDLE_DROP
} from '~Actions/ActionTypes';
import uniqueId from 'lodash/uniqueId';


const ListReducer = (state = {}, action) => {

    const listId = uniqueId("list_");

    switch (action.type) {

        case SUBMIT_LIST:
            return {
                ...state,
                [listId]: { // the unique ID of the list
                    name: action.payload, // name of the list
                    id: listId, // list ID
                    cards: [] // card IDs go inside here
                }
            };

        case SUBMIT_NEW_CARD: {
            const { listId, cardName, cardId } = action.payload;
            const currentList = state[listId];
            currentList.cards.push({ name: cardName, cardId, listId })
            return {
                ...state,
                [listId]: currentList,
            }
        }

        case HANDLE_DROP: {
            const { cardId, cardName, listId, newListId } = action.payload;
            const currentList = state[newListId];
            currentList.cards.push({ name: cardName, cardId, listId: newListId })
            console.log(currentList)
            // const selectedList = state[card.listId];
            // selectedList.cards.push({ card.cardId, card.listId })


            console.log(action.payload, cardId, cardName, listId, newListId);
                return {
                    ...state,
                    [newListId]: currentList

                }
        }

        default:
            return state;
    }
}


const ActiveBoardReducer = combineReducers({
    listItems: ListReducer,
})

export default ActiveBoardReducer;
