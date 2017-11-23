import _ from 'lodash';
import { SELECT_ACTIVE_BOARD } from './ActionTypes';
import Store from '../Store';

export default function selectActiveBoard(id) {
    return dispatch => {

        try {
            if (Store.getState().boardsCollection) {

                let boardsCollection = Store.getState().boardsCollection;
                let activeBoard = _.find(boardsCollection, board => {
                    return board.id === parseInt(id)
                })

                localStorage.setItem('activeBoard', JSON.stringify(activeBoard));
            }
            let selectedBoard = JSON.parse(localStorage.getItem('activeBoard'));
            dispatch({type: SELECT_ACTIVE_BOARD, payload: selectedBoard })
        }

        catch (error) {
            console.log(error)
            return undefined;
        }


    }
}
