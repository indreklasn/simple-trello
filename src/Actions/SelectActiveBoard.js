import { SELECT_ACTIVE_BOARD } from './ActionTypes';

export default function selectActiveBoard(id) {
    return dispatch => {
        dispatch({ type: SELECT_ACTIVE_BOARD, payload: id })
    }
}
