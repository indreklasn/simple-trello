import { CREATE_NEW_BOARD } from './ActionTypes';

export default function createNewBoard() {
    return {
        type: CREATE_NEW_BOARD,
        payload: true,
    };
}
