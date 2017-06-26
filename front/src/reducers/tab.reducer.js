import { CHANGE_TAB } from '../actions';

// Index of current tab
export default function(state=0, action){
	console.log(state);
	switch(action.type){
		case CHANGE_TAB:
			return action.payload;
		default:
			return state;
	}
}