import {
    SUBMIT_NEW_BOARD,
    RECEIVE_NEW_BOARD,
    CLEAN_NEW_BOARD,
    STORE_NEW_BOARD,
} from './ActionTypes';
import Store from './../Store';

export default function submitNewBoard(title) {
    return dispatch => {

        dispatch({type: SUBMIT_NEW_BOARD,  payload: title });

        const newBoard = {
            title: Store.getState().newBoard.title,
            id: Store.getState().newBoard.id,
        };

        dispatch({type: RECEIVE_NEW_BOARD, payload: newBoard });
        dispatch({type: CLEAN_NEW_BOARD });
        dispatch({type: STORE_NEW_BOARD });

    }
}
