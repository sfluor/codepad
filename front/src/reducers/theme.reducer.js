import { CHANGE_THEME } from '../actions/';

export default function(state='dawn', action){
	switch(action.type){
		case CHANGE_THEME:
			return action.payload;
		default:
			return state;
	}
}