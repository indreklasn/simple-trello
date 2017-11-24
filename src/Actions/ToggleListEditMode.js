import {
    LIST_EDIT_MODE_ENABLED,
} from './ActionTypes';

export default function enableListEditMode() {
    return dispatch => dispatch({ type: LIST_EDIT_MODE_ENABLED, payload: true });
}
