import { SUBMIT_NEW_CARD } from './ActionTypes';

export default function submitNewCard(card) {
    return dispatch => {
        dispatch({ type: SUBMIT_NEW_CARD, payload: card });
    }
}
