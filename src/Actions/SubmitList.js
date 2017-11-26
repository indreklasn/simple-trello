import { SUBMIT_LIST } from './ActionTypes';
import uniqueId from 'lodash/uniqueId'

export default function submitList(name) {
    return dispatch => {
        dispatch({type: SUBMIT_LIST, payload: name })
    }
}
