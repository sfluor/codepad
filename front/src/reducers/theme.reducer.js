import { CHANGE_THEME } from '../actions/';

export default function(state={}, action){
	switch(action.type){
		case CHANGE_THEME:
			return action.payload;
		default:
			return state;
	}
}