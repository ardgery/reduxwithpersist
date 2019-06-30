import {FETCH_POSTS, NEW_POST} from '../actions/types';
import States from "../states";



export default function(state = States, action){
    switch(action.type){
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            return {
                ...state,
                item:action.payload
            };
        default:
            return state;
    }
}