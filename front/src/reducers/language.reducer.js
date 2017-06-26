import { CHANGE_LANG } from '../actions/';

export default function(state='', action){
	switch(action.type){
		case CHANGE_LANG:
			return action.payload.language;
		return state;
	}
}