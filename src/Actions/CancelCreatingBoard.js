import { CANCEL_NEW_BOARD } from './ActionTypes';

export default function cancelCreatingBoard() {
    return {
        type: CANCEL_NEW_BOARD,
        payload: false,
    }
}
