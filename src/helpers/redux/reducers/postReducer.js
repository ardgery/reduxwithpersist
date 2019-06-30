import {FETCH_POSTS, NEW_POST, RESET_NEW_POST, SET_NEW_POSTS} from '../actions/types';
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
                // items:[
                //     action.payload,
                //     ...state.items
                // ],
                item:action.payload
            };
        case RESET_NEW_POST:
            return {
                ...state,
                item:{}
            };
        case SET_NEW_POSTS:
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
}