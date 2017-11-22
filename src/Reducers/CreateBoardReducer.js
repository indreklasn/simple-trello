import {
    CREATE_NEW_BOARD,
    CANCEL_NEW_BOARD,
    SUBMIT_NEW_BOARD,
} from './../Actions/ActionTypes';


const initialState = {
    isBoardOpen: false,
    title: null,
}

export default function(state = initialState, action) {

    switch (action.type) {

        case CREATE_NEW_BOARD:
            return {
                ...state,
                title: null,
                isBoardOpen: true,
            };

        case CANCEL_NEW_BOARD:
            return {
                ...state,
                title: null,
                isBoardOpen: false,
            };

        case SUBMIT_NEW_BOARD:
            console.log(action.payload)
            return {
                ...state,
                title: action.payload,
                isBoardOpen: true,
            }


            default:
                return state;

    }

}
