import {
    SUBMIT_LIST,
    SUBMIT_NEW_CARD,
} from './../Actions/ActionTypes';
import uniqueId from 'lodash/uniqueId';

// const initialState = {
//     listItem: {
//         byId: {
//             id: null,
//             cards: {
//                 name: [],
//                 id: null
//             }
//         }
//     }
// }

export default function(state = {}, action) {
    switch (action.type) {

        case SUBMIT_LIST:
            return {
                ...state,
                listItem: {
                    ...state.listItem,
                    [uniqueId('list_')]: {
                        name: action.payload
                    }
                }
            };

        // case SUBMIT_NEW_CARD:
        //     return {
        //         ...state,
        //         listItem: {
        //             cards: state.listItem.cards.concat(action.payload)
        //         }
        //     }

        default:
            return state;
    }
}
