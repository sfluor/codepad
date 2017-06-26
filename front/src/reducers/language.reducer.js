import { CHANGE_LANG } from '../actions/';

export default function(state='python', action){
	switch(action.type){
		case CHANGE_LANG:
			return action.payload;
		default:
			return state;
	}
}