import { ARCHIVE_POST } from './ActionTypes';

export default function ArchiveCard(cardId) {
    return dispatch =>
        dispatch({ type: ARCHIVE_POST, payload: cardId })
}
