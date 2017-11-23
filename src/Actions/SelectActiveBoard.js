import { SELECT_ACTIVE_BOARD } from './ActionTypes';

export default function selectActiveBoard(id) {
    return dispatch => {
        return dispatch({ type: SELECT_ACTIVE_BOARD, payload: id })
    }
}
