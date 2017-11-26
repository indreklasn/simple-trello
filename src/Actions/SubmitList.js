import { SUBMIT_LIST, SUBMIT_LIST_SUCCESS } from './ActionTypes';
import { v4 } from 'node-uuid';

export default function submitList(name) {
    return dispatch => {
        dispatch({type: SUBMIT_LIST, payload: { name, id: v4() }})
    }
}
