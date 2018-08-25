import {FETCH_SONGS, FETCH_SONG, DELETE_SONG} from "../actions";
import _ from 'lodash';


export default function (state = {}, action) {
    switch (action.type) {
        case DELETE_SONG:
            // Look at state , if state has key of song id then drop it. Doesn't modify state - replaces it.
            return _.omit(state, action.payload);
        case FETCH_SONG:
            return{ ...state, [action.payload.data.id]: action.payload.data };
        case FETCH_SONGS:
           return _.mapKeys(action.payload.data.rows, "id");
        default:
            return state;
    }

}