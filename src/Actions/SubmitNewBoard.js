import { SUBMIT_NEW_BOARD } from './ActionTypes';


export default function submitNewBoard(title) {
    return {
        type: SUBMIT_NEW_BOARD,
        payload: title,
    }
}
