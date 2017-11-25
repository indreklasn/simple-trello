import { SUBMIT_LIST, SUBMIT_LIST_SUCCESS } from './ActionTypes';

export default function submitList(name, callback) {
    return dispatch => {
        dispatch({type: SUBMIT_LIST, payload: { name }})
        dispatch({type: SUBMIT_LIST_SUCCESS })
    }
}
