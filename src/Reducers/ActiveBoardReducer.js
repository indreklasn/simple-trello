import {
    SELECT_ACTIVE_BOARD,
    SELECT_ACTIVE_BOARD_SUCCESS,
    LIST_EDIT_MODE_ENABLED,
    STOP_EDITING_LIST,
    SUBMIT_LIST,
} from './../Actions/ActionTypes';


const initialState = {
    title: null,
    id: null,
    isFetching: false,
    isEditingList: false,
    listItems: [],
}

export default function(state = initialState, action) {

    switch (action.type) {

        case SELECT_ACTIVE_BOARD:
            return {
                ...state,
                title: action.payload.title,
                id:  action.payload.id,
                isFetching: true
            }

            case SELECT_ACTIVE_BOARD_SUCCESS:
                return {
                    ...state,
                    isFetching: false
                }

            case STOP_EDITING_LIST:
                console.log("inside LIST_EDIT_MODE_DISABLED")
                return {
                    ...state,
                    isEditingList: action.payload
                }

            case LIST_EDIT_MODE_ENABLED:
                return {
                    ...state,
                    isEditingList: action.payload
                };

            case SUBMIT_LIST:
                return {
                    ...state,
                    // listItems: // push action.payload(string) inside this array
                }


        default:
            return {...state};

    }
}
