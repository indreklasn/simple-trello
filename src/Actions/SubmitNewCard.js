import { SUBMIT_NEW_CARD } from './ActionTypes';

export default function submitNewCard(card, cardId, listId) {
    return dispatch => {
        dispatch({ type: SUBMIT_NEW_CARD, payload: { cardName: card, listId, cardId } });
    }
}
